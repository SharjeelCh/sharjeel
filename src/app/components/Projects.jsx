"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { projects } from "../data/projects";

const Projects = () => {
 const [activeCategory, setActiveCategory] = useState("Web Applications");
 const [activeCard, setActiveCard] = useState(null);
 const [windowWidth, setWindowWidth] = useState(0);
 const containerRef = useRef(null);
 const stickyRef = useRef(null);
 const horizontalScrollRef = useRef(null);
 const cardWidth = windowWidth < 640 ? 350 : 800; // Responsive card width
 const cardGap = windowWidth < 640 ? 15 : 30; // Responsive gap between cards

 // Reset scroll position when category changes
 useEffect(() => {
  if (containerRef.current) {
   window.scrollTo({
    top: containerRef.current.offsetTop,
    behavior: "smooth",
   });
  }
  setActiveCard(null); // Reset active card when category changes
 }, [activeCategory]);

 useEffect(() => {
  // Set initial window width
  setWindowWidth(window.innerWidth);

  // Update window width on resize
  const handleResize = () => {
   setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
 }, []);

 const numCards = projects[activeCategory].length;
 const totalContentWidth = (cardWidth + cardGap) * numCards;
 const scrollLength = Math.max(0, totalContentWidth - windowWidth + 80);

 const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end end"],
 });

 const x = useTransform(scrollYProgress, [0, 1], [0, -scrollLength]);

 return (
  <section ref={containerRef} style={{ height: `${numCards * 100}vh` }} className="relative" id="projects">
   <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden">
    <div className="flex flex-col items-center justify-center h-full">
     <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projects</h2>
     <div className="w-24 h-1 bg-white mx-auto mb-8" />

     {/* Category Buttons */}
     <div className="flex flex-wrap justify-center gap-2 mb-8 z-10 px-4">
      {Object.keys(projects).map((category) => (
       <button
        key={category}
        onClick={() => {
         setActiveCategory(category);
         if (horizontalScrollRef.current) {
          horizontalScrollRef.current.style.transform = "translateX(0px)";
         }
        }}
        className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
         activeCategory === category ? "bg-white text-gray-900" : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
        }`}
       >
        {category}
       </button>
      ))}
     </div>

     {/* Horizontal Scrolling Cards */}
     <div className="overflow-hidden w-full">
      <motion.div ref={horizontalScrollRef} style={{ x }} className="flex space-x-4 sm:space-x-8 px-4 sm:px-12">
       {projects[activeCategory].map((project, index) => (
        <motion.div
         key={index}
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5, delay: index * 0.1 }}
         className="flex-none w-[320px] sm:w-[800px] group"
         onClick={() => setActiveCard(activeCard === index ? null : index)}
        >
         <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
          <div
           className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent transition-opacity duration-300 ${
            activeCard === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
           }`}
          >
           <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{project.title}</h3>
            <p className="text-sm sm:text-base text-gray-200 mb-3 sm:mb-4">{project.description}</p>
            <a
             href={project.link}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110"
             onClick={(e) => e.stopPropagation()}
            >
             <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
             </svg>
            </a>
           </div>
          </div>
         </div>
        </motion.div>
       ))}
      </motion.div>
     </div>

     <div className="text-center mt-12">
      <p className="text-gray-400">Scroll down to see more projects →</p>
     </div>
    </div>
   </div>
  </section>
 );
};

export default Projects;
