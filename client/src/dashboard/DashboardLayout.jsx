import React from "react";
import DashboardSidebar from "./Sidebar";
import DashboardTopNavbar from "./TopNavbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <DashboardTopNavbar />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children || (
            <div className="text-gray-700 text-lg">
              Welcome to your <span className="font-semibold">Admin Dashboard</span> 🚀
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
