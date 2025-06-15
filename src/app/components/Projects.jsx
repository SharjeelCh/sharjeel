"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { projects } from "../data/projects";

const Projects = () => {
 const [activeCategory, setActiveCategory] = useState("Web Applications");
 const [activeCard, setActiveCard] = useState(null);
 const [windowWidth, setWindowWidth] = useState(0);
 const [previewImage, setPreviewImage] = useState(null);
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
         <div className="relative h-[140px] sm:h-[300px] rounded-2xl overflow-hidden shadow-xl">
          <Image src={project.image} alt={project.title} unoptimized fill className="object-center transition-transform duration-300 group-hover:scale-110" />
          <div
           className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent transition-opacity duration-300 ${
            activeCard === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"
           }`}
          >
           <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2">{project.title}</h3>
            <p className="text-[12px] sm:text-base text-gray-200 mb-2 sm:mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-1 mt-1 mb-2">
              {project.techStack?.map((tech, index) => (
               <span
                key={index}
                className="px-1.5 py-0.5 text-[8px] sm:text-xs bg-white/10 backdrop-blur-sm rounded-full text-white whitespace-nowrap"
               >
                {tech}
               </span>
              ))}
             </div>
            <div className="flex items-center justify-between">
             <div className="flex items-center space-x-2">
              {project.showBothLinks ? (
               <>
                {project.websiteLink && (
                 <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-5 h-5 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                 >
                  <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                   />
                  </svg>
                 </a>
                )}
                {project.githubLink && (
                 <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-5 h-5 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                 >
                  <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                 </a>
                )}
               </>
              ) : (
               <>
                {project.websiteLink && (
                 <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-5 h-5 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                 >
                  <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                   />
                  </svg>
                 </a>
                )}
                {!project.websiteLink && project.githubLink && (
                 <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-5 h-5 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                 >
                  <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                 </a>
                )}
               </>
              )}
              <button
               onClick={(e) => {
                e.stopPropagation();
                setPreviewImage(project.image);
               }}
               className="inline-flex items-center justify-center w-5 h-5 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-110"
               aria-label="Preview image"
              >
               <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
               </svg>
              </button>
             </div>
            
            </div>
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

   {/* Image Preview Dialog */}
   <Dialog open={!!previewImage} onClose={() => setPreviewImage(null)} className="relative z-[100]">
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />

    <div className="fixed inset-0 flex items-center justify-center p-4">
     <Dialog.Panel className="relative w-full max-w-full aspect-video">
      {previewImage && <Image src={previewImage} alt="Project preview" unoptimized fill className="object-contain rounded-lg" priority />}
      <button
       onClick={() => setPreviewImage(null)}
       className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200"
       aria-label="Close preview"
      >
       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
       </svg>
      </button>
     </Dialog.Panel>
    </div>
   </Dialog>
  </section>
 );
};

export default Projects;
