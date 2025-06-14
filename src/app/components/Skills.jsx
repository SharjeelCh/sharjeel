"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = {
 Frontend: [
  { name: "React", level: 90, icon: "⚛️" },
  { name: "Next.js", level: 85, icon: "▲" },
  { name: "TypeScript", level: 80, icon: "📘" },
  { name: "Tailwind CSS", level: 95, icon: "🎨" },
 ],
 Backend: [
  { name: "Node.js", level: 85, icon: "🟢" },
  { name: "Python", level: 75, icon: "🐍" },
  { name: "SQL", level: 80, icon: "🗄️" },
  { name: "GraphQL", level: 70, icon: "🔷" },
 ],
 Tools: [
  { name: "Git", level: 90, icon: "📦" },
  { name: "Docker", level: 75, icon: "🐳" },
  { name: "AWS", level: 70, icon: "☁️" },
  { name: "CI/CD", level: 80, icon: "🔄" },
 ],
};

const Skills = () => {
 const [activeCategory, setActiveCategory] = useState("Frontend");

 return (
  <section id="skills" className="py-20 relative">
   {/* Background effects matching the app theme */}
   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/30 via-gray-950/30 to-black/30" />
   <div
    className="absolute inset-0 opacity-20"
    style={{
     backgroundImage: `linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px)`,
     backgroundSize: "3rem 3rem",
    }}
   />

   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }}
     className="text-center mb-16"
    >
     <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 terminal-cursor">Skills</h2>
     <div className="w-24 h-1 bg-white mx-auto" />
    </motion.div>

    <div className="flex justify-center space-x-4 mb-8">
     {Object.keys(skillCategories).map((category) => (
      <button
       key={category}
       onClick={() => setActiveCategory(category)}
       className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        activeCategory === category ? "bg-white text-gray-900" : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
       }`}
      >
       {category}
      </button>
     ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     {skillCategories[activeCategory].map((skill, index) => (
      <motion.div
       key={skill.name}
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay: index * 0.1 }}
       className="code-block"
      >
       <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
         <span className="text-xl">{skill.icon}</span>
         <span className="font-medium text-white">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-400">{skill.level}%</span>
       </div>
       <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
         initial={{ width: 0 }}
         whileInView={{ width: `${skill.level}%` }}
         viewport={{ once: true }}
         transition={{ duration: 1, delay: index * 0.1 }}
         className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default Skills;
