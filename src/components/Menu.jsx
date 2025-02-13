import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  PlusCircle,
  Layout,
  PieChart,
  Settings,
  LayoutDashboard,
  LogOut,
  Wand2
} from 'lucide-react';

export function Menu() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { 
      icon: LayoutDashboard,
      label: 'Dashboard',
      color: 'text-gray-600',
      path: '/',
    },
    { 
      icon: PlusCircle, 
      label: 'Create New Flow', 
      color: 'text-blue-600',
      path: '/new-flow',
    },
    { 
      icon: Layout, 
      label: 'Browse Templates', 
      color: 'text-purple-600',
      path: '/templates',
    },
    { 
      icon: Wand2, 
      label: 'Builder', 
      color: 'text-green-600',
      path: '/builder',
    },
    { 
      icon: PieChart, 
      label: 'View Reports', 
      color: 'text-orange-600',
      path: '/reports',
    },
  ];

  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens, state, etc.)
    navigate('/login');
  };

  return (
    <div className="w-64 bg-white border-r border-gray-100 h-screen fixed left-0 top-0 p-4 flex flex-col">
      {/* Main menu items */}
      <div className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'hover:bg-gray-50 text-gray-600'
              }`}
            >
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Bottom actions */}
      <div className="border-t border-gray-100 pt-4 space-y-2">
        <button
          onClick={() => navigate('/settings')}
          className="w-full flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-gray-50 text-gray-600"
        >
          <Settings className="w-5 h-5 text-gray-600" />
          <span className="font-medium">Settings</span>
        </button>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-red-50 text-red-600"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}