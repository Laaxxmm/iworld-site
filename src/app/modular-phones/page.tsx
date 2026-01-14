"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Check, CheckCircle, Menu, X, ChevronRight, ArrowRight, ArrowLeft, ArrowUpRight, User, Users, Mail, Phone, MapPin, Globe, Star, Zap, Activity, BarChart, PieChart, Shield, Lock, Unlock, Eye, Search, Home, Settings, FileText, Image as ImageIcon, Play, Pause, Calendar, Clock, CreditCard, DollarSign, ShoppingCart, Tag, Filter, Grid, List, Layout, Box, Layers, Monitor, Smartphone, Briefcase, Award, PenTool, Book, BookOpen, GraduationCap, Lightbulb, Heart, ThumbsUp, Smile, Frown, MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IntroductionProps {
  inView: boolean;
}

const Introduction: React.FC<IntroductionProps> = ({ inView }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="py-24 md:py-32 bg-muted rounded-2xl shadow-2xl shadow-black/10"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-white mb-6 text-center" variants={itemVariants}>
          Welcome to the Future of Mobile: IWorld Modular Phones
        </motion.h2>
        <motion.p className="text-lg text-secondary leading-relaxed mb-8 text-center" variants={itemVariants}>
          Experience unparalleled customization and sustainability with our revolutionary modular phone system. Tailor your device to fit your unique needs and preferences, and upgrade individual components as technology evolves.
        </motion.p>
        <motion.div className="flex justify-center" variants={itemVariants}>
          <Link href="#module-catalog" className="inline-flex items-center px-6 py-3 text-base font-medium text-black bg-accent rounded-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors duration-300">
            Explore Modules
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

interface ModuleCatalogProps {
  inView: boolean;
}

const ModuleCatalog: React.FC<ModuleCatalogProps> = ({ inView }) => {
  const modules = [
    {
      name: "Camera Module",
      description: "Capture stunning photos and videos with our high-resolution camera module.",
      image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Camera+Module",
    },
    {
      name: "Battery Module",
      description: "Extend your phone's battery life with our high-capacity battery module.",
      image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Battery+Module",
    },
    {
      name: "Processor Module",
      description: "Boost your phone's performance with our latest-generation processor module.",
      image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Processor+Module",
    },
    {
      name: "Display Module",
      description: "Experience vibrant visuals with our high-resolution display module.",
      image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Display+Module",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="module-catalog"
      className="py-24 md:py-32"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-white mb-8 text-center" variants={itemVariants}>
          Explore Our Module Catalog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <motion.div key={index} className="bg-muted rounded-2xl shadow-2xl shadow-black/10 overflow-hidden" variants={itemVariants}>
              <Image src={module.image} alt={module.name} width={600} height={400} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{module.name}</h3>
                <p className="text-secondary">{module.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

interface CompatibilityGuideProps {
  inView: boolean;
}

const CompatibilityGuide: React.FC<CompatibilityGuideProps> = ({ inView }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="compatibility-guide"
      className="py-24 md:py-32 bg-muted rounded-2xl shadow-2xl shadow-black/10"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-white mb-8 text-center" variants={itemVariants}>
          Compatibility Guide
        </motion.h2>
        <motion.p className="text-lg text-secondary leading-relaxed mb-6 text-center" variants={itemVariants}>
          Ensure seamless integration of modules with our comprehensive compatibility guide.
        </motion.p>
        <motion.ul className="list-disc list-inside text-secondary" variants={itemVariants}>
          <li>
            <strong className="text-white">Module Versions:</strong> All modules are designed to be forward and backward compatible within their respective series.
          </li>
          <li>
            <strong className="text-white">Device Compatibility:</strong> Refer to the module specifications for device compatibility information.
          </li>
          <li>
            <strong className="text-white">Software Updates:</strong> Keep your device software up-to-date for optimal module performance.
          </li>
        </motion.ul>
      </div>
    </motion.section>
  );
};

interface FutureModulesProps {
  inView: boolean;
}

const FutureModules: React.FC<FutureModulesProps> = ({ inView }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="future-modules"
      className="py-24 md:py-32"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-white mb-8 text-center" variants={itemVariants}>
          The Future of Modularity
        </motion.h2>
        <motion.p className="text-lg text-secondary leading-relaxed mb-6 text-center" variants={itemVariants}>
          Explore upcoming modules and innovations that will further enhance your IWorld modular phone experience.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-4" variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-2">AI Module</h3>
            <p className="text-secondary">
              Integrate AI-powered features directly into your phone with our upcoming AI module.
            </p>
          </motion.div>
          <motion.div className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-4" variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-2">Health Monitoring Module</h3>
            <p className="text-secondary">
              Track your health and wellness with our advanced health monitoring module.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

interface FAQProps {
  inView: boolean;
}

const FAQ: React.FC<FAQProps> = ({ inView }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const faqs = [
    {
      question: "What is a modular phone?",
      answer: "A modular phone is a device that allows users to customize and upgrade individual components, such as the camera, battery, or processor.",
    },
    {
      question: "How do I install a new module?",
      answer: "Installing a new module is easy. Simply follow the instructions in the user manual or watch our tutorial video.",
    },
    {
      question: "Are all modules compatible with all IWorld phones?",
      answer: "Please refer to the compatibility guide to ensure that the module you want to install is compatible with your phone model.",
    },
  ];

  return (
    <motion.section
      id="faq"
      className="py-24 md:py-32 bg-muted rounded-2xl shadow-2xl shadow-black/10"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-white mb-8 text-center" variants={itemVariants}>
          Frequently Asked Questions
        </motion.h2>
        {faqs.map((faq, index) => (
          <motion.div key={index} className="mb-6" variants={itemVariants}>
            <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
            <p className="text-secondary">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] bg-black overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080/000000/FFFFFF/png?text=Hero"
        alt="Hero Background"
        width={1920}
        height={1080}
        className="absolute inset-0 object-cover w-full h-full opacity-30"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(61,90,254,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(61,90,254,0.03)_1px,transparent_1px)] bg-[length:60px_60px]" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-white text-[clamp(3rem,8vw,6rem)] font-bold leading-tight mb-4">
            IWorld Modular Phones
          </h1>
          <p className="text-secondary text-[clamp(1rem,2vw,1.25rem)] mb-8">
            The future of customizable and sustainable mobile technology.
          </p>
          <Link href="#module-catalog" className="inline-flex items-center px-6 py-3 text-base font-medium text-black bg-accent rounded-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors duration-300">
            Explore Modules
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};


const Page: React.FC = () => {
  const introductionRef = useRef<HTMLElement>(null);
  const moduleCatalogRef = useRef<HTMLElement>(null);
  const compatibilityGuideRef = useRef<HTMLElement>(null);
  const futureModulesRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);

  const introductionInView = useInView(introductionRef, { margin: "-100px" });
  const moduleCatalogInView = useInView(moduleCatalogRef, { margin: "-100px" });
  const compatibilityGuideInView = useInView(compatibilityGuideRef, { margin: "-100px" });
  const futureModulesInView = useInView(futureModulesRef, { margin: "-100px" });
  const faqInView = useInView(faqRef, { margin: "-100px" });

  return (
    <div className="bg-black text-white font-inter">
      <Hero />
      <section ref={introductionRef}>
        <Introduction inView={introductionInView} />
      </section>
      <section ref={moduleCatalogRef}>
        <ModuleCatalog inView={moduleCatalogInView} />
      </section>
      <section ref={compatibilityGuideRef}>
        <CompatibilityGuide inView={compatibilityGuideInView} />
      </section>
      <section ref={futureModulesRef}>
        <FutureModules inView={futureModulesInView} />
      </section>
      <section ref={faqRef}>
        <FAQ inView={faqInView} />
      </section>
    </div>
  );
};

export default Page;