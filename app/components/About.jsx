import { assets, infoList, toolsData } from "@/assets /assets";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const About = ({ isDarkMode }) => {
  return (
    <motion.section
      id="about"
      className="w-full px-6 sm:px-[12%] py-16 scroll-mt-20 bg-white dark:bg-darkTheme text-gray-800 dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {/* Section Heading */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h4 className="text-lg text-gray-600 dark:text-gray-300 font-semibold uppercase">
          Introduction
        </h4>
        <h2 className="text-5xl font-Ovo font-semibold">About Me</h2>
      </motion.div>

      {/* About Content */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Profile Image */}
        <motion.div
          className="w-64 sm:w-80 rounded-3xl overflow-hidden shadow-lg"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Image
            src={assets.user_image}
            alt="User Image"
            width={256}
            height={256}
            className="w-full rounded-3xl"
            priority
          />
        </motion.div>

        {/* Text & Info List */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mb-8 max-w-lg font-Ovo text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            A master of web applications, I build seamless, powerful, and scalable digital solutions, transforming ideas into high-performance experiences!
          </p>

          {/* Info List with Motion */}
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {infoList.map(({ iconDark, icon, title, description }, index) => (
              <motion.li
                key={index}
                className="border border-gray-300 dark:border-gray-600 rounded-xl p-6 cursor-pointer transition-all duration-300 
                hover:shadow-lg dark:hover:shadow-white hover:-translate-y-2 hover:bg-gray-100 dark:hover:bg-darkHover/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} width={32} height={32} />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section with Motion */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="text-2xl font-semibold mb-4">Tools I Use</h4>
            <motion.ul
              className="flex items-center gap-3 sm:gap-5"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  key={index}
                  className="flex justify-center items-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer 
                  hover:translate-y-1 duration-300 hover:bg-gray-100 dark:hover:bg-darkhover/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={tool} alt={`Tool ${index + 1}`} width={32} height={32} />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
