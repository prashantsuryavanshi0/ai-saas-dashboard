"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [mounted, setMounted] = useState(false);

  const [revenue, setRevenue] = useState("");
  const [users, setUsers] = useState("");
  const [orders, setOrders] = useState("");

  useEffect(() => {
    setMounted(true);

    const data = localStorage.getItem("dashboardData");
    if (data) {
      const parsed = JSON.parse(data);
      setRevenue(parsed.revenue || "");
      setUsers(parsed.users || "");
      setOrders(parsed.orders || "");
    }
  }, []);

  if (!mounted) return null;

  // 🔴 IMPORTANT: DO NOT USE useSearchParams anymore
  const isAdmin =
    typeof window !== "undefined" &&
    window.location.search.includes("role=admin");

  if (!isAdmin) {
    return <div style={{ color: "white" }}>Access Denied</div>;
  }

  const handleSave = () => {
    localStorage.setItem(
      "dashboardData",
      JSON.stringify({ revenue, users, orders })
    );
    alert("Saved ✅");
  };

  return (
    <div style={{ padding: 40, color: "white", background: "#020617", minHeight: "100vh" }}>
      <h1>Admin Panel ⚙️</h1>

      <input value={revenue} onChange={(e) => setRevenue(e.target.value)} placeholder="Revenue" /><br /><br />
      <input value={users} onChange={(e) => setUsers(e.target.value)} placeholder="Users" /><br /><br />
      <input value={orders} onChange={(e) => setOrders(e.target.value)} placeholder="Orders" /><br /><br />

      <button onClick={handleSave}>Save</button>
    </div>
  );
}