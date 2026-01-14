const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();



const app = express();
app.use(cors());
app.use(express.json());

/* ========== 1. LOGIN WITH CLICKUP ========== */
app.get("/auth/login", (req, res) => {
  const authUrl =
    `https://app.clickup.com/api` +
    `?client_id=${process.env.CLIENT_ID}` +
    `&redirect_uri=${process.env.REDIRECT_URI}`;

  res.redirect(authUrl);
});

/* ========== 2. CALLBACK (GET TOKEN) ========== */
app.get("/auth/callback", async (req, res) => {
  try {
    const { code } = req.query;

    if (!code) {
      return res.status(400).send("No authorization code received");
    }

    const tokenRes = await axios.post(
      "https://api.clickup.com/api/v2/oauth/token",
      {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code,
      }
    );

    const accessToken = tokenRes.data.access_token;

    res.redirect(`${process.env.FRONTEND_URL}?token=${accessToken}`);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send("OAuth failed");
  }
});

/* ========== 3. GET LOGGED-IN USER ========== */
app.get("/me", async (req, res) => {
  try {
    const token = req.headers.authorization;

    const response = await axios.get(
      "https://api.clickup.com/api/v2/user",
      { headers: { Authorization: token } }
    );

    res.json(response.data);
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});
/* ========== 3A. GET ALL TEAM USERS (FOR NAME SEARCH) ========== */
app.get("/team-users", async (req, res) => {
  try {
    const token = req.headers.authorization;

    // Get team
    const teamsRes = await axios.get(
      "https://api.clickup.com/api/v2/team",
      { headers: { Authorization: token } }
    );
    const teamId = teamsRes.data.teams[0].id;

    // Get users in team
    const usersRes = await axios.get(
      `https://api.clickup.com/api/v2/team/${teamId}/user`,
      { headers: { Authorization: token } }
    );

    res.json(usersRes.data.users);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch team users" });
  }
});


/* ========== 4. GET ONLY MY TASKS ========== */
app.get("/tasks", async (req, res) => {
  try {
    const token = req.headers.authorization;

    // 1. Get logged-in user
    const userRes = await axios.get(
      "https://api.clickup.com/api/v2/user",
      { headers: { Authorization: token } }
    );
    const userId = userRes.data.user.id;

    // 2. Get team
    const teamsRes = await axios.get(
      "https://api.clickup.com/api/v2/team",
      { headers: { Authorization: token } }
    );
    const teamId = teamsRes.data.teams[0].id;

    // 3. Get ONLY tasks assigned to user (CORRECT WAY)
    const tasksRes = await axios.get(
      `https://api.clickup.com/api/v2/team/${teamId}/task`,
      {
        headers: { Authorization: token },
        params: {
          assignees: [userId],
          page: 0,
        },
      }
    );

    res.json(tasksRes.data.tasks);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch user tasks" });
  }
});
/* ========== 5. GET TASKS BY ASSIGNEE NAME ========== */
app.get("/tasks/by-name", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    // 1. Get team
    const teamsRes = await axios.get(
      "https://api.clickup.com/api/v2/team",
      { headers: { Authorization: token } }
    );
    const teamId = teamsRes.data.teams[0].id;

    // 2. Get all users
    const usersRes = await axios.get(
      `https://api.clickup.com/api/v2/team/${teamId}/user`,
      { headers: { Authorization: token } }
    );

    const users = usersRes.data.users;

    // 3. Find user by NAME (same as ClickUp filter)
    const user = users.find(
      (u) =>
        u.username.toLowerCase().includes(name.toLowerCase()) ||
        u.email?.toLowerCase().includes(name.toLowerCase())
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // 4. Fetch tasks for that user
    const tasksRes = await axios.get(
      `https://api.clickup.com/api/v2/team/${teamId}/task`,
      {
        headers: { Authorization: token },
        params: {
          assignees: [user.id],
          page: 0,
        },
      }
    );

    res.json({
      assignee: user.username,
      tasks: tasksRes.data.tasks,
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch tasks by name" });
  }
});
/* ========== 7. GET ALL TEAM TASKS (FOR SEARCH) ========== */
app.get("/tasks/all", async (req, res) => {
  try {
    const token = req.headers.authorization;

    // 1. Get team
    const teamsRes = await axios.get(
      "https://api.clickup.com/api/v2/team",
      { headers: { Authorization: token } }
    );
    const teamId = teamsRes.data.teams[0].id;

    let allTasks = [];
    let page = 0;
    let hasMore = true;

    // 2. Fetch all tasks (pagination)
    while (hasMore) {
      const tasksRes = await axios.get(
        `https://api.clickup.com/api/v2/team/${teamId}/task`,
        {
          headers: { Authorization: token },
          params: {
            page,
            include_closed: true,
            subtasks: true,
          },
        }
      );

      allTasks.push(...tasksRes.data.tasks);

      hasMore = tasksRes.data.tasks.length === 100;
      page++;
    }

    res.json(allTasks);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch all tasks" });
  }
});

/* ========== SERVER START ========== */
app.listen(5000, () => {
  console.log("🚀 Backend running at http://localhost:5000");
});
