import { connectDB } from "../db/connect";
import DashboardConfig from "../models/dashboard.model";

export async function getDashboard() {
  await connectDB();

  const projectId = "demo"; // simple id

  let config = await DashboardConfig.findOne({ projectId });

  if (!config) {
    config = await DashboardConfig.create({
      projectId,
      revenue: 50000,
      users: 1200,
      orders: 120,
    });
  }

  return config;
}