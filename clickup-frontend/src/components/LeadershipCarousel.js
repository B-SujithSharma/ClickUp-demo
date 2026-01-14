import { useEffect, useState } from "react";
import styles from "../styles";

const leaders = [
  {
    name: "Srikar Reddy",
    role: "Chief Executive Officer",
    dept: "Executive Leadership",
    focus: "Vision • Growth • Culture",
    points: [
      "Driving Eternal Robotics long-term vision",
      "Building a strong leadership culture",
      "Scaling teams and innovation",
    ],
  },
  {
    name: "Nitesh Boyina",
    role: "Robotics Head",
    dept: "Technology",
    focus: "Architecture • Scale • Reliability",
    points: [
      "Leading platform architecture decisions",
      "Ensuring scalable & reliable systems",
      "Mentoring core engineering teams",
    ],
  },
  {
    name: "Ajith Nair",
    role: "Business Development Head",
    dept: "Business Development",
    focus: "Execution • Process • Delivery",
    points: [
      "Operational excellence across teams",
      "Optimizing internal processes",
      "Ensuring smooth cross-team delivery",
    ],
  },
  {
    name: "Krishna Murthy",
    role: "Senior Delivery Manager",
    dept: "Management",
    focus: "Project Planning and Control Techniques • Roadmap • Impact",
    points: [
      "Defining user-centric product strategy",
      "Aligning business and technology",
      "Executing product roadmap",
    ],
  },
  {
    name: "Umakanth Reddy",
    role: "Lead-Enterprise Solutions",
    dept: "Operations",
    focus: "Quality • Performance • Ownership",
    points: [
      "Leading frontend & backend teams",
      "Maintaining high code quality",
      "Driving delivery ownership",
    ],
  },
];

export default function LeadershipCarousel() {
  const [index, setIndex] = useState(0);

  // ✅ CONTINUOUS AUTO SLIDE (NO PAUSE)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % leaders.length);
    }, 10000); // smooth & readable

    return () => clearInterval(interval);
  }, []);

  const leader = leaders[index];

  return (
    <div style={styles.leadershipGlass}>
      <div key={index} style={styles.leaderSlide}>
        <p style={styles.leadershipTitle}>
          Leadership Updates
        </p>

        <h2 style={styles.leaderName}>{leader.name}</h2>
        <p style={styles.leaderRole}>{leader.role}</p>

        {/* EXTRA INFO ROW */}
        <div style={styles.leaderMeta}>
          <span>{leader.dept}</span>
          <span>•</span>
          <span>{leader.focus}</span>
        </div>

        {/* MAIN CONTENT */}
        <ul style={styles.leaderPoints}>
          {leader.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

      {/* DOT INDICATORS */}
      <div style={styles.dots}>
        {leaders.map((_, i) => (
          <span
            key={i}
            style={{
              ...styles.dot,
              ...(i === index ? styles.dotActive : {}),
            }}
          />
        ))}
      </div>
    </div>
  );
}
