'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const projects = {
  'Web Applications': [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1170&q=80',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=1332&q=80',
      tags: ['React', 'Firebase', 'Material UI'],
    },
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1170&q=80',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=1332&q=80',
      tags: ['React', 'Firebase', 'Material UI'],
    },{
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1170&q=80',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=1332&q=80',
      tags: ['React', 'Firebase', 'Material UI'],
    },{
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1170&q=80',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=1332&q=80',
      tags: ['React', 'Firebase', 'Material UI'],
    },{
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1170&q=80',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=1332&q=80',
      tags: ['React', 'Firebase', 'Material UI'],
    },
    // Add more unique projects here
  ],
  'Mobile Apps': [
    {
      title: 'Fitness Tracker',
      description: 'A mobile app for tracking workouts and nutrition with social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1170&q=80',
      tags: ['React Native', 'Redux', 'Firebase'],
    },
    {
      title: 'Food Delivery App',
      description: 'A food delivery application with real-time order tracking.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1170&q=80',
      tags: ['Flutter', 'Node.js', 'MongoDB'],
    },
  ],
  'Desktop Applications': [
    {
      title: 'Code Editor',
      description: 'A modern code editor with syntax highlighting and Git integration.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1170&q=80',
      tags: ['Electron', 'TypeScript', 'Monaco Editor'],
    },
    {
      title: 'Design Tool',
      description: 'A desktop application for creating and editing vector graphics.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1064&q=80',
      tags: ['Electron', 'React', 'Canvas API'],
    },
  ],
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Web Applications');
  const [windowWidth, setWindowWidth] = useState(0);
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const horizontalScrollRef = useRef(null);
  const cardWidth = 370; // 350 card + 20 margin

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Update window width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const numCards = projects[activeCategory].length;
  const scrollLength = windowWidth ? cardWidth * numCards - windowWidth + 80 : 0;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollLength]);

  return (
    <section
      ref={containerRef}
      style={{ height: `${numCards * 100}vh` }}
      className="relative"
      id="projects"
    >
      <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 z-10 px-4">
            {Object.keys(projects).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-white text-gray-900'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Horizontal Scrolling Cards */}
          <div className="overflow-hidden w-full">
            <motion.div
              ref={horizontalScrollRef}
              style={{ x }}
              className="flex space-x-4 sm:space-x-8 px-4 sm:px-12"
            >
              {projects[activeCategory].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-none w-[280px] sm:w-[350px] group"
                >
                  <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-200 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">
              Scroll down to see more projects →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
