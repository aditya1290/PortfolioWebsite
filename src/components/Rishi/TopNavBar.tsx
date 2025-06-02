'use client';
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import { Bell, User } from 'lucide-react';

const TopNavBar: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+919571082454", "_blank"); // Replace with actual number
  };

  return (
    <div className="w-full h-14 flex items-center justify-between px-4 bg-white shadow-md">
      {/* Logo */}
      <div className="w-30 md:w-50 h-14 relative">
        <Image
          src="/logo_rishi.jpg" // Replace with your actual logo path
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* WhatsApp Button */}
      <div className="flex gap-2 justify-between items-center">
        {/* <div className="text-xl font-serif text-center uppercase flex gap-6 tracking-wide"> */}
        <div className="uppercase text-center mr-4 flex items-center">
          <span className="text-center">Rishi Jagariya Finserv</span>
        </div>
        {/* <div className="uppercase text-center block sm:hidden mr-2">R S J</div> */}
        <Badge variant="secondary" className="h-7 rounded-xl hidden sm:flex items-center bg-gradient-to-r from-[#FFD700] via-[#FFC300] to-[#FFA500] px-6 py-3 rounded-xl font-bold shadow-md hover:brightness-110 transition duration-200">SILVER BINANCE MERCHANT</Badge>
        <Button variant="outline" onClick={handleWhatsAppClick} className="py-3 border border-blue-500 hover:text-blue-400 cursor-pointer text-blue-400 rounded-md">INQUIRY</Button>
        {/* <Button className="cursor-pointer hidden md:block" variant="ghost"><Bell /></Button>
        <Button className="cursor-pointer hidden md:block" variant="ghost"><User /></Button> */}
      </div>

    </div>
  );
};

export default TopNavBar;
