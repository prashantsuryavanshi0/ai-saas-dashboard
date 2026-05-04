export function canViewDashboard(user: any) {
  // simple mock (allowed in assignment)
  return user?.role === "admin";
}