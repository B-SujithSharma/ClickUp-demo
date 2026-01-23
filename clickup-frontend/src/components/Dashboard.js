// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../styles";
// import LeadershipCarousel from "./LeadershipCarousel";
// import LeadershipCards from "./LeadershipCards";

// export default function Dashboard({
//   user,
//   myTasks,
//   allTasks,
//   loadMyTasks,
// }) {
//   const navigate = useNavigate();

//   useEffect(() => {
//     loadMyTasks();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div style={styles.container}>
//       <div style={styles.dashboardGrid}>
//         {/* ================= SYSTEM OVERVIEW ================= */}
//         <div style={styles.snapshotCard} className="fade-up">
//           <h4 style={{ marginBottom: 12 }}>System Overview</h4>

//           <div style={styles.snapshotRow}>
//             <span>User</span>
//             <strong>{user?.username}</strong>
//           </div>

//           <div style={styles.snapshotRow}>
//             <span>Role</span>
//             <strong>Engineer</strong>
//           </div>

//           <div style={styles.snapshotRow}>
//             <span>Status</span>
//             <span style={styles.statusGood}>● Online</span>
//           </div>

//           <hr style={styles.snapshotDivider} />

//           <div style={styles.snapshotRow}>
//             <span>My Tasks</span>
//             <strong>{myTasks.length}</strong>
//           </div>

//           <div style={styles.snapshotRow}>
//             <span>ER Tasks</span>
//             <strong>{allTasks.length}</strong>
//           </div>

//           <div style={styles.snapshotRow}>
//             <span>Teams</span>
//             <strong>5</strong>
//           </div>

//           <hr style={styles.snapshotDivider} />

//           <div style={styles.snapshotRow}>
//             <span>Task Load</span>
//             <span
//               style={
//                 myTasks.length < 8
//                   ? styles.statusGood
//                   : styles.statusWarn
//               }
//             >
//               {myTasks.length < 8 ? "Low" : "High"}
//             </span>
//           </div>

//           <div style={styles.snapshotRow}>
//             <span>System Health</span>
//             <span style={styles.statusGood}>Operational</span>
//           </div>

//           <hr style={styles.snapshotDivider} />

//           <div style={styles.overviewActions}>
//             <button
//               style={styles.overviewBtn}
//               onClick={() => navigate("/my-tasks")}
//             >
//               My Tasks
//             </button>

//             <button
//               style={styles.overviewBtnOutline}
//               onClick={() => navigate("/er-tasks")}
//             >
//               All ER Tasks
//             </button>
//           </div>
//         </div>

//         {/* ================= HERO ================= */}
//         <div
//           style={{ ...styles.heroCard, gridColumn: "span 3" }}
//           className="fade-up fade-up-1"
//         >
//           <h2>Welcome, {user?.username} 👋</h2>
//           <p>Eternal Robotics Internal Dashboard</p>
//           <LeadershipCarousel />
//         </div>

//         {/* ================= EXECUTIVE OPERATIONS ================= */}
//         <div style={{ gridColumn: "span 4" }}>
//           <div style={styles.execGrid}>
//             {/* CLIENT VISITS */}
//             <div style={styles.execCard} className="fade-up">
//               <h4>🏢 Client Visits & Demos</h4>
//               <ul style={styles.execList}>
//                 <li>
//                   <strong>Tata Motors</strong>
//                   <span> · tm Demo · Wed</span>
//                 </li>
//                 <li>
//                   <strong>Maruti Suzuki</strong>
//                   <span> · Site Visit · Fri</span>
//                 </li>
//                 <li>
//                   <strong>V guard</strong>
//                   <span> · AI Inspection Review · Next Week</span>
//                 </li>
//               </ul>
//             </div>

//             {/* DELIVERABLES */}
//             <div style={styles.execCard} className="fade-up fade-up-1">
//               <h4>📦 Key Deliverables (This Week)</h4>
//               <ul style={styles.execList}>
//                 <li>pitti Phase-2 deployment – Site A</li>
//                 <li>Safety AI Model v1.3 rollout</li>
//                 <li>Enterprise PoC completion</li>
//               </ul>
//             </div>

