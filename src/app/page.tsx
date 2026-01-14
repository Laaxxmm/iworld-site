"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Check, CheckCircle, Menu, X, ChevronRight, ArrowRight, ArrowLeft, ArrowUpRight, 
  User, Users, Mail, Phone, MapPin, Globe, Star, Zap, Activity, BarChart, PieChart, 
  Shield, Lock, Unlock, Eye, Search, Home, Settings, FileText, Image as ImageIcon, Play, Pause, 
  Calendar, Clock, CreditCard, DollarSign, ShoppingCart, Tag, Filter, Grid, List, 
  Layout, Box, Layers, Monitor, Smartphone, Briefcase, Award, PenTool, Book, 
  BookOpen, GraduationCap, Lightbulb, Heart, ThumbsUp, Smile, Frown, MessageCircle, 
  Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageSrc }) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={heroRef} className="relative h-[calc(100vh-80px)] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <Image
          src={imageSrc}
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-50"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          className="text-white text-[clamp(3rem,8vw,6rem)] font-lexend font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-secondary text-[clamp(1rem,2vw,1.25rem)] max-w-2xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="#" className="bg-primary text-black py-3 px-6 rounded-2xl font-bold hover:bg-accent transition-colors duration-300">
            Explore More
          </Link>
          <Link href="#" className="text-white border border-white py-3 px-6 rounded-2xl font-bold hover:bg-white hover:text-black transition-colors duration-300">
            Learn About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

interface ModularDesignProps {}

const ModularDesign: React.FC<ModularDesignProps> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-white text-[clamp(2rem,5vw,3.5rem)] font-lexend font-bold mb-4" variants={itemVariants}>
            Experience the Future of Modular Design
          </motion.h2>
          <motion.p className="text-secondary text-[clamp(1rem,2vw,1.25rem)] max-w-2xl mx-auto" variants={itemVariants}>
            Build your dream phone, one module at a time. Customize every aspect to fit your unique needs and style.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Example Modular Components */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              className="bg-black rounded-2xl shadow-2xl shadow-black/10 p-6"
              variants={itemVariants}
            >
              <Image
                src={`https://placehold.co/600x400/000000/FFFFFF/png?text=Module+${i}`}
                alt={`Module ${i}`}
                width={600}
                height={400}
                className="rounded-2xl mb-4"
                style={{ width: '100%', height: 'auto' }}
              />
              <h3 className="text-white text-[clamp(1.5rem,3vw,2rem)] font-lexend font-semibold mb-2">Module {i}</h3>
              <p className="text-secondary">Customize your phone with our wide range of modules.</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface AffordablePromiseProps {}

const AffordablePromise: React.FC<AffordablePromiseProps> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-left"
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 className="text-white text-[clamp(2rem,5vw,3.5rem)] font-lexend font-bold mb-4" variants={itemVariants}>
              Affordable Innovation for Everyone
            </motion.h2>
            <motion.p className="text-secondary text-[clamp(1rem,2vw,1.25rem)] mb-6" variants={itemVariants}>
              We believe that cutting-edge technology should be accessible to all. Our modular phone system allows you to upgrade components as needed, saving you money in the long run.
            </motion.p>
            <motion.ul className="list-disc pl-5 text-secondary" variants={itemVariants}>
              <li>Pay only for what you need</li>
              <li>Upgrade modules individually</li>
              <li>Reduce electronic waste</li>
            </motion.ul>
          </motion.div>

          <motion.div
            className="relative"
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Image
              src="https://placehold.co/1920x1080/000000/FFFFFF/png?text=Affordable"
              alt="Affordable Promise"
              width={1920}
              height={1080}
              className="rounded-2xl shadow-2xl shadow-black/10"
              style={{ width: '100%', height: 'auto' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface CustomizationShowcaseProps {}

const CustomizationShowcase: React.FC<CustomizationShowcaseProps> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-white text-[clamp(2rem,5vw,3.5rem)] font-lexend font-bold mb-4" variants={itemVariants}>
            Unleash Your Creativity with Endless Customization
          </motion.h2>
          <motion.p className="text-secondary text-[clamp(1rem,2vw,1.25rem)] max-w-2xl mx-auto" variants={itemVariants}>
            From colors to materials, design the phone that perfectly reflects your personality. Our intuitive customization tools make it easy to create a device that's uniquely yours.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Customization Options */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="bg-black rounded-2xl shadow-2xl shadow-black/10 p-6"
              variants={itemVariants}
            >
              <Image
                src={`https://placehold.co/600x400/000000/FFFFFF/png?text=Customization+${i}`}
                alt={`Customization ${i}`}
                width={600}
                height={400}
                className="rounded-2xl mb-4"
                style={{ width: '100%', height: 'auto' }}
              />
              <h3 className="text-white text-[clamp(1.5rem,3vw,2rem)] font-lexend font-semibold mb-2">Customization {i}</h3>
              <p className="text-secondary">Explore our wide range of customization options.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialsProps {}

const Testimonials: React.FC<TestimonialsProps> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref} className="py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-white text-[clamp(2rem,5vw,3.5rem)] font-lexend font-bold mb-4" variants={itemVariants}>
            What Our Customers Are Saying
          </motion.h2>
          <motion.p className="text-secondary text-[clamp(1rem,2vw,1.25rem)] max-w-2xl mx-auto" variants={itemVariants}>
            Don't just take our word for it. See what our satisfied customers have to say about their IWorld experience.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Testimonials */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-6"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <Image
                  src="https://placehold.co/200x200/000000/FFFFFF/png?text=User"
                  alt="User Avatar"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                  style={{ width: '60px', height: '60px' }}
                />
                <div>
                  <h4 className="text-white font-semibold">Customer {i}</h4>
                  <p className="text-secondary">Verified Buyer</p>
                </div>
              </div>
              <p className="text-white italic">"This is the best phone I've ever owned! The customization options are amazing."</p>
              <div className="flex items-center mt-4">
                {[1, 2, 3, 4, 5].map((j) => (
                  <Star key={j} color="#00FFCC" size={20} fill="#00FFCC" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Page: React.FC = () => {
  return (
    <div className="bg-black text-white font-inter">
      <Hero
        title="IWorld: Your Phone, Your Way"
        subtitle="Experience the future of customizable technology. Build your dream phone with our modular system."
        imageSrc="https://placehold.co/1920x1080/000000/FFFFFF/png?text=Hero"
      />
      <ModularDesign />
      <AffordablePromise />
      <CustomizationShowcase />
      <Testimonials />
    </div>
  );
};

export default Page;