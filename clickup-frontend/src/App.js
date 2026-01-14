import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TasksPage from "./components/TasksPage";
import AllTasksPage from "./components/AllTasksPage";
import LeaderDetail from "./components/LeaderDetail";

import {
  fetchMe,
  fetchMyTasks,
  fetchAllTasks,
} from "./services/clickupApi";

import styles from "./styles";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  const [myTasks, setMyTasks] = useState([]);
  const [allTasks, setAllTasks] = useState([]);

  const [erLoading, setErLoading] = useState(false);

  /* =========================
     READ + PERSIST TOKEN ✅
  ========================= */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("token");

    if (t) {
      // ✅ first login (OAuth redirect)
      setToken(t);
      localStorage.setItem("clickup_token", t);

      // remove token from URL
      window.history.replaceState({}, document.title, "/");
    } else {
      // ✅ page refresh / revisit
      const savedToken = localStorage.getItem("clickup_token");
      if (savedToken) {
        setToken(savedToken);
      }
    }
  }, []);

  /* =========================
     FETCH USER INFO
  ========================= */
  useEffect(() => {
    if (!token) return;
    fetchMe(token).then(setUser);
  }, [token]);

  /* =========================
     LOGIN
  ========================= */
  const login = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/login`;
  };

  /* =========================
     LOAD MY TASKS
  ========================= */
  const loadMyTasks = async () => {
    const data = await fetchMyTasks(token);
    setMyTasks(data);
  };

  /* =========================
     LOAD ALL ER TASKS
  ========================= */
  const loadAllTasks = async () => {
    setErLoading(true);
    try {
      const data = await fetchAllTasks(token);
      setAllTasks(data);
    } finally {
      setErLoading(false);
    }
  };

  /* =========================
     LOGIN PAGE
  ========================= */
  if (!token) {
    return (
      <div style={styles.loginWrapper}>
        <div style={styles.loginGlow} />

        <div style={styles.loginCard} className="fade-up">
          <h1 style={styles.loginTitle}>Eternal Robotics</h1>

          <p style={styles.loginSubtitle}>
            Internal Operations Dashboard
          </p>

          <button
            style={styles.loginBtn}
            className="login-btn-anim"
            onClick={login}
          >
            Login with ClickUp →
          </button>

          <p style={styles.loginFooter}>
            Secure enterprise authentication
          </p>
        </div>
      </div>
    );
  }

  /* =========================
     APP
  ========================= */
  return (
    <BrowserRouter>
      <Navbar user={user} />

      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              user={user}
              myTasks={myTasks}
              allTasks={allTasks}
              loadMyTasks={loadMyTasks}
              loadAllTasks={loadAllTasks}
            />
          }
        />

        <Route
          path="/my-tasks"
          element={<TasksPage tasks={myTasks} />}
        />

        <Route
          path="/leader/:id"
          element={<LeaderDetail />}
        />

        <Route
          path="/er-tasks"
          element={
            <AllTasksPage
              tasks={allTasks}
              loading={erLoading}
              loadAllTasks={loadAllTasks}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
