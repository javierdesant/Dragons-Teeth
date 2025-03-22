import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Login() {
  return <div>login</div>;
}
