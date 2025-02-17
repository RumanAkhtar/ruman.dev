"use client";

import { assets } from "@/assets /assets";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Mobile Menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Scroll Effect for Navbar Transparency
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScroll(window.scrollY > 50);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Links
  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "My Work", href: "#work" },
    { name: "Contact Me", href: "#contact" },
  ];

  return (
    <div>
      {/* Background Image */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="Background" priority />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 
        ${isScroll ? "bg-white bg-opacity-30 backdrop-blur-lg shadow-md dark:bg-darkTheme" : "bg-transparent dark:bg-darkTheme"}`}
      >
        {/* Logo */}
        <Link href="#top" aria-label="Homepage">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
          
            className="w-48  cursor-pointer mr-14"
            priority
          />
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 shadow-sm bg-opacity-90 dark:border dark:border-white/50 dark:bg-transparent rounded-full px-12 py-3">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <Link href={href} className="font-Ovo text-lg">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button onClick={() => setIsDarkMode((prev) => !prev)} aria-label="Toggle Dark Mode">
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Dark Mode Toggle"
              className="w-6"
            />
          </button>

          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-2" aria-label="Toggle Mobile Menu" onClick={toggleMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu Icon" className="w-4" />
          </button>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden lg:block">
          <Link href="#contact" className="flex items-center text-lg gap-3 px-10 py-2.5 border dark:border-white/50 border-gray-500 rounded-full ml-4  dark:hover:bg-darkHover">
            Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow Icon" className="w-3 ml-2" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 w-64 h-screen bg-rose-50 dark:bg-darkTheme transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Close Button */}
          <button className="absolute right-6 top-6" onClick={toggleMenu} aria-label="Close Mobile Menu">
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close Menu" className="w-5 cursor-pointer" />
          </button>

          {/* Mobile Menu Links */}
          <ul className="flex flex-col items-center justify-center h-full gap-6 dark:text-white">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <Link href={href} className="font-Ovo text-lg" onClick={toggleMenu}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
