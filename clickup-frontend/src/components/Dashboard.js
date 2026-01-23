import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles";
import LeadershipCarousel from "./LeadershipCarousel";
import LeadershipCards from "./LeadershipCards";

export default function Dashboard({
  user,
  myTasks,
  allTasks,
  loadMyTasks,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    loadMyTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.dashboardGrid}>

        {/* LEFT : LEADERSHIP UPDATES (30%) */}
        <div>
          <LeadershipCarousel />
        </div>

        {/* RIGHT : OVERVIEW + WELCOME + EXEC */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          {/* TOP RIGHT */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            
            {/* SYSTEM OVERVIEW */}
            <div style={styles.snapshotCard}>
              <h4 style={{ marginBottom: 10 }}>System Overview</h4>

              <div style={styles.snapshotRow}>
                <span>User</span>
                <strong>{user?.username}</strong>
              </div>

              <div style={styles.snapshotRow}>
                <span>Role</span>
                <strong>Engineer</strong>
              </div>

              <div style={styles.snapshotRow}>
                <span>Status</span>
                <span style={styles.statusGood}>● Online</span>
              </div>

              <hr style={styles.snapshotDivider} />

              <div style={styles.snapshotRow}>
                <span>My Tasks</span>
                <strong>{myTasks.length}</strong>
              </div>

              <div style={styles.snapshotRow}>
                <span>ER Tasks</span>
                <strong>{allTasks.length}</strong>
              </div>

              <div style={styles.snapshotRow}>
                <span>Teams</span>
                <strong>5</strong>
              </div>

              <hr style={styles.snapshotDivider} />

              <div style={styles.overviewActions}>
                <button
                  style={styles.overviewBtn}
                  onClick={() => navigate("/my-tasks")}
                >
                  My Tasks
                </button>

                <button
                  style={styles.overviewBtnOutline}
                  onClick={() => navigate("/er-tasks")}
                >
                  All ER Tasks
                </button>
              </div>
            </div>

            {/* WELCOME */}
            <div style={styles.heroCard}>
              <h2>Welcome, {user?.username} 👋</h2>
              <p>Eternal Robotics Internal Dashboard</p>
            </div>
          </div>

          {/* EXEC CARDS */}
          <div style={styles.execGrid}>
            <div style={styles.execCard}>
              <h4>🏢 Client Visits</h4>
              <ul style={styles.execList}>
                <li>Tata Motors · Wed</li>
                <li>Maruti Suzuki · Fri</li>
                <li>V-Guard · Next Week</li>
              </ul>
            </div>

            <div style={styles.execCard}>
              <h4>📦 Deliverables</h4>
              <ul style={styles.execList}>
                <li>Pitti Phase-2</li>
                <li>Safety AI v1.3</li>
                <li>Enterprise PoC</li>
              </ul>
            </div>

            <div style={styles.execCardWarn}>
              <h4>🚨 Risks</h4>
              <ul style={styles.execList}>
                <li>Hardware delays</li>
                <li>AI data quality</li>
                <li>Site readiness</li>
              </ul>
            </div>

            <div style={styles.execCard}>
              <h4>⏳ Milestones</h4>
              <ul style={styles.execList}>
                <li>Q3 Freeze · 15 Jul</li>
                <li>Tata v3 · 22 Jul</li>
                <li>Go-Live · 30 Jul</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM : LEADERSHIP MESSAGES */}
        <div style={{ gridColumn: "1 / -1" }}>
          <LeadershipCards />
        </div>

      </div>
    </div>
  );
}
