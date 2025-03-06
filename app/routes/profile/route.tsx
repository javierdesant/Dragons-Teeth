import type { Route } from "./+types/route";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Profile" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Profile() {
  return <div>profile</div>;
}
