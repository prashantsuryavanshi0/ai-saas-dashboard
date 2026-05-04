"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  const [revenue, setRevenue] = useState("");
  const [users, setUsers] = useState("");
  const [orders, setOrders] = useState("");

  // ✅ VERY IMPORTANT: run only on browser
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const role = params.get("role");

      if (role === "admin") {
        setIsAdmin(true);
      }
    }
  }, []);

  // ❌ Block access
  if (!isAdmin) {
    return <div style={{ color: "white", padding: 40 }}>❌ Access Denied</div>;
  }

  // ✅ Admin UI
  return (
    <div style={{ padding: 40, color: "white", background: "black", minHeight: "100vh" }}>
      <h1>Admin Panel</h1>

      <input
        placeholder="Revenue"
        value={revenue}
        onChange={(e) => setRevenue(e.target.value)}
      /><br /><br />

      <input
        placeholder="Users"
        value={users}
        onChange={(e) => setUsers(e.target.value)}
      /><br /><br />

      <input
        placeholder="Orders"
        value={orders}
        onChange={(e) => setOrders(e.target.value)}
      /><br /><br />

      <button>Save</button>
    </div>
  );
}