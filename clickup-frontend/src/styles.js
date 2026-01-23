const styles = {
  /* =========================
     NAVBAR
  ========================= */
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    background: "#020617",
    color: "#e5e7eb",
    display: "flex",
    alignItems: "center",
    padding: "0 18px",
    borderBottom: "1px solid #1e293b",
    zIndex: 1000,
  },
  logo: {
    fontWeight: 600,
    fontSize: 14,
  },
  centerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    color: "#c7d2fe",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: "#38bdf8",
    color: "#020617",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    fontSize: 13,
  },

  /* =========================
     PAGE CONTAINER
  ========================= */
  container: {
    // padding: 18,
    // paddingTop: 76,
    // minHeight: "100vh",
    // background: "#020617",
    // color: "#e5e7eb",
    padding: 18,
    paddingTop: 76,
    height: "100vh",          // ✅ FIX HEIGHT
    overflow: "hidden",       // ✅ KILL SCROLL
    background: "#020617",
    color: "#e5e7eb",
  },

  /* =========================
     DASHBOARD GRID
  ========================= */
  dashboardGrid: {
    // display: "grid",
    // gridTemplateColumns: "repeat(4, 1fr)",
    // gap: 16, // ⬅️ compact spacing
      display: "grid",
      gridTemplateColumns: "0.9fr 2.1fr",
      gridTemplateRows: "auto auto 1fr",
      gap: 16,
      height: "100%",
  },

  /* =========================
     STANDARD GRID CARD
  ========================= */
  gridCard: {
    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(148,163,184,0.15)",
    borderRadius: 14,
    padding: 14, // ⬅️ reduced padding
    color: "#e5e7eb",
    fontSize: 13,
    lineHeight: 1.6,
  },

  /* =========================
     PLACEHOLDER CARD
  ========================= */
  placeholderCard: {
    background: "rgba(15, 23, 42, 0.25)",
    border: "1px dashed rgba(148,163,184,0.25)",
    borderRadius: 14,
    padding: 14,
    color: "#64748b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
  },

  /* =========================
     WELCOME CARD
  ========================= */
  welcomeCard: {
    background: "#0f172a",
    color: "#e5e7eb",
    padding: "18px 20px", // ⬅️ compact
    borderRadius: 14,
    boxShadow: "0 0 0 1px #1e293b",
  },

  /* =========================
     LEADERSHIP GLASS SLIDER
  ========================= */
  leadershipGlass: {
  position: "relative",
  padding: "18px 20px 32px",
  borderRadius: 16,
  background: "rgba(15, 23, 42, 0.65)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(148,163,184,0.15)",
  textAlign: "center",
},


  leaderSlide: {
    animation: "fadeSlide 0.7s ease",
  },

 leadershipTitle: {
  color: "#38bdf8",
  fontSize: 13,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom: 12,
},

leaderName: {
  fontSize: 26,        // ⬅️ BIGGER
  fontWeight: 600,
  marginBottom: 6,
},

leaderRole: {
  fontSize: 16,        // ⬅️ BIGGER
  color: "#c7d2fe",
  marginBottom: 10,
},


  leaderPoints: {
  listStyle: "none",
  padding: 0,
  margin: 0,
  fontSize: 15,        // ⬅️ slightly bigger
  lineHeight: 1.7,
  color: "#e5e7eb",
},
leaderMeta: {
  display: "flex",
  justifyContent: "center",
  gap: 8,
  fontSize: 14,
  color: "#94a3b8",
  marginBottom: 16,
},



  dots: {
    position: "absolute",
    bottom: 12,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: 8,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "rgba(148,163,184,0.4)",
    cursor: "pointer",
  },

  dotActive: {
    width: 16,
    borderRadius: 6,
    background: "#38bdf8",
    boxShadow: "0 0 8px rgba(56,189,248,0.8)",
  },

  /* =========================
     BUTTONS (COMPACT)
  ========================= */
  btn: {
    marginTop: 10,
    padding: "6px 12px",
    fontSize: 13,
    background: "#38bdf8",
    color: "#020617",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: 500,
  },

  btnOutline: {
    marginTop: 10,
    padding: "6px 12px",
    fontSize: 13,
    background: "transparent",
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    borderRadius: 8,
    cursor: "pointer",
  },

  /* =========================
     INPUT
  ========================= */
  input: {
    marginTop: 10,
    padding: "8px 10px",
    borderRadius: 8,
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#e5e7eb",
    fontSize: 13,
    outline: "none",
  },
  heroCard: {
  background: "linear-gradient(135deg, #020617, #0f172a)",
  borderRadius: 18,
  padding: 18,
  border: "1px solid #1e293b",
  display: "flex",
  flexDirection: "column",
  gap: 12,
},

