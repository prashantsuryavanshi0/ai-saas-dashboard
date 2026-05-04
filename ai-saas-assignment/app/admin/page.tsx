"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function AdminPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  const [revenue, setRevenue] = useState("");
  const [users, setUsers] = useState("");
  const [orders, setOrders] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("dashboardData");
      if (saved) {
        const data = JSON.parse(saved);
        setRevenue(data.revenue || "");
        setUsers(data.users || "");
        setOrders(data.orders || "");
      }
    }
  }, []);

  if (role !== "admin") {
    return <div style={{ color: "white" }}>Access Denied</div>;
  }

  const handleSave = () => {
    localStorage.setItem(
      "dashboardData",
      JSON.stringify({ revenue, users, orders })
    );
    alert("Saved!");
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Admin Panel</h1>

      <input value={revenue} onChange={(e) => setRevenue(e.target.value)} placeholder="Revenue" /><br /><br />
      <input value={users} onChange={(e) => setUsers(e.target.value)} placeholder="Users" /><br /><br />
      <input value={orders} onChange={(e) => setOrders(e.target.value)} placeholder="Orders" /><br /><br />

      <button onClick={handleSave}>Save</button>
    </div>
  );
}