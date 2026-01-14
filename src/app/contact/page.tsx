"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, User } from "lucide-react";
import Image from "next/image";

interface ContactFormProps { }

const ContactForm: React.FC<ContactFormProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log("Form submitted", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.div
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6 md:p-8 lg:p-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold text-white mb-4">Send us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 w-full rounded-md border border-border bg-transparent text-white focus:ring-primary focus:border-primary"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full rounded-md border border-border bg-transparent text-white focus:ring-primary focus:border-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 p-2 w-full rounded-md border border-border bg-transparent text-white focus:ring-primary focus:border-primary"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-primary text-black font-semibold hover:bg-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
};

interface ContactInfoProps { }

const ContactInfo: React.FC<ContactInfoProps> = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex items-center space-x-4" variants={itemVariants}>
        <Mail className="text-primary h-6 w-6" />
        <a href="mailto:info@iworld.com" className="text-white hover:text-accent transition-colors">
          info@iworld.com
        </a>
      </motion.div>
      <motion.div className="flex items-center space-x-4" variants={itemVariants}>
        <Phone className="text-primary h-6 w-6" />
        <a href="tel:+15551234567" className="text-white hover:text-accent transition-colors">
          +1 (555) 123-4567
        </a>
      </motion.div>
      <motion.div className="flex items-center space-x-4" variants={itemVariants}>
        <MapPin className="text-primary h-6 w-6" />
        <a href="#" className="text-white hover:text-accent transition-colors">
          123 Innovation Way, Tech City, USA
        </a>
      </motion.div>
    </motion.div>
  );
};

interface SocialMediaProps { }

const SocialMedia: React.FC<SocialMediaProps> = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex space-x-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        href="#"
        className="text-white hover:text-accent transition-colors"
        variants={itemVariants}
      >
        {/* Replace with actual social media icons if available in lucide-react */}
        <MessageCircle className="h-6 w-6" />
      </motion.a>
      <motion.a
        href="#"
        className="text-white hover:text-accent transition-colors"
        variants={itemVariants}
      >
        <User className="h-6 w-6" />
      </motion.a>
      <motion.a
        href="#"
        className="text-white hover:text-accent transition-colors"
        variants={itemVariants}
      >
        <Mail className="h-6 w-6" />
      </motion.a>
    </motion.div>
  );
};

interface PageProps { }

const Page: React.FC<PageProps> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:60px_60px] z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            className="text-[clamp(3rem, 8vw, 6rem)] font-heading font-bold text-center mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Contact IWorld
          </motion.h1>
          <motion.p
            className="text-[clamp(1rem, 2vw, 1.25rem)] text-secondary text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            We're here to help! Reach out to us using the form below or via the contact information provided.
          </motion.p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <motion.div
            className="order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            ref={ref}
          >
            <ContactForm />
          </motion.div>
          <motion.div
            className="order-1 md:order-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            ref={ref}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-[clamp(1.5rem, 3vw, 2rem)] font-semibold mb-6">Follow us on Social Media</h3>
          <SocialMedia />
        </div>
      </section>
    </div>
  );
};

export default Page;