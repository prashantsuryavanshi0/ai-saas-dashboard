import mongoose from "mongoose";

const widgetSchema = new mongoose.Schema({
  key: String,   // revenue | users | orders
  label: String, // display name
});

const dashboardSchema = new mongoose.Schema({
  revenue: Number,
  users: Number,
  orders: Number,

  // 🔥 CONFIG DRIVEN PART
  widgets: [widgetSchema],
});

export default mongoose.models.DashboardConfig ||
  mongoose.model("DashboardConfig", dashboardSchema);