import { Outlet } from "react-router";

export default function AdminLayout() {
  return (
    <div>
      <aside>Example sidebar</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
