import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            ShopEase
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/shop" className="text-gray-700 hover:text-blue-600">Shop</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>

             <a href="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</a>


            {/* Cart Icon */}
            <button className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </button>

            {/* Auth Buttons */}
            <button className="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-100">
              Login
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-3 space-y-3 shadow-lg">
          <a href="/" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="/shop" className="block text-gray-700 hover:text-blue-600">Shop</a>
          <a href="/about" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="/contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
          
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-center space-x-4">
            <button className="px-3 py-1 border rounded-lg text-gray-700 hover:bg-gray-100">
              Login
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
