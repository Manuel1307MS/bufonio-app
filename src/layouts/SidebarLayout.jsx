import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { useSidebar } from "@/hooks/useSidebar";
import { useEffect } from "react";

export const SidebarLayout = () => {
  const { isOpen, closeSidebar } = useSidebar();
  const location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location.pathname]);

  return (
    <>
      <div
        className={`fixed inset-0 z-45 md:hidden transition-opacity duration-300 ${isOpen ? "bg-black/30 opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={closeSidebar}
      />
      <div className="flex h-[calc(100dvh-65px)] relative overflow-hidden">
        <aside
          className={`fixed md:static top-0 left-0 h-dvh md:h-auto w-50 z-50 transform transition-transform duration-300 ease-out 
            ${isOpen ? "translate-x-0" : "-translate-x-full"} md:transform-none md:transition-none md:translate-x-0`}
        >
          <Sidebar />
        </aside>
        <main className="flex-1 w-full">
          <Outlet />
        </main>
      </div>
    </>
  );
};
