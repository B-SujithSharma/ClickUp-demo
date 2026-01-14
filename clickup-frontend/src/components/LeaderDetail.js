import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles";
import { useEffect } from "react";
/* ================= COMPANY CONTEXT (SECONDARY) ================= */
const companyContext = {
  vision:
    "Lead global industries into the era of Industry 5.0 where humans and automation work together.",
  mission:
    "Build robotics and AI products that improve efficiency, safety, quality, and cost-effectiveness.",
  products: [
    "MYRO – Robotic wall painting platform",
    "CHARIOT & ROBOMARK – Industrial robotics systems",
    "Hypervise – AI vision & analytics platform",
  ],
  industries: [
    "Manufacturing & Automotive",
    "Construction",
    "Logistics & Warehousing",
    "Pharmaceuticals",
    "Smart Cities",
  ],
};

/* ================= ALL LEADERS DATA ================= */
const leaderData = {
  srikar: {
    name: "Srikar Reddy",
    role: "Chief Executive Officer",
    weeklyMessage:
      "This week our focus is execution discipline, delivery predictability, and customer confidence. Outcomes matter more than activity.",
    focus: [
      "Execution quality across deployments",
      "Customer communication & trust",
      "Cross-team alignment",
      "Cost & efficiency awareness",
    ],
    projects: [
      "Enterprise PoC completion",
      "Enterprise AI pilots",
      "Q3 roadmap finalization",
    ],
    risks: [
      "Inter-team dependency delays",
      "Uncontrolled scope changes",
    ],
    actions: [
      "Escalate blockers early",
      "Close tasks before starting new work",
      "Align daily execution with outcomes",
    ],
    impact: [
      "Company Direction",
      "Customer Confidence",
      "Operational Excellence",
    ],
  },

  nitesh: {
    name: "Nitesh Boyina",
    role: "Robotics Head",
    weeklyMessage:
      "Engineering reliability and safety validation remain top priorities this week.",
    focus: [
      "Hardware reliability",
      "Calibration consistency",
      "Field readiness checks",
    ],
    projects: [
      "Enterprise PoC completion",
      "CHARIOT safety validation",
    ],
    risks: [
      "Late hardware changes",
      "Unvalidated field conditions",
    ],
    actions: [
      "Freeze non-critical changes",
      "Document field issues clearly",
    ],
    impact: ["Robotics Reliability", "Safety", "Manufacturing Quality"],
  },

  ajith: {
    name: "Ajith Nair",
    role: "Business Development Head",
    weeklyMessage:
      "Sales must align tightly with delivery capability and real customer value.",
    focus: [
      "Enterprise pipeline prioritization",
      "Value-based selling",
    ],
    projects: [
      "Manufacturing enterprise proposals",
      "Construction automation PoCs",
    ],
    risks: [
      "Over-promising features",
      "Delivery misalignment",
    ],
    actions: [
      "Validate commitments with delivery",
      "Focus on ROI-driven proposals",
    ],
    impact: ["Revenue Growth", "Enterprise Partnerships"],
  },

  krishna: {
    name: "Krishna Murthy",
    role: "Senior Delivery Manager",
    weeklyMessage:
      "Predictable delivery and transparency are non-negotiable.",
    focus: [
      "Deployment timelines",
      "Daily progress tracking",
    ],
    projects: [
      "Enterprise deployments",
      "Customer onboarding stabilization",
    ],
    risks: [
      "Missed handoffs",
      "Hidden blockers",
    ],
    actions: [
      "Daily status reporting",
      "Immediate escalation of risks",
    ],
    impact: ["Delivery Excellence", "Customer Satisfaction"],
  },

  umakanth: {
    name: "Umakanth Reddy",
    role: "Lead – Enterprise Solutions",
    weeklyMessage:
      "AI platforms must remain stable, observable, and production-ready.",
    focus: [
      "Hypervise platform stability",
      "Vision model accuracy",
    ],
    projects: [
      "AI safety monitoring upgrades",
      "Defect detection tuning",
    ],
    risks: [
      "Model drift",
      "Data quality issues",
    ],
    actions: [
      "Monitor production metrics",
      "Validate AI outputs continuously",
    ],
    impact: ["AI Quality", "Enterprise Integrations"],
  },
};

export default function LeaderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const leader = leaderData[id?.toLowerCase()];

  // ✅ ALWAYS OPEN PAGE FROM TOP
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!leader) {
    return <div style={styles.container}>Leader not found</div>;
  }


  return (
    <div style={styles.leaderPage}>
      <div style={styles.leaderContentGrid}>
        {/* ================= MAIN CONTENT ================= */}
        <div>
          <button style={styles.backBtn} onClick={() => navigate(-1)}>
            ← Back
          </button>

          {/* HERO */}
          <div style={styles.leaderHero}>
            <h1>{leader.name}</h1>
            <p style={styles.leaderRole}>{leader.role}</p>
            <p style={styles.leaderHeroMessage}>
              {leader.weeklyMessage}
            </p>
          </div>

          {/* EXECUTIVE GRID */}
          <div style={styles.leaderGrid}>
            <LeaderCard title="🎯 This Week’s Focus" items={leader.focus} />
            <LeaderCard title="🚀 Key Projects" items={leader.projects} />
            <LeaderCard title="⚠️ Risks & Watch-outs" items={leader.risks} />
            <LeaderCard title="✅ What Teams Should Do" items={leader.actions} />
          </div>

          {/* COMPANY CONTEXT (SECONDARY) */}
          <div style={styles.companyContext}>
            <h3>About Eternal Robotics</h3>

            <p style={styles.companyText}>
              <strong>Vision:</strong> {companyContext.vision}
            </p>
            <p style={styles.companyText}>
              <strong>Mission:</strong> {companyContext.mission}
            </p>

            <div style={styles.companyColumns}>
              <div>
                <h4>Products</h4>
                <ul>
                  {companyContext.products.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Industries</h4>
                <ul>
                  {companyContext.industries.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SIDEBAR ================= */}
        <div style={styles.leaderSidebar}>
          <h4>Role</h4>
          <p>{leader.role}</p>

          <h4 style={{ marginTop: 20 }}>Impact Areas</h4>
          <ul>
            {leader.impact.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ================= REUSABLE CARD ================= */
function LeaderCard({ title, items }) {
  return (
    <div style={styles.leaderCard}>
      <h3>{title}</h3>
      <ul>
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
