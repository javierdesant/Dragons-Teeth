import type { Route } from "./+types/route";
import Hero from "./Hero";
import Events from "./Events";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Events />
    </>
  );
}
