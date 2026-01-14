const API = process.env.REACT_APP_API_URL;

/* =========================
   FETCH LOGGED-IN USER
========================= */
export const fetchMe = async (token) => {
  const res = await fetch(`${API}/me`, {
    headers: {
      Authorization: token,
    },
  });

  const data = await res.json();
  return data.user; // ✅ CORRECT
};

/* =========================
   FETCH MY TASKS
========================= */
export const fetchMyTasks = async (token) => {
  const res = await fetch(`${API}/tasks`, {
    headers: {
      Authorization: token,
    },
  });

  return await res.json(); // ✅ already filtered in backend
};

/* =========================
   FETCH ALL TEAM TASKS
========================= */
export const fetchAllTasks = async (token) => {
  const res = await fetch(`${API}/tasks/all`, {
    headers: {
      Authorization: token,
    },
  });

  return await res.json(); // ✅ ALL tasks
};
