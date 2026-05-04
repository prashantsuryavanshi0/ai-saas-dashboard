"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function AdminPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  const [revenue, setRevenue] = useState("");
  const [users, setUsers] = useState("");
  const [orders, setOrders] = useState("");

  // 🔐 Admin Protection
  if (role !== "admin") {
    return (
      <div style={{ color: "white", padding: "40px" }}>
        ❌ Access Denied (Admin only)
      </div>
    );
  }

  const handleSave = () => {
    localStorage.setItem(
      "dashboardData",
      JSON.stringify({
        revenue,
        users,
        orders,
      })
    );

    alert("✅ Data Saved!");
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Admin Panel</h1>

      <input
        placeholder="Revenue"
        value={revenue}
        onChange={(e) => setRevenue(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Users"
        value={users}
        onChange={(e) => setUsers(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Orders"
        value={orders}
        onChange={(e) => setOrders(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSave}>Save</button>
    </div>
  );
}