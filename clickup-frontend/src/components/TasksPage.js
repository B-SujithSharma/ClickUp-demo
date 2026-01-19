import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles";

export default function TasksPage({ tasks }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = search
    ? tasks.filter((t) =>
        t.name.toLowerCase().includes(search.toLowerCase())
      )
    : tasks;

  return (
    <div style={styles.container}>
      <button style={styles.backBtn} onClick={() => navigate("/")}>
        ← Back
      </button>

      <h2>My Tasks</h2>

      <input
        style={styles.input}
        placeholder="Search tasks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

     <div style={styles.tasksGrid}>
  {filtered.map((t, index) => (
    <div key={t.id} style={styles.gridCard}>

      {/* STATUS BADGE */}
      <span
        style={{
          ...styles.statusBadge,
          background:
            t.status?.status === "in progress"
              ? "#facc15"
              : t.status?.status === "done"
              ? "#22c55e"
              : "#38bdf8",
        }}
      >
        {t.status?.status || "unknown"}
      </span>

      {/* TASK NAME → CLICKUP */}
      <a
        href={t.url}
        target="_blank"
        rel="noreferrer"
        style={styles.taskLink}
      >
        {index + 1}. {t.name}
      </a>

      {/* STATUS TEXT (OPTIONAL, CLEAN) */}
      <small style={{ color: "#94a3b8" }}>
        Status: {t.status?.status || "N/A"}
      </small>

    </div>
  ))}
</div>

    </div>
  );
}
