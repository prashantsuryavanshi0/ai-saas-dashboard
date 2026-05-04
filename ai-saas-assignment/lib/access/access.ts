export function isAdmin(user: any) {
  return user?.role === "admin";
}