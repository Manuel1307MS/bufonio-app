import { Link } from "react-router-dom";
import { NavbarBase } from "./NavbarBase";
import { LogoIcon } from "@/components/icons/LogoIcon";

export const NavbarDesk = () => {
  return (
    <NavbarBase>
      <Link to="/">
        <LogoIcon width="40" height="40" />
      </Link>
    </NavbarBase>
  );
};