heroHeader: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
},

  
// dashboardGrid: {
//   display: "grid",
//   gridTemplateColumns: "repeat(4, 1fr)",
//   gap: 16,
// },
/* =========================
   SYSTEM SNAPSHOT (OVERVIEW)
========================= */
snapshotCard: {
  background: "rgba(15, 23, 42, 0.45)", // lighter glass
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: "1px solid rgba(148,163,184,0.12)",
  borderRadius: 14,
  padding: 16,
  fontSize: 13,
  color: "#e5e7eb",
},

snapshotRow: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 6,
},

snapshotDivider: {
  border: "none",
  borderTop: "1px solid #1e293b",
  margin: "10px 0",
},

statusGood: {
  color: "#22c55e",
  fontWeight: 500,
},
/* =========================
   SYSTEM OVERVIEW (MERGED)
========================= */
snapshotCard: {
  background: "rgba(15, 23, 42, 0.45)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  border: "1px solid rgba(148,163,184,0.12)",
  borderRadius: 14,
  padding: 16,
  fontSize: 13,
  color: "#e5e7eb",
},

snapshotRow: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 6,
},

snapshotDivider: {
  border: "none",
  borderTop: "1px solid #1e293b",
  margin: "10px 0",
},

statusGood: {
  color: "#22c55e",
  fontWeight: 500,
},

statusWarn: {
  color: "#facc15",
  fontWeight: 500,
},
tasksGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)", // ✅ 4 cards per row
  gap: 16,
  marginTop: 16,
  animation: "fadeUp 0.4s ease",
},
/* =========================
   OVERVIEW ACTION BUTTONS
========================= */
overviewActions: {
  display: "flex",
  gap: 12,
  marginTop: 12,
},

overviewBtn: {
  flex: 1,
  padding: "10px 0",
  background: "#38bdf8",
  color: "#020617",
  border: "none",
  borderRadius: 10,
  fontWeight: 600,
  cursor: "pointer",
},

overviewBtnOutline: {
  flex: 1,
  padding: "10px 0",
  background: "transparent",
  border: "1px solid #38bdf8",
  color: "#38bdf8",
  borderRadius: 10,
  fontWeight: 600,
  cursor: "pointer",
},
/* =========================
   LEADERSHIP CARDS STRIP
========================= */
// leaderSection: {
//   marginTop: 24,
// },

// leaderRow: {
//   display: "flex",
//   gap: 16,
//   overflowX: "auto",
//   paddingBottom: 8,
// },
  leaderSection: {
  marginTop: 12,
},

leaderRow: {
  display: "flex",
  gap: 12,
  overflow: "hidden",    
},

leaderCard: {
  minWidth: 240,
  background: "rgba(15,23,42,0.6)",
  border: "1px solid rgba(148,163,184,0.15)",
  borderRadius: 16,
  padding: 16,
},


leaderRoleSmall: {
  fontSize: 13,
  color: "#94a3b8",
  marginBottom: 8,
},

leaderMessage: {
  fontSize: 14,
  color: "#e5e7eb",
  lineHeight: 1.5,
  marginBottom: 12,
},

leaderBtn: {
  background: "transparent",
  border: "1px solid #38bdf8",
  color: "#38bdf8",
  padding: "6px 12px",
  borderRadius: 8,
  cursor: "pointer",
  fontSize: 13,
},
/* =========================
   LEADER DETAIL PAGE
========================= */
leaderPage: {
  position: "relative",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #020617, #0f172a)",
  overflow: "hidden",
},

leaderOverlay: {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at top, rgba(56,189,248,0.15), transparent 60%)",
  animation: "fadeIn 0.8s ease",
},

leaderContent: {
  position: "relative",
  maxWidth: 820,
  margin: "0 auto",
  padding: "120px 24px",
  color: "#e5e7eb",
  animation: "cinematicEnter 0.8s ease",
},

leaderTitle: {
  fontSize: 36,
  fontWeight: 600,
  marginBottom: 6,
},

leaderSubtitle: {
  fontSize: 18,
  color: "#38bdf8",
  marginBottom: 24,
},

leaderSpeech: {
  fontSize: 18,
  lineHeight: 1.7,
  marginBottom: 32,
  color: "#c7d2fe",
},

leaderFocus: {
  background: "rgba(15,23,42,0.6)",
  border: "1px solid rgba(148,163,184,0.15)",
  borderRadius: 16,
  padding: 20,
},

leaderFocusTitle: {
  marginBottom: 12,
},

leaderFocusList: {
  paddingLeft: 18,
},

leaderFocusItem: {
  fontSize: 15,
  marginBottom: 10,
  animation: "fadeUp 0.5s ease forwards",
  opacity: 0,
},

