"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [data, setData] = useState({
    revenue: "0",
    users: "0",
    orders: "0",
  });

  // 🔥 LOAD DATA
  const loadData = () => {
    const stored = localStorage.getItem("dashboardData");
    if (stored) {
      setData(JSON.parse(stored));
    }
  };

  useEffect(() => {
    // First load
    loadData();

    // 🔥 Listen for changes (REAL FIX)
    window.addEventListener("storage", loadData);

    return () => {
      window.removeEventListener("storage", loadData);
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AI SaaS Dashboard 🚀</h1>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Revenue</h3>
          <p>₹{data.revenue}</p>
        </div>

        <div style={styles.card}>
          <h3>Users</h3>
          <p>{data.users}</p>
        </div>

        <div style={styles.card}>
          <h3>Orders</h3>
          <p>{data.orders}</p>
        </div>
      </div>
    </div>
  );
}

const styles: any = {
  container: {
    padding: "40px",
    background: "#0f172a",
    height: "100vh",
    color: "white",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  grid: {
    display: "flex",
    gap: "20px",
  },
  card: {
    padding: "20px",
    borderRadius: "12px",
    minWidth: "200px",
    background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
  },
};