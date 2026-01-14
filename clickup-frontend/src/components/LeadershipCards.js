import { useNavigate } from "react-router-dom";
import styles from "../styles";

const leaders = [
  {
    id: "srikar",
    name: "Srikar Reddy",
    role: "Chief Executive Officer",
    message:
      "Focused on scaling Eternal Robotics with strong culture and innovation.",
  },
  {
    id: "nitesh",
    name: "Nitesh Boyina",
    role: "Robotics Head",
    message:
      "Driving platform stability, scalability, and engineering excellence.",
  },
  {
    id: "ajith",
    name: "Ajith Nair",
    role: "Business Development Head",
    message:
      "Aligning user needs with long-term product roadmap.",
  },
  {
    id: "krishna",
    name: "Krishna Murthy",
    role: "Senior Delivery Manager",
    message:
      "Ensuring smooth operations and cross-team execution.",
  },
  {
    id: "umakanth",
    name: "Umakanth Reddy",
    role: "Lead-Enterprise Solutions",
    message:
      "Mentoring teams and maintaining high code quality.",
  },
];

export default function LeadershipCards() {
  const navigate = useNavigate();

  return (
    <div style={styles.leaderSection}>
      <h3 style={{ marginBottom:15 }}>
        Leadership Messages
      </h3>

      <div style={styles.leaderRow}>
        {leaders.map((l, i) => (
          <div
            key={l.id}
            style={{
              ...styles.leaderCard,
              animationDelay: `${i * 0.1}s`,
            }}
          >
            <h4>{l.name}</h4>
            <p style={styles.leaderRoleSmall}>
              {l.role}
            </p>

            <p style={styles.leaderMessage}>
              {l.message}
            </p>

            <button
              style={styles.leaderBtn}
              onClick={() =>
                navigate(`/leader/${l.id}`)
              }
            >
              View Info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
