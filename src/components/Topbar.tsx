import { useAuth } from '../hooks/useAuth';
// Verify this path matches your actual file structure
import cbeLogo from '../../src/assets/cbe-logo.png'; // Adjusted path
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, LogOut, Home, Bell, Settings } from 'lucide-react';

// Ensure this matches your actual AuthContext structure
interface AuthContextType {
  logout: () => void;
  user?: {
    name?: string;
    [key: string]: unknown; // Use unknown instead of any for safer typing
  };
}

export default function Topbar() {
  // Add null check for useAuth
  const auth = useAuth();
  const location = useLocation();
  if (!auth || typeof auth.logout !== 'function') {
    console.error('Auth context not available or logout not implemented');
    return null;
  }

  const { logout, user } = auth as AuthContextType;

  const pathParts = location.pathname.split('/').filter(Boolean);

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    logout();
    // Optionally redirect after logout
    window.location.href = '/';
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center bg-white shadow-sm z-20 border-b border-gray-200">
      {/* Logo Section - Added fallback if image fails to load */}
      <div className="w-64 h-full flex items-center px-6 bg-gradient-to-b from-pink-900 to-pink-700">
        {cbeLogo ? (
          <img 
            src={cbeLogo} 
            alt="Logo" 
            className="h-10 w-10 mr-3 rounded-full shadow"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <div className="h-10 w-10 mr-3 rounded-full shadow bg-white flex items-center justify-center">
            <span className="text-pink-700 font-bold">C</span>
          </div>
        )}
        <h1 className="text-white font-bold text-2xl tracking-wide">CBE</h1>
      </div>

      {/* Rest of your component remains the same */}
      <div className="flex-1 flex items-center justify-between h-full px-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="breadcrumb" className="flex items-center text-sm text-gray-600 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link
            to="/dashboard"
            className="flex items-center hover:text-pink-600 transition-colors"
          >
            <Home className="w-4 h-4 text-pink-600 md:mr-2" />
            <span className="hidden md:inline">Dashboard</span>
          </Link>
          {pathParts.slice(1).map((part, index) => (
            <div key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              {index === pathParts.length - 2 ? (
                <span className="font-medium text-pink-700">
                  {capitalize(part)}
                </span>
              ) : (
                <Link
                  to={`/${pathParts.slice(0, index + 2).join('/')}`}
                  className="hover:text-pink-600 transition-colors"
                >
                  {capitalize(part)}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* User Controls */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
          </button>

          <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
            <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-700 font-medium">
              {user?.name?.charAt(0) || 'U'}
            </div>
            <div className="hidden md:block text-sm font-medium text-gray-700">
              {user?.name || 'User'}
            </div>
          </div>

          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>

            <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 font-medium px-3 py-2 rounded-lg hover:bg-red-50 transition-colors"
            >
            <LogOut className="w-5 h-5" />
            <span className="hidden md:inline">Logout</span>
            </button>
        </div>
      </div>
    </header>
  );
}