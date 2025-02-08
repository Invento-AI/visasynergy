"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/news", label: "News" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <div>
      <header className="hidden md:flex relative top-0 left-0 right-0 justify-between items-center p-2 bg-primary text-white z-30">
        <div className="ml-auto flex space-x-6 mr-6">
          <span className="flex w-100 mr-6">
            <img
              className="mr-2"
              src="/call.png"
              alt="call"
              width={20}
              height={20}
            />{" "}
            +1 234 567 890
          </span>
          <span className="flex w-100 mr-6">
            <img
              className="mr-2"
              src="/email.png"
              alt="email"
              width={25}
              height={20}
            />{" "}
            contact@visasynergy.com
          </span>
        </div>
      </header>

      <header className="relative left-0 right-0 flex justify-between items-center bg-white text-gray-700 z-40 p-2">
        <div className="flex items-center ml-4">
          <Link href="/">
            <img
              src="/logo.png"
              width={150}
              height={10}
              alt="Visa Synergy Logo"
              className="w-[120px] md:w-[150px] cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-auto mr-12 space-x-12 text-xl font-bold font-albert">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span
                className={`cursor-pointer transition duration-300 ${
                  pathname === href
                    ? "text-[#51868e] border-b-2 border-[#51868e]"
                    : "text-gray-700 hover:text-[#51868e]"
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>

        <Button className="hidden md:block ml-4 mr-6 text-white border-2 font-albert text-lg md:py-0 font-bold hover:bg-white hover:text-[#51868e] border-[#51868e] hover:border-2 transition duration-700">
          Start Assessment
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="z-50 absolute top-full right-0 w-full bg-white shadow-lg flex flex-col items-center space-y-6 py-4 md:hidden font-bold">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-lg font-albert ${
                  pathname === href ? "text-[#51868e] border-b-2 border-[#51868e]" : "text-gray-700 hover:text-[#51868e]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Button className="w-3/4 text-white border-2 hover:bg-white font-albert hover:text-[#51868e] border-[#51868e] transition duration-700">
              Start Assessment
            </Button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;