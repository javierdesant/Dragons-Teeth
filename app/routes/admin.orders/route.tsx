import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Admin Orders" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AdminOrders() {
  return <div>admin orders</div>;
}
