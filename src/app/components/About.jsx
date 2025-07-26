"use client";

import { motion } from "framer-motion";

const About = () => {
 return (
  <section id="about" className="py-20">
   <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }}
     className="text-center mb-12 sm:mb-16"
    >
     <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">About Me</h2>
     <div className="w-20 sm:w-24 h-1 bg-white mx-auto" />
    </motion.div>

    <div className="max-w-7xl mx-auto">
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8 sm:space-y-12"
     >
      <div className="space-y-4 sm:space-y-6">
       <p className="text-sm sm:text-md text-gray-300 leading-relaxed">
        I'm a full-stack web and mobile app developer passionate about crafting seamless, scalable digital experiences. With a strong foundation in both
        front-end design and back-end architecture, I bring ideas to life through clean code and thoughtful UI/UX. Recently, I've been exploring the frontier of AI—fine-tuning models and integrating intelligent features into apps to build smarter, more adaptive products.

       </p>
       <p className="text-sm sm:text-md text-gray-300 leading-relaxed">
       </p>
      </div>

      <div className="pt-4 sm:pt-6 border-t border-gray-800">
       <div className="flex flex-wrap gap-2 sm:gap-4">
        {["Web Development", "Mobile App Development", "Automation", "Desktop App Development", "Problem Solving", "Fine-tuning", "Wordpress"].map((skill) => (
         <motion.span
          key={skill}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-xs sm:text-xs font-medium text-gray-300"
         >
          {skill}
         </motion.span>
        ))}
       </div>
      </div>
     </motion.div>
    </div>
   </div>
  </section>
 );
};

export default About;
