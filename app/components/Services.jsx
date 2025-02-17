import { assets, serviceData } from "@/assets /assets";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <motion.section
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
      // Faster fade-in and slide-up effect for the entire section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }} // Reduced duration
      viewport={{ once: true }}
    >
      {/* Section Heading */}
      <motion.div
        className="text-center mb-10"
        // Faster heading animation
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }} // Reduced time
      >
        <h4 className="text-lg font-Ovo text-gray-700 dark:text-gray-300">What I Offer</h4>
        <h2 className="text-5xl font-Ovo text-gray-900 dark:text-white">My Services</h2>
        <p className="max-w-2xl mx-auto mt-5 text-gray-600 dark:text-gray-300 leading-relaxed font-Ovo">
          I craft cutting-edge digital experiences with dynamic websites, powerful apps, and intelligent business solutions—blending innovation, scalability, and seamless performance to fuel your digital success.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
        // Faster staggered animation for children (each service card)
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }} // Reduced stagger time
        viewport={{ once: true }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer transition-all duration-300 
            hover:shadow-lg hover:-translate-y-2 hover:bg-gray-100 dark:hover:bg-darkHover dark:hover:shadow-white"
            // Faster fade-in for service cards
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // Faster hover effect (scale and rotate)
            whileHover={{ scale: 1.04, rotate: 1 }} 
            // Faster click effect (scale down & slight rotation)
            whileTap={{ scale: 0.96, rotate: -1 }} 
            transition={{ duration: 0.3, type: "spring", stiffness: 250 }} // Reduced spring time
          >
            <Image src={icon} alt={title} width={40} height={40} />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-5">
              {description}
            </p>
            <a 
              href={link} 
              className="flex items-center gap-2 text-sm mt-5 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200" // Reduced duration
            >
              Read More
              <motion.div 
                // Faster arrow animation on hover
                whileHover={{ x: 4 }} 
                transition={{ duration: 0.2, ease: "easeInOut" }} // Reduced time
              >
                <Image src={assets.right_arrow} alt="Arrow" width={16} height={16} />
              </motion.div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
