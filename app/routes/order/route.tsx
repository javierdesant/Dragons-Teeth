import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Order" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Order() {
  return <div>order</div>;
}
