import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tables" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Tables() {
  return <div>tables</div>;
}
