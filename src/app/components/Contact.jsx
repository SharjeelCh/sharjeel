'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiUser } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-white mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-700/50 rounded-lg">
                    <FiMail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:hello@example.com" className="text-white hover:text-gray-300 transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-700/50 rounded-lg">
                    <FiUser className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-200 text-white placeholder-gray-400"
                placeholder="Your Name"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-200 text-white placeholder-gray-400"
                placeholder="Your Email"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border-2 border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-200 resize-none text-white placeholder-gray-400"
                placeholder="Your Message"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 