backBtn: {
  background: "transparent",
  border: "none",
  color: "#38bdf8",
  fontSize: 14,
  marginBottom: 20,
  cursor: "pointer",
},
 leaderPage: {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, #020617 0%, #020617 60%, #0f172a 100%)",
    padding: "90px 24px",
    color: "#e5e7eb",
  },

  leaderContentGrid: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "2.6fr 1fr",
    gap: 40,
  },

  leaderMain: {
    animation: "cinematicEnter 0.6s ease",
  },

  leaderIntro: {
    fontSize: 18,
    color: "#c7d2fe",
    marginBottom: 32,
    lineHeight: 1.7,
  },

  leaderSectionBlock: {
    background: "rgba(15, 23, 42, 0.55)",
    border: "1px solid rgba(148,163,184,0.15)",
    borderRadius: 14,
    padding: "20px 22px",
    marginBottom: 24,
  },

  leaderSectionTitle: {
    fontSize: 18,
    marginBottom: 14,
    color: "#38bdf8",
  },

  leaderList: {
    paddingLeft: 20,
    margin: 0,
  },

  leaderListItem: {
    fontSize: 15,
    lineHeight: 1.7,
    color: "#e5e7eb",
    marginBottom: 10,
  },

  /* =========================
     SIDEBAR
  ========================= */

  leaderSidebar: {
    background: "rgba(15,23,42,0.75)",
    border: "1px solid rgba(148,163,184,0.2)",
    borderRadius: 18,
    padding: 24,
    height: "fit-content",
    color: "#e5e7eb",
  },

  leaderSidebarTitle: {
    fontSize: 14,
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: 8,
  },

  leaderSidebarItem: {
    fontSize: 14,
    marginBottom: 8,
  },

  /* =========================
     BACK BUTTON
  ========================= */

  backBtn: {
    background: "transparent",
    border: "none",
    color: "#38bdf8",
    cursor: "pointer",
    marginBottom: 24,
    fontSize: 14,
  },

  /* =========================
     COMPANY CONTEXT (SECONDARY)
  ========================= */

  companyContext: {
    marginTop: 48,
    padding: 20,
    borderRadius: 18,
    background: "rgba(15,23,42,0.35)",
    border: "1px solid rgba(148,163,184,0.12)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    fontSize: 13,
    color: "#cbd5f5",
  },

  companyText: {
    marginBottom: 12,
    lineHeight: 1.6,
  },

  companyColumns: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    marginTop: 16,
  },

  companySectionTitle: {
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#94a3b8",
    marginBottom: 8,
  },
/* =========================
   LOGIN PAGE – PREMIUM
========================= */

loginWrapper: {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "radial-gradient(circle at top, #020617, #000)",
  position: "relative",
  overflow: "hidden",
},

loginGlow: {
  position: "absolute",
  width: 420,
  height: 420,
  background: "radial-gradient(circle, rgba(56,189,248,0.25), transparent 70%)",
  filter: "blur(80px)",
  animation: "pulseGlow 6s ease-in-out infinite",
},

loginCard: {
  position: "relative",
  zIndex: 2,
  width: 380,
  padding: "42px 36px",
  background: "rgba(15,23,42,0.7)",
  borderRadius: 18,
  border: "1px solid rgba(148,163,184,0.2)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  textAlign: "center",
  boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
},

loginTitle: {
  fontSize: 28,
  fontWeight: 600,
  color: "#e5e7eb",
  marginBottom: 6,
},

loginSubtitle: {
  fontSize: 14,
  color: "#94a3b8",
  marginBottom: 30,
},

loginBtn: {
  width: "100%",
  padding: "14px 16px",
  background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
  border: "none",
  borderRadius: 12,
  color: "#020617",
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
},

loginFooter: {
  marginTop: 24,
  fontSize: 12,
  color: "#64748b",
},
/* =========================
   EXECUTIVE OPERATIONS CARDS
========================= */

execGrid: {
  marginTop: 12,
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 12,
},

execCard: {
  background: "rgba(15,23,42,0.65)",
  border: "1px solid rgba(148,163,184,0.18)",
  borderRadius: 16,
  padding: 18,
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
},

execCardWarn: {
  background: "rgba(127,29,29,0.25)",
  border: "1px solid rgba(239,68,68,0.35)",
  borderRadius: 16,
  padding: 18,
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
},

execList: {
  listStyle: "none",
  padding: 0,
  marginTop: 12,
  fontSize: 14,
  color: "#e5e7eb",
  lineHeight: 1.7,
},

execListItem: {
  marginBottom: 10,
},

execMeta: {
  display: "block",
  fontSize: 12,
  color: "#94a3b8",
},
statusBadge: {
  display: "inline-block",
  padding: "4px 10px",
  borderRadius: 999,
  fontSize: 11,
  fontWeight: 600,
  color: "#020617",
  marginBottom: 8,
  textTransform: "capitalize",
},

taskLink: {
  display: "block",
  fontSize: 14,
  fontWeight: 500,
  color: "#38bdf8",
  textDecoration: "none",
  marginBottom: 6,
},

taskLinkHover: {
  textDecoration: "underline",
},
};

export default styles;
