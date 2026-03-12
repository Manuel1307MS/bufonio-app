import { NavbarBase } from "./NavbarBase";
import { LogoIcon } from "@/components/icons/LogoIcon";

export const NavbarPublic = () => {
  return (
    <NavbarBase>
      <a
        href="https://bufonio.vercel.app"
        aria-label="Ir a la página principal"
      >
        <LogoIcon width="40" height="40" />
      </a>
    </NavbarBase>
  );
};
