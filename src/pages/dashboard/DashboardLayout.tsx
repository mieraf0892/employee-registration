import { Outlet } from "react-router-dom";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import { useSidebar } from "../../context/SidebarContext";

export default function DashboardLayout() {
  const { collapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Topbar */}
      <header className="fixed top-0 left-0 right-0 z-20" aria-label="Topbar">
        <Topbar />
      </header>

      <div className="flex pt-16">
        {/* Sidebar - width controlled by Sidebar component */}
        <Sidebar />

        {/* Content area */}
        <main className={`flex-1 transition-all duration-300 ${
          collapsed ? 'ml-16' : 'ml-64'
        }`}>
          <div className="p-6 mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}