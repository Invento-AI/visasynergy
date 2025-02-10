"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
const navLinks = [
  { href: "/aboutus", label: "About" },
  { href: "/news", label: "News" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contactus", label: "Contact Us" },
  { href: "/dashboard", label: "Dashboard" },
];
const Navlink = ({ size }: { size: string }) => {
  const pathname = usePathname();
  if (size == "desktop") {
    return (
      <>
        <nav className="hidden lg:flex ml-auto mr-12 space-x-12 text-xl font-bold font-albert">
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

        <Button className="hidden lg:block ml-4 mr-6 text-white border-2 font-albert text-lg lg:py-0 font-bold hover:bg-white hover:text-[#51868e] border-[#51868e] hover:border-2 transition duration-700">
          Start Assessment
        </Button>
      </>
    );
  } else if (size == "mobile") {
    return (
      <div className="lg:hidden flex flex-col items-center space-y-4">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-lg font-albert ${
              pathname === href
                ? "text-[#51868e] border-b-2 border-[#51868e]"
                : "text-gray-700 hover:text-[#51868e]"
            }`}
          >
            {label}
          </Link>
        ))}
        <Button className="w-3/4 text-white border-2 hover:bg-white font-albert hover:text-[#51868e] border-[#51868e] transition duration-700">
          Start Assessment
        </Button>
      </div>
    );
  }
};

export default Navlink;
