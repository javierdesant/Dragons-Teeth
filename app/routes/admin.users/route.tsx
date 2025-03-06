import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Admin Users" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AdminUsers() {
  return <div>admin users</div>;
}
