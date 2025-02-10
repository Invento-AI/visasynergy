import Link from "next/link";
import { Mail, Menu, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Navlink from "./Navlink";
const Navbar = () => {
  return (
    <div>
      <header className="hidden md:flex relative top-0 left-0 right-0 justify-between items-center p-2 bg-primary text-white z-30">
        <div className="ml-auto flex space-x-6 mr-6">
          <span className="flex w-100 mr-6">
            <Phone size={20} className="mr-2 mt-1" />
            +1 234 567 890
          </span>
          <span className="flex w-100 mr-6">
            <Mail size={20} className="mr-2 mt-1" />
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
        <Navlink size="desktop" />
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu size={30} />
            </SheetTrigger>
            <SheetContent side={"right"}>
              <SheetHeader>
                <Navlink size="mobile" />
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
