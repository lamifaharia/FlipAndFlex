import { Outlet } from "react-router-dom";
import AnimatedBackground from "../components/common/AnimatedBackground";

export default function MainLayout() {
  return (
    <>
      <AnimatedBackground />

      <main className="relative min-h-screen text-white overflow-hidden">

        <Outlet />

      </main>
    </>
  );
}