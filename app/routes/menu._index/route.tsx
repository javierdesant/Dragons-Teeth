import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Menu" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Menu() {
  return <div>menu</div>;
}
