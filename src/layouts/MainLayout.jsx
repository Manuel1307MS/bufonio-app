import { useLocation, Outlet } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

import { NavbarPublic } from "@/components/navbar/NavbarPublic";
import { NavbarDesk } from "@/components/navbar/NavbarDesk";
import { NavbarMobile } from "@/components/navbar/NavbarMobile";

import { AppProviders } from "@/providers/AppProviders";

export const MainLayout = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isPublicPage = location.pathname.startsWith("/public");
  const NavbarToRender = useMemo(() => {
    if (isPublicPage) return NavbarPublic;
    return isMobile ? NavbarMobile : NavbarDesk;
  }, [isPublicPage, isMobile]);

  return (
    <AppProviders>
      <NavbarToRender />
      <main className="max-w-6xl mx-auto border-x border-black/10">
        <Outlet />
      </main>
    </AppProviders>
  );
};
