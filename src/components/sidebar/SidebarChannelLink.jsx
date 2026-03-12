import { NavLink } from "react-router-dom";

export const SidebarChannelLink = ({ channel }) => {
  return (
    <NavLink
      id={channel.idChannel}
      to={`/channels/${channel.tokenChannel}`}
      end
      className={({ isActive }) =>
        `w-full block items-center rounded-md transition py-1.5 px-3 text-base truncate whitespace-nowrap overflow-hidden ${
          isActive ? "bg-black/10 font-medium" : "hover:bg-black/5"
        }`
      }
    >
      {channel.nameChannel}
    </NavLink>
  );
};
