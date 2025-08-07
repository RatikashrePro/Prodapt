// components/Dashboard.js
import React from "react";

function Dashboard() {
  const updates = [
    "Phil closed another real estate deal – with a trampoline clause.",
    "Claire scheduled another family meeting (brace yourselves).",
    "Gloria’s hot sauce business got a 5-star review!",
    "Haley missed curfew... again.",
    "Cam is directing another school play – this one has actual fireworks.",
    "Jay took Joe to the dog park. Stella tagged along, obviously."
  ];

  const leaderboard = [
    { name: "Phil Dunphy", points: 95, badge: "🏆" },
    { name: "Gloria Pritchett", points: 89, badge: "🔥" },
    { name: "Cam Tucker", points: 85, badge: "🎭" },
    { name: "Claire Dunphy", points: 80, badge: "📅" },
    { name: "Jay Pritchett", points: 72, badge: "🐶" }
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", padding: "2rem", backgroundColor: "#fefefe" }}>
      <h2 style={{ textAlign: "center", color: "#b22222", fontSize: "2rem" }}>
        🏠 Family Dashboard
      </h2>
      <p style={{ textAlign: "center", color: "#444", fontStyle: "italic", marginBottom: "2rem" }}>
        Your weekly scoop on the Pritchett-Dunphy-Tucker universe.
      </p>

      {/* Recent Updates */}
      <div style={{
        backgroundColor: "#fff8e1",
        borderRadius: "10px",
        padding: "1.5rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        marginBottom: "3rem"
      }}>
        <h3 style={{ color: "#e65100", marginBottom: "1rem" }}>📰 Recent Family Updates</h3>
        <ul>
          {updates.map((update, idx) => (
            <li key={idx} style={{ marginBottom: "0.8rem", color: "#5d4037" }}>
              ✅ {update}
            </li>
          ))}
        </ul>
      </div>

      {/* Family Leaderboard */}
      <div style={{
        backgroundColor: "#e3f2fd",
        borderRadius: "10px",
        padding: "1.5rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        <h3 style={{ color: "#1565c0", marginBottom: "1rem" }}>🎖 Family Leaderboard</h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem"
        }}>
          {leaderboard.map((member, idx) => (
            <div key={idx} style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              padding: "1rem",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              transition: "transform 0.2s",
            }}>
              <div style={{ fontSize: "2rem" }}>{member.badge}</div>
              <h4 style={{ color: "#0d47a1", margin: "0.5rem 0" }}>{member.name}</h4>
              <p style={{ fontSize: "1.2rem", color: "#424242" }}>{member.points} pts</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
