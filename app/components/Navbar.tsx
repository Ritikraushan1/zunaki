"use client";

import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <div className="text-white text-3xl font-bold">ZP</div>
      
      <ul className="hidden md:flex items-center gap-12 text-gray-300">
        <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
        <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
        <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
        <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
        <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
      </ul>

      <Button>LET'S TALK</Button>
    </nav>
  );
}
