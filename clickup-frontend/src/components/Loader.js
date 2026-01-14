export default function Loader() {
  return (
    <div style={overlay}>
      <div style={spinner} />
      <p style={{ marginTop: 14, color: "#e5e7eb" }}>
        Loading tasks…
      </p>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(2,6,23,0.85)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2000,
};

const spinner = {
  width: 48,
  height: 48,
  border: "4px solid #1e293b",
  borderTop: "4px solid #38bdf8",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};
