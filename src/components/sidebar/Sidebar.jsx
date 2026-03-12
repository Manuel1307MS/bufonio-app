import { NavLink } from "react-router-dom";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { ProfileIcon } from "@/components/icons/ProfileIcon";
import { SettingsIcon } from "@/components/icons/SettingsIcon";
import { SidebarChannelSection } from "@/components/sidebar/SidebarChannelSection";

export const Sidebar = () => {
  return (
    <nav className="p-2 h-full flex flex-col bg-white border-r border-black/10 justify-between">
      <div>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `w-full font-medium flex items-center rounded-md transition py-1.5 px-3 text-base gap-1 ${
              isActive ? "bg-black/10" : "hover:bg-black/5"
            }`
          }
        >
          <HomeIcon width={20} height={20} />
          Inicio
        </NavLink>

        <hr className="my-2 border-black/10" />

        <SidebarChannelSection />
      </div>

      <div>
        <hr className="my-2 border-black/10" />

        <div className="flex gap-2">
          <div className="flex-4">
            <NavLink
              to="/profile"
              end
              className={({ isActive }) =>
                `w-full font-medium flex items-center rounded-md transition py-1.5 px-3 text-base gap-1 ${
                  isActive ? "bg-black/10" : "hover:bg-black/5"
                }`
              }
            >
              <ProfileIcon width={20} height={20} />
              Perfil
            </NavLink>
          </div>

          <div className="flex-1">
            <NavLink
              to="/settings"
              end
              className={({ isActive }) =>
                `w-full flex items-center rounded-md transition py-1.5 px-3 ${
                  isActive ? "bg-black/10" : "hover:bg-black/5"
                }`
              }
            >
              <SettingsIcon width={24} height={24} />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
