'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading frontend development for enterprise applications, implementing modern architectures and mentoring junior developers.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple web applications using React, Node.js, and cloud technologies.',
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Web Agency',
    period: '2018 - 2020',
    description: 'Created responsive and interactive web interfaces for various clients, focusing on user experience and performance.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-white mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white" />

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-gray-300 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-400 mb-4">
                      {exp.period}
                    </p>
                    <p className="text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 