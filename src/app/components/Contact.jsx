"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiUser } from "react-icons/fi";

const Contact = () => {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
 });

 const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission here
  console.log("Form submitted:", formData);
 };

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
   ...prev,
   [name]: value,
  }));
 };

 return (
  <section id="contact" className="py-16 sm:py-20">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.8 }}
     className="mb-12 sm:mb-16"
    >
     <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">Let's Connect</h2>
     <p className="text-sm sm:text-md text-gray-400 max-w-2xl">
      Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
     </p>
     <div className="w-20 sm:w-24 h-1 bg-white mt-4" />
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
     <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-6 sm:space-y-8"
     >
      <div className="bg-gray-800/30 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-700/50">
       <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Contact Information</h3>
       <div className="space-y-4">
        <div className="flex items-center space-x-4">
         <div className="p-2 sm:p-3 bg-gray-700/50 rounded-lg">
          <FiMail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
         </div>
         <div>
          <p className="text-xs sm:text-sm text-gray-400">Email</p>
          <a href="mailto:sharjeelh6451@gmail.com" className="text-xs sm:text-sm text-white hover:text-gray-300 transition-colors">
           sharjeelh6451@gmail.com
          </a>
         </div>
        </div>
        <div className="flex items-center space-x-4">
         <div className="p-2 sm:p-3 bg-gray-700/50 rounded-lg">
          <FiUser className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
         </div>
         <div>
          <p className="text-xs sm:text-sm text-gray-400">Location</p>
          <p className="text-xs sm:text-sm text-white">Islamabad, Pakistan</p>
         </div>
        </div>
       </div>
      </div>
     </motion.div>


    </div>
   </div>
  </section>
 );
};

export default Contact;
