"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { useEffect } from "react";

const Hero = () => {
 useEffect(() => {
  const handleMouseMove = (e) => {
   const { clientX, clientY } = e;
   const { innerWidth, innerHeight } = window;

   // Calculate mouse position as percentage
   const x = (clientX / innerWidth) * 100;
   const y = (clientY / innerHeight) * 100;

   // Update CSS variables
   document.documentElement.style.setProperty("--mouse-x", `${x}%`);
   document.documentElement.style.setProperty("--mouse-y", `${y}%`);
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
 }, []);

 return (
  <section id="hero" className="relative min-h-screen flex items-center justify-center">
   {/* Main content */}
   <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
     {/* Left column - Text content */}
     <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-left space-y-6 sm:space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-3 sm:space-y-4">
       <h2 className="font-base sm:font-lg font-medium text-blue-400 code-block inline-block">Hello, I'm</h2>
       <h1 className="font-3xl sm:font-4xl md:font-5xl lg:font-6xl font-bold text-white">Sharjeel Fida Ch</h1>
       <p className="font-base sm:font-lg md:font-xl text-gray-300 max-w-lg code-block">
        Full-stack web & app developer crafting intelligent digital solutions through code, design, and AI fine-tuning
       </p>
      </motion.div>

      {/* Social Links */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex space-x-4 sm:space-x-6">
       {[
        { icon: FaGithub, href: "https://github.com/SharjeelCh", label: "GitHub" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/sharjeel-fida-ch-6a2641256/", label: "LinkedIn" },
        { icon: SiUpwork, href: "https://www.upwork.com/freelancers/~01112ad8de619e03c1", label: "Upwork" },
       ].map((social) => (
        <motion.a
         key={social.label}
         href={social.href}
         whileHover={{ y: -3 }}
         target="_blank"
         className="text-gray-400 hover:text-white transition-colors duration-200"
        >
         <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.a>
       ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.6 }}
       className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
      >
       <motion.a
        href="#projects"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black rounded-lg font-sm sm:font-base font-medium transition-colors duration-200 text-center"
       >
        View Projects
       </motion.a>
       <motion.a
        href="/Profile/Sharjeel Resume.pdf"
        download="Sharjeel_Fida_Resume.pdf"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-6 sm:px-8 py-2.5 sm:py-3 border border-gray-600 text-white rounded-lg font-sm sm:font-base font-medium hover:border-gray-400 transition-colors duration-200 text-center"
       >
        Resume
       </motion.a>
      </motion.div>
     </motion.div>

     {/* Right column - Decorative element */}
     <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative hidden lg:block"
     >
      <div className="relative w-full aspect-square">
       {/* Decorative circles */}
       {/* <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-purple-500/10 blur-2xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-pink-500/10 blur-xl" />
              </div> */}

       {/* Tech stack icons or decorative elements can be added here */}
      </div>
     </motion.div>
    </div>
   </div>

   {/* Scroll indicator */}
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 0.8 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
   >
    <motion.div
     animate={{
      y: [0, 10, 0],
     }}
     transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
     }}
     className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center"
    >
     <motion.div
      animate={{
       y: [0, 10, 0],
      }}
      transition={{
       duration: 1.5,
       repeat: Infinity,
       ease: "easeInOut",
      }}
      className="w-1 h-2 bg-gray-400 rounded-full mt-2"
     />
    </motion.div>
   </motion.div>
  </section>
 );
};

export default Hero;
