import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Menu item" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function MenuItem() {
  return <div>menu</div>;
}
