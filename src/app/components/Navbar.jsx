"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FaUser, FaBriefcase, FaCode, FaProjectDiagram, FaEnvelope, FaTimes } from "react-icons/fa";

const navItems = [
 { name: "About", icon: FaUser, href: "#about" },
 { name: "Experience", icon: FaBriefcase, href: "#experience" },
 { name: "Skills", icon: FaCode, href: "#skills" },
 { name: "Projects", icon: FaProjectDiagram, href: "#projects" },
 { name: "Contact", icon: FaEnvelope, href: "#contact" },
];

const Navbar = () => {
 const [isScrolled, setIsScrolled] = useState(false);
 const [activeSection, setActiveSection] = useState("");
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const { scrollYProgress } = useScroll();
 const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
 });

 // Close mobile menu when clicking outside
 useEffect(() => {
  const handleClickOutside = (event) => {
   if (isMobileMenuOpen && !event.target.closest(".mobile-menu")) {
    setIsMobileMenuOpen(false);
   }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
 }, [isMobileMenuOpen]);

 // Close mobile menu when clicking a link
 const handleLinkClick = () => {
  setIsMobileMenuOpen(false);
 };

 useEffect(() => {
  const handleScroll = () => {
   setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 // Intersection Observer for section detection
 useEffect(() => {
  const observerOptions = {
   root: null,
   rootMargin: "-50% 0px",
   threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
    if (entry.isIntersecting) {
     setActiveSection(entry.target.id);
    }
   });
  }, observerOptions);

  // Observe all sections
  navItems.forEach((item) => {
   const section = document.getElementById(item.href.substring(1));
   if (section) {
    observer.observe(section);
   }
  });

  return () => {
   // Cleanup: disconnect observer
   observer.disconnect();
  };
 }, []);

 return (
  <>
   <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 to-purple-700 z-50 origin-left" />

   <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className={`fixed w-full z-40 transition-all duration-300 ${
     isScrolled ? "py-4 bg-transparent sm:bg-white/10 dark:bg-gray-900/10 backdrop-blur-md shadow-lg" : "py-6 bg-white/5 dark:bg-gray-900/5 backdrop-blur-sm"
    }`}
   >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="flex items-center justify-between">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex-shrink-0">
       <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"></Link>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
       <div className="flex items-center space-x-1">
        {navItems.map((item, index) => {
         const Icon = item.icon;
         const isActive = activeSection === item.href.substring(1);

         return (
          <motion.div key={item.name} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.1 }}>
           <Link
            href={item.href}
            onClick={(e) => {
             e.preventDefault();
             const element = document.getElementById(item.href.substring(1));
             if (element) {
              element.scrollIntoView({ behavior: "smooth" });
             }
             handleLinkClick();
            }}
            className={`group relative flex items-center px-4 py-2 rounded-full transition-all duration-200 ${
             isActive ? "bg-white/10 backdrop-blur-md text-white" : "text-gray-300 hover:text-white"
            }`}
           >
            <Icon className="w-5 h-5 mr-2" />
            <span className="font-medium" style={{fontSize:'12px'}}>{item.name}</span>

            {isActive && (
             <motion.div
              layoutId="activeSection"
              className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
             />
            )}

            <motion.div
             className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0  transition-opacity duration-200"
             initial={false}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
            />
           </Link>
          </motion.div>
         );
        })}
       </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
       <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white"
       >
        {isMobileMenuOpen ? (
         <FaTimes className="w-6 h-6" />
        ) : (
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
         </svg>
        )}
       </motion.button>
      </div>
     </div>
    </div>

    {/* Mobile Menu */}
    <AnimatePresence>
     {isMobileMenuOpen && (
      <motion.div
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -20 }}
       transition={{ duration: 0.2 }}
       className="md:hidden mobile-menu"
      >
       <div className="px-2 pt-2 pb-3 space-y-1 h-screen bg-white/10 dark:bg-gray-900/10 backdrop-blur-md mt-2 rounded-lg mx-4">
        {navItems.map((item, index) => {
         const Icon = item.icon;
         const isActive = activeSection === item.href.substring(1);

         return (
          <motion.div key={item.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
           <Link
            href={item.href}
            onClick={(e) => {
             e.preventDefault();
             const element = document.getElementById(item.href.substring(1));
             if (element) {
              element.scrollIntoView({ behavior: "smooth" });
             }
             handleLinkClick();
            }}
            className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
             isActive ? "bg-white/10 text-white" : "text-gray-300 hover:text-white"
            }`}
           >
            <Icon className="w-5 h-5 mr-3" />
            <span className="text-sm font-medium">{item.name}</span>
           </Link>
          </motion.div>
         );
        })}
       </div>
      </motion.div>
     )}
    </AnimatePresence>
   </motion.nav>
  </>
 );
};

export default Navbar;
