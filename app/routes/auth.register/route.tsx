import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Register() {
  return <div>register</div>;
}
