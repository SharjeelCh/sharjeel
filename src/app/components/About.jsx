"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
 return (
  <section id="about" className="py-20">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }}
     className="text-center mb-12 sm:mb-16"
    >
     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
     <div className="w-20 sm:w-24 h-1 bg-white mx-auto" />
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
     <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden"
     >
      <Image
       src="/Profile/profile1.png"
       alt="Profile"
       fill
       className="object-contain"
       priority
      />
     </motion.div>

     <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-4 sm:space-y-6"
     >
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
       I'm a full-stack web and mobile app developer passionate about crafting seamless, scalable digital experiences. With a strong foundation in both
       front-end design and back-end architecture, I bring ideas to life through clean code and thoughtful UI/UX. Recently,
      </p>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
       I've been exploring the frontier of AI—fine-tuning models and integrating intelligent features into apps to build smarter, more adaptive products.
      </p>
      <div className="flex flex-wrap gap-2 sm:gap-4">
       {["Web Development", "Mobile App Development", "Automation", "Desktop App Development", "Problem Solving", "Fine-tuning"].map((skill) => (
        <span key={skill} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-gray-300">
         {skill}
        </span>
       ))}
      </div>
     </motion.div>
    </div>
   </div>
  </section>
 );
};

export default About;
