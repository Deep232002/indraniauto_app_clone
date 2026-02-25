import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/site_logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-200 border-t-4 border-black shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">

        {/* Logo */}
        <img
          src={logo}
          alt="Indrani Automotive Logo"
          className="w-28 sm:w-32 md:w-40"
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 text-base font-medium">
          <a href="#" className="hover:text-red-600 transition">Home</a>
          <a href="#" className="hover:text-red-600 transition">About Us</a>
          <a href="#" className="hover:text-red-600 transition">Products</a>
          <a href="#" className="hover:text-red-600 transition">Certification</a>
          <a href="#" className="hover:text-red-600 transition">After Market</a>
          <a href="#" className="hover:text-red-600 transition">Vendor</a>
          <a href="#" className="hover:text-red-600 transition">Career</a>
          <a href="#" className="hover:text-red-600 transition">Contact Us</a>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex gap-4 text-red-600 text-lg">
          <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
          <FaXTwitter className="cursor-pointer hover:scale-110 transition" />
          <FaInstagram className="cursor-pointer hover:scale-110 transition" />
          <FaLinkedinIn className="cursor-pointer hover:scale-110 transition" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-100 px-4 pb-4 space-y-4 text-center font-medium">
          <a href="#" className="block hover:text-red-600">Home</a>
          <a href="#" className="block hover:text-red-600">About Us</a>
          <a href="#" className="block hover:text-red-600">Products</a>
          <a href="#" className="block hover:text-red-600">Certification</a>
          <a href="#" className="block hover:text-red-600">After Market</a>
          <a href="#" className="block hover:text-red-600">Vendor</a>
          <a href="#" className="block hover:text-red-600">Career</a>
          <a href="#" className="block hover:text-red-600">Contact Us</a>

          {/* Social Icons for Mobile */}
          <div className="flex justify-center gap-5 text-red-600 text-xl pt-3">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      )}
    </header>
  );
}