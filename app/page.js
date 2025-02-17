"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check user's theme preference on initial load
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  // Apply dark mode class to <html> tag when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode}   setIsDarkMode={setIsDarkMode}/>
      <Header isDarkMode={isDarkMode}  />
      <About isDarkMode={isDarkMode}  />
      <Services isDarkMode={isDarkMode}  />
      <Work isDarkMode={isDarkMode}  />
      <Contact  isDarkMode={isDarkMode} />
      <Footer  isDarkMode={isDarkMode} />
    </>
  );
}
