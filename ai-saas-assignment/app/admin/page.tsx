"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [revenue, setRevenue] = useState("");
  const [users, setUsers] = useState("");
  const [orders, setOrders] = useState("");

  // Load existing data (optional but good UX)
  useEffect(() => {
    const stored = localStorage.getItem("dashboardData");
    if (stored) {
      const data = JSON.parse(stored);
      setRevenue(data.revenue || "");
      setUsers(data.users || "");
      setOrders(data.orders || "");
    }
  }, []);

  const handleSave = () => {
    const data = {
      revenue,
      users,
      orders,
    };

    localStorage.setItem("dashboardData", JSON.stringify(data));

    alert("Saved successfully!");

    // 🔥 IMPORTANT: redirect to dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>⚙️ Admin Panel</h2>

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
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
    color: "white",
    cursor: "pointer",
  },
};