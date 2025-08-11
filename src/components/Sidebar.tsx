import React from "react";
import { FaFileAlt, FaBell, FaUser, FaList, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

type NavItem = {
  to: string;
  icon: React.ReactNode;
  label: string;
};

const navItems: NavItem[] = [
  { to: "/dashboard/requests", icon: <FaList />, label: "Requests" },
  { to: "/dashboard/bills", icon: <FaFileAlt />, label: "Bills" },
  { to: "/dashboard/users", icon: <FaUser />, label: "Users" },
  { to: "/dashboard/notifications", icon: <FaBell />, label: "Notifications" },
];

const Sidebar: React.FC = () => {
  const { collapsed, toggleSidebar } = useSidebar();
  const sidebarWidth = collapsed ? "w-16" : "w-64";

  return (
    <aside
      className={`fixed top-16 left-0 ${sidebarWidth} h-[calc(100vh-4rem)] bg-gradient-to-b from-pink-900 to-pink-700 text-white shadow-xl flex flex-col transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-4 py-3">
        {!collapsed && <span className="text-2xl font-bold tracking-wide">Admin Panel</span>}
        <button
          onClick={toggleSidebar}
          className="text-white hover:text-yellow-300 transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      <nav className="flex-1 space-y-2 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `block rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-white/20 text-yellow-300 shadow-inner"
                  : "hover:bg-white/10 hover:text-yellow-200"
              }`
            }
          >
            <SidebarItem icon={item.icon} label={item.label} collapsed={collapsed} />
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto text-xs text-indigo-200 text-center opacity-70 p-2">
        {!collapsed && `© ${new Date().getFullYear()} Employee Registration`}
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, collapsed }) => (
  <div className="flex items-center px-4 py-3 space-x-4">
    <div className="text-xl">{icon}</div>
    {!collapsed && <span className="font-medium">{label}</span>}
  </div>
);

export default Sidebar;
