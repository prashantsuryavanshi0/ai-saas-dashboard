"use client";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [data, setData] = useState({
    revenue: "0",
    users: "0",
    orders: "0",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("dashboard") || "{}");

    if (saved) {
      setData({
        revenue: saved.revenue || "0",
        users: saved.users || "0",
        orders: saved.orders || "0",
      });
    }
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AI SaaS Dashboard 🚀</h1>

      <div style={styles.grid}>
        <div style={styles.card}>
          <p>Revenue</p>
          <h2>₹{data.revenue}</h2>
        </div>

        <div style={styles.card}>
          <p>Users</p>
          <h2>{data.users}</h2>
        </div>

        <div style={styles.card}>
          <p>Orders</p>
          <h2>{data.orders}</h2>
        </div>
      </div>
    </div>
  );
}

const styles: any = {
  container: {
    minHeight: "100vh",
    background: "#020617",
    color: "#fff",
    padding: "40px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "30px",
  },
  grid: {
    display: "flex",
    gap: "20px",
  },
  card: {
    flex: 1,
    padding: "20px",
    borderRadius: "16px",
    background: "linear-gradient(90deg, #3b82f6, #9333ea)",
  },
};