//             {/* RISKS */}
//             <div style={styles.execCardWarn} className="fade-up fade-up-2">
//               <h4>🚨 Risks & Attention Needed</h4>
//               <ul style={styles.execList}>
//                 <li>Hardware delay from vendor</li>
//                 <li>AI dataset quality issues</li>
//                 <li>Site readiness pending approval</li>
//               </ul>
//             </div>

//             {/* MILESTONES */}
//             <div style={styles.execCard} className="fade-up fade-up-3">
//               <h4>⏳ Upcoming Milestones</h4>
//               <ul style={styles.execList}>
//                 <li>
//                   <strong>Q3 Roadmap Freeze</strong> · 15 Jul
//                 </li>
//                 <li>
//                   <strong>Tata v3 Testing</strong> · 22 Jul
//                 </li>
//                 <li>
//                   <strong>Enterprise Go-Live</strong> · 30 Jul
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* ================= LEADERSHIP CARDS ================= */}
//         <div style={{ gridColumn: "span 4" }}>
//           <LeadershipCards />
//         </div>
//       </div>
//     </div>
//   );
// }
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

        {/* ================= LEADERSHIP (TOP PRIORITY) ================= */}
        <div style={{ gridColumn: "1 / -1" }}>
          <LeadershipCarousel />
          <LeadershipCards />
        </div>

        {/* ================= SYSTEM OVERVIEW (LEFT) ================= */}
        <div style={styles.snapshotCard} className="fade-up">
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

          <div style={styles.snapshotRow}>
            <span>Task Load</span>
            <span
              style={
                myTasks.length < 8
                  ? styles.statusGood
                  : styles.statusWarn
              }
            >
              {myTasks.length < 8 ? "Low" : "High"}
            </span>
          </div>

          <div style={styles.snapshotRow}>
            <span>System Health</span>
            <span style={styles.statusGood}>Operational</span>
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

        {/* ================= HERO (RIGHT) ================= */}
        <div style={styles.heroCard} className="fade-up fade-up-1">
          <h2>Welcome, {user?.username} 👋</h2>
          <p>Eternal Robotics Internal Dashboard</p>
        </div>

        {/* ================= EXECUTIVE OPERATIONS (BOTTOM) ================= */}
        <div style={{ gridColumn: "1 / -1" }}>
          <div style={styles.execGrid}>
            <div style={styles.execCard} className="fade-up">
              <h4>🏢 Client Visits & Demos</h4>
              <ul style={styles.execList}>
                <li>
                  <strong>Tata Motors</strong>
                  <span> · Demo · Wed</span>
                </li>
                <li>
                  <strong>Maruti Suzuki</strong>
                  <span> · Site Visit · Fri</span>
                </li>
                <li>
                  <strong>V Guard</strong>
                  <span> · AI Review · Next Week</span>
                </li>
              </ul>
            </div>

            <div style={styles.execCard} className="fade-up fade-up-1">
              <h4>📦 Key Deliverables</h4>
              <ul style={styles.execList}>
                <li>Pitti Phase-2 deployment</li>
                <li>Safety AI v1.3 rollout</li>
                <li>Enterprise PoC completion</li>
              </ul>
            </div>

            <div style={styles.execCardWarn} className="fade-up fade-up-2">
              <h4>🚨 Risks</h4>
              <ul style={styles.execList}>
                <li>Hardware vendor delays</li>
                <li>AI dataset quality issues</li>
                <li>Site readiness pending</li>
              </ul>
            </div>

            <div style={styles.execCard} className="fade-up fade-up-3">
              <h4>⏳ Milestones</h4>
              <ul style={styles.execList}>
                <li>Q3 roadmap freeze · 15 Jul</li>
                <li>Tata v3 testing · 22 Jul</li>
                <li>Enterprise go-live · 30 Jul</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
