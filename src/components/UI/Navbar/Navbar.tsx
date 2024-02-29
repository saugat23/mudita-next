// Navbar component
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "../../Layouts/Hero"; // Importing Hero component

export default function Navbar() {
  return (
    <Hero> 
      <div className="absolute top-0 w-full text-center">
      <div className="flex justify-around m-1 p-4 items-center z-100">
        <div className="flex items-center space-x-2">
          <Image
            src="/Group.png"
            width={32}
            height={32}
            alt="Logo"
            className="inline"
          />
          <span className="text-4xl text-black font-extrabold">Logo</span>
        </div>
        <div className="flex items-center space-x-8 font-manrope">
          <Link href="#home">
            <span className="text-base font-medium hover:text-[#6D33FA] tracking-wide">Home</span>
          </Link>
          <Link href="#about">
            <span className="text-base font-medium hover:text-[#6D33FA] tracking-wide">About</span>
          </Link>
          <Link href="#pricing">
            <span className="text-base font-medium hover:text-[#6D33FA] tracking-wide">Pricing</span>
          </Link>
          <Link href="#features">
            <span className="text-base font-medium hover:text-[#6D33FA] tracking-wide">Features</span>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-[#6D33FA] text-white p-4 rounded-md font-semibold w-40 hover:scale-105">Sign Up</button>
        </div>
      </div>
      </div>
    </Hero>
  );
}

