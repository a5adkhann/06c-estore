import React, { useState } from "react";
import { Menu, X, Home, ShoppingBag, Users, BarChart2, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Dashboard", icon: <Home className="h-5 w-5" />, href: "/admin/dashboard" },
    { name: "Orders", icon: <ShoppingBag className="h-5 w-5" />, href: "/admin/orders" },
    { name: "Products", icon: <ShoppingBag className="h-5 w-5" />, href: "/admin/products" },
    { name: "Customers", icon: <Users className="h-5 w-5" />, href: "/admin/customers" },
    { name: "Analytics", icon: <BarChart2 className="h-5 w-5" />, href: "/admin/analytics" },
    { name: "Settings", icon: <Settings className="h-5 w-5" />, href: "/admin/settings" },
  ];

  return (
    <>
      {/* Toggle Button (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-3 m-4 bg-blue-600 text-white rounded-lg flex items-center gap-2"
      >
        {isOpen ? <X /> : <Menu />}
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-900 text-gray-200 shadow-lg transform transition-transform duration-300 z-40 
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-white mb-8">Admin Panel</h2>

          {/* Nav Links */}
          <nav className="flex-1 space-y-4">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Logout */}
          <div className="border-t border-gray-700 pt-4">
            <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-red-600 transition">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden z-30"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
