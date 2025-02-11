"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import QuickEnquiry from "./QuickEnquiry";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-lg p-6 rounded-lg w-[90%] md:mx-auto bg-white text-black">
        <DialogTitle className="text-center text-lg font-bold font-albert">
          Quick Enquiry
        </DialogTitle>
        <QuickEnquiry btncss="w-full bg-[#51868e] text-white py-3 text-lg font-albert hover:text-[#51868e] hover:bg-white hover:border-2 hover:border-[#51868e] transition duration-700" />
      </DialogContent>
    </Dialog>
  );
}
