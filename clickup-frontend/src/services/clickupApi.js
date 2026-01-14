export const fetchMe = async (token) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/tasks`,
    {
      headers: { Authorization: token },
    }
  );

  const data = await res.json();
  return data.user;
};

export const fetchMyTasks = async (token) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/tasks`,
    {
      headers: { Authorization: token },
    }
  );

  return (await res.json()).filter((t) => t.space);
};

export const fetchAllTasks = async (token) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/tasks`,
    {
      headers: { Authorization: token },
    }
  );

  return (await res.json()).filter((t) => t.space);
};
