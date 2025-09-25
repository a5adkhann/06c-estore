import React from "react";
import DashboardSidebar from "./Sidebar";
import DashboardTopNavbar from "./TopNavbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
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
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
