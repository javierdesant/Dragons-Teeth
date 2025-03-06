import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Notifications" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Notifications() {
  return <div>notifications</div>;
}
