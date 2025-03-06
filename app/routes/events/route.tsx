import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Events" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Events() {
  return <div>events</div>;
}
