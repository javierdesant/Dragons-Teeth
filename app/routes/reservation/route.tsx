import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reservation" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Reservation() {
  return <div>reservation</div>;
}
