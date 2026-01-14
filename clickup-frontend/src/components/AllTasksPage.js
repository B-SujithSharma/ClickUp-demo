import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles";
import Loader from "./Loader";

export default function AllTasksPage({
  tasks,
  loading,
  loadAllTasks,
}) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // ✅ LOAD TASKS WHEN PAGE OPENS
 useEffect(() => {
  if (tasks.length === 0) {
    loadAllTasks();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  const filtered = search
    ? tasks.filter((t) =>
        t.assignees?.some((a) =>
          a.username.toLowerCase().includes(search.toLowerCase())
        )
      )
    : tasks;

  return (
    <div style={styles.container}>
      {loading && <Loader />}

      <button style={styles.backBtn} onClick={() => navigate("/")}>
        ← Back
      </button>

      <h2>All ER Tasks</h2>

      <input
        style={styles.input}
        placeholder="Search by member name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={styles.tasksGrid}>
        {filtered.map((t, index) => (
          <div key={t.id} style={styles.gridCard}>
            <h4>
              {index + 1}. {t.name}
            </h4>
            <small>
              {t.assignees?.map((a) => a.username).join(", ") ||
                "Unassigned"}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
