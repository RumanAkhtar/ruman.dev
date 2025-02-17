import { assets } from "@/assets /assets";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="w-full px-6 sm:px-[12%] py-16 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h4 className="text-lg text-gray-600 font-Ovo dark:text-white font-semibold uppercase">
          Connect with me
        </h4>
        <h2 className="text-5xl font-Ovo font-semibold  dark:text-white text-gray-800">
          Get in touch
        </h2>
        <p className="max-w-2xl mx-auto  dark:text-white mt-4 text-gray-600 leading-relaxed font-Ovo">
        Have a project in mind or just want to chat about your digital ideas? Reach out, and let’s turn your vision into reality with seamless, high-performance web solutions!


        </p>
      </motion.div>

      {/* Form Section */}
      <motion.form
        className="max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.input
            type="email"
            placeholder="Enter your mail"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>

        <motion.textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        ></motion.textarea>

        <motion.button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          type="submit"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Submit now
          <Image src={assets.right_arrow_white} alt="Right Arrow" width={16} height={16} />
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
