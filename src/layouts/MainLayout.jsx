import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white">
      <Outlet />
    </main>
  );
};

export default MainLayout;