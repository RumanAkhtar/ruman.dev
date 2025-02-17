import { assets } from "@/assets /assets";
import { motion } from "framer-motion";  
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="w-11/12 max-w-screen-lg text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      
      {/* Profile Image */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image 
          src={assets.profile_img} 
          alt="Profile Picture" 
          width={128} 
          height={128} 
          className="rounded-full"
          priority
        />
      </motion.div>

      {/* Introduction Text */}
      <motion.h1 
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Ruman Akhtar
        <Image src={assets.hand_icon} alt="Waving Hand" className="mb-1" width={24} height={24} />
      </motion.h1>

      {/* Title with Background Image in "India" */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Full Stack Developer <br /> Based in 
        <span 
  className="bg-clip-text text-transparent bg-cover    font-bold  "
  style={{ 
    backgroundImage: "url('/text_bg.png')", // ✅ Correct Background Image Path
    
  }}
> India </span> 

      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-lg text-gray-700 dark:text-gray-300"
      >
        Full-stack developers are the wizards of the web, crafting seamless experiences from code to creativity!
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Contact Me Button */}
        <motion.a
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me 
          <Image src={assets.right_arrow} alt="Right Arrow" width={16} height={16} />
        </motion.a>

        {/* Resume Button */}
        <motion.a
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          href="/resume.pdf" // ✅ Corrected Resume Link
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume
          <Image src={assets.download_icon} alt="Download Icon" width={16} height={16} />
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
