import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Admin Menu" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AdminMenu() {
  return <div>admin menu</div>;
}
