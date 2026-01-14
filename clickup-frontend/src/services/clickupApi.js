export const fetchMe = async (token) => {
  const res = await fetch("http://localhost:5000/me", {
    headers: { Authorization: token },
  });
  const data = await res.json();
  return data.user;
};

export const fetchMyTasks = async (token) => {
  const res = await fetch("http://localhost:5000/tasks", {
    headers: { Authorization: token },
  });
  return (await res.json()).filter((t) => t.space);
};

export const fetchAllTasks = async (token) => {
  const res = await fetch("http://localhost:5000/tasks/all", {
    headers: { Authorization: token },
  });
  return (await res.json()).filter((t) => t.space);
};
