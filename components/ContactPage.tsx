"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  Bean as Behance,
} from "lucide-react";



const ContactPage = () => {
  const contactInfo = {
    name: "Vaishnavi Bharti",
    location: "New Delhi",
    email: "vaishnavi333kashyap@gmail.com",
    phone: "+91 79038 15004",
    social: {
      linkedin: "https://linkedin.com/in/vaishnavi-designer",
      github: "https://github.com/vaishcash",
      instagram: "https://instagram.com/?hl=en",
      behance: "https://behance.net/vaishnakashyap1",
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  p-4 md:p-8">
      
      
      <motion.div
        className="max-w-4xl  mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="bg-gradient-to-br  from-purple-900/80 via-gray-900/80 to-purple-900/80  backdrop-blur-sm rounded-2xl mt-24 p-8 md:p-12 shadow-2xl border border-purple-500/20">
          {/* Header Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h1 className="text-4xl  md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 text-transparent bg-clip-text mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">
              Let us create something amazing together
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8 mb-12">
            {/* Name and Location */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-purple-300">
                {contactInfo.name}
              </h2>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="text-purple-400" size={20} />
                <span>{contactInfo.location}</span>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 ">
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-300 group  w-fit"
                whileHover={{ x: 10 }}
              >
                <Mail
                  className="group-hover:scale-110 transition-transform duration-300"
                  size={20}
                />
                <span>{contactInfo.email}</span>
              </motion.a>

              <motion.a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-300 group w-fit"
                whileHover={{ x: 10 }}
              >
                <Phone
                  className="group-hover:scale-110 transition-transform duration-300"
                  size={20}
                />
                <span>{contactInfo.phone}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-purple-300 mb-6">
              Connect With Me
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  url: contactInfo.social.linkedin,
                },
                {
                  icon: Github,
                  label: "GitHub",
                  url: contactInfo.social.github,
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  url: contactInfo.social.instagram,
                },
                {
                  icon: Behance,
                  label: "Behance",
                  url: contactInfo.social.behance,
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex  items-center gap-3 p-4 rounded-lg bg-gray-600/30 text-gray-300 hover:text-purple-400 hover:bg-gray-500/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon
                    className="group-hover:scale-110 transition-transform duration-300"
                    size={24}
                  />
                  <span className="font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
