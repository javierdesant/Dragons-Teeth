import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Admin" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Admin() {
  return <div>admin</div>;
}
