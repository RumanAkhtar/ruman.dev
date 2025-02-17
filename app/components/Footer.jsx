import { assets } from "@/assets /assets";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <motion.footer
      className="mt-20 px-6 sm:px-12 md:px-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      {/* Logo Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Ruman.dev Logo"
          width={144}
          height={40}
          className="w-48 mx-auto mb-2"
        />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="flex items-center justify-center gap-2 mt-4"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Image
          src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
          alt="Email Icon"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <a
          href="mailto:xyz@gmail.com"
          className="text-gray-700 dark:text-gray-300 hover:underline"
        >
          xyz@gmail.com
        </a>
      </motion.div>

      {/* Footer Bottom Section */}
      <motion.div
        className="border-t border-gray-400 mx-auto mt-12 py-6 flex flex-col sm:flex-row items-center justify-between text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Copyright */}
        <motion.p
          className="text-gray-700 dark:text-gray-300 text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          &copy; {new Date().getFullYear()} Ruman.dev. All rights reserved.
        </motion.p>

        {/* Social Links */}
        <motion.ul
          className="flex items-center gap-6 sm:gap-8 mt-4 sm:mt-0"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { name: "GitHub", link: "https://github.com" },
            { name: "Instagram", link: "https://instagram.com" },
            { name: "YouTube", link: "https://youtube.com" },
            { name: "Facebook", link: "https://facebook.com" },
          ].map((social, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-500 transition"
              >
                {social.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
