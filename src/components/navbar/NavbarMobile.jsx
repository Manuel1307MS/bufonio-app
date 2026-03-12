import { NavbarBase } from "./NavbarBase";
import { BurgerIcon } from "@/components/icons/BurgerIcon";

import { useSidebar } from "@/hooks/useSidebar";

export const NavbarMobile = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <NavbarBase>
      <button type="button" onClick={toggleSidebar} className="cursor-pointer">
        <BurgerIcon width="40" height="40" />
      </button>
    </NavbarBase>
  );
};
