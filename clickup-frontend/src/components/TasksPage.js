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

      {/* ✅ GRID FIXED HERE */}
      <div style={styles.tasksGrid}>
        {filtered.map((t, index) => (
          <div key={t.id} style={styles.gridCard}>
            <h4>
              {index + 1}. {t.name}
            </h4>
            <p>Status: {t.status?.status || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
