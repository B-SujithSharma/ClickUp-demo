import styles from "../styles";

export default function Navbar({ user }) {
  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>Eternal Robotics</div>
      <div style={styles.centerTitle}>
        Eternal Robotics – Internal Dashboard
      </div>
      <div style={styles.profile}>
        <div style={styles.avatar}>
          {user?.username?.[0]?.toUpperCase()}
        </div>
        {user?.username}
      </div>
    </div>
  );
}
