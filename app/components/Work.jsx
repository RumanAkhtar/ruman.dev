import { assets, workData } from "@/assets /assets";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Work = ({ IsDarkMode }) => {
  return (
    <motion.section
      id="work"
      className="w-full px-6 md:px-[12%] py-16 scroll-mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h4 className="text-lg font-Ovo text-gray-700 dark:text-white">My Portfolio</h4>
        <h2 className="text-4xl md:text-5xl font-Ovo font-semibold text-gray-900 dark:text-white mt-2">
          My Latest Work 
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-white leading-relaxed font-Ovo">
          Building dynamic, high-performance web applications with seamless functionality, modern UI/UX, and scalable architecture—delivering innovation, efficiency, and top-tier digital experiences.
        </p>
      </motion.div>

      {/* Work Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-6 dark:text-black"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {workData.map((project, index) => (
          <motion.a
            key={index}
            href={project.link || "#"} // ✅ Make project clickable (opens in a new tab if link exists)
            target={project.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="relative aspect-square bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer group transition-transform duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Project Info */}
            <div className="bg-white dark:bg-white dark:text-black w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between shadow-lg transition-all duration-500 group-hover:bottom-7">
              <div>
                <h1 className="text-lg font-semibold text-gray-900 dark:text-black">
                  {project.title}
                </h1>
                <p className="text-sm text-gray-700 dark:text-black">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="Send icon" width={20} height={20} className="w-5" />
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Show More Button */}
      <motion.a
        href="#"
        className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Show More
        <Image
          src={IsDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right arrow"
          width={16}
          height={16}
          className="w-4"
        />
      </motion.a>
    </motion.section>
  );
};

export default Work;
