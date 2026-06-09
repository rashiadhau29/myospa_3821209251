import React, { useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../../public/img/logo.png";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const AdminSidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const { pathname } = useLocation();
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen, setSidebarOpen]);

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen, setSidebarOpen]);

  const navItems = [
    { path: "/dashboard", icon: "📊", label: "Dashboard" },
    { path: "/jobspage", icon: "📁", label: "Job Post" },
    { path: "/applications", icon: "📦", label: "Applications" },
    { path: "/gallery", icon: "👥", label: "Gallery" },
    // { path: "/analytics", icon: "📈", label: "Analytics" },
    // { path: "/settings", icon: "⚙️", label: "Settings" },
  ];

  return (   
    <aside
      ref={sidebar}
      className={`fixed lg:sticky top-0 left-0 z-40 flex h-screen w-64 flex-col bg-white border-r border-gray-200 shadow-sm transition-transform duration-300 lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
        <NavLink to="/dashboard" className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="h-22 ml-10" />
          {/* <span className="text-xl font-bold text-gray-900">Dashboard</span> */}
        </NavLink>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-600 border border-blue-100"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <span className="text-lg mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-900">Need help?</p>
            <p className="text-xs text-gray-600 mt-1">Check our documentation</p>
            <button className="mt-2 w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Documentation
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;