"use client";

import { useState } from "react";

export default function AdminPage() {
  const [revenue, setRevenue] = useState("");
  const [users, setUsers] = useState("");
  const [orders, setOrders] = useState("");

  const handleSave = () => {
    const data = {
      revenue,
      users,
      orders,
    };

    // Save to localStorage
    localStorage.setItem("dashboardData", JSON.stringify(data));

    // 🔥 Trigger update event
    window.dispatchEvent(new Event("storage"));

    alert(
      `Saved:\nRevenue: ${revenue}\nUsers: ${users}\nOrders: ${orders}`
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>⚙️ Admin Panel</h2>

        <input
          type="number"
          placeholder="Revenue"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Users"
          value={users}
          onChange={(e) => setUsers(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Orders"
          value={orders}
          onChange={(e) => setOrders(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleSave} style={styles.button}>
          Save
        </button>
      </div>
    </div>
  );
}

const styles: any = {
  container: {
    height: "100vh",
    background: "#0f172a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#1e293b",
    padding: "30px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "300px",
    color: "white",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
  },
  title: {
    textAlign: "center",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
};