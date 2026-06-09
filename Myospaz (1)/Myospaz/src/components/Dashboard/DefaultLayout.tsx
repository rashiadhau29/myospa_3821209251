// src/layouts/DefaultLayout.tsx
import React, { useState, ReactNode } from "react";
import AdminSidebar from "../../components/Sidebar/AdminSidebar";
import Header from "../Header/Index";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 text-black">
      {/* Sidebar - fixed */}
      <div className="fixed top-0 left-0 h-full z-40">
        <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      {/* Main section with header + content */}
      <div className="flex flex-col flex-1 min-h-screen lg:pl-64">
        {/* Header - fixed */}
        <div className="fixed top-0 left-0 right-0 z-30 lg:ml-64">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>

        {/* Scrollable content */}
        <main className="flex-1 mt-[4.5rem] p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
