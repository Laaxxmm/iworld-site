"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Check, Mail, User, Users, Globe, Award, Lightbulb, DollarSign, Activity, PieChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CommunityEngagementProps {
  inView: boolean;
}

const CommunityEngagement: React.FC<CommunityEngagementProps> = ({ inView }) => {
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
    <motion.div
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-8 md:p-12"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h3 className="text-2xl font-lexend text-white mb-6">Community Engagement</h3>
      <ul className="space-y-4">
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <Check className="mr-2 text-primary" size={20} /> Active participation in local events
        </motion.li>
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <Check className="mr-2 text-primary" size={20} /> Supporting local schools and educational programs
        </motion.li>
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <Check className="mr-2 text-primary" size={20} /> Volunteering initiatives for community development
        </motion.li>
      </ul>
    </motion.div>
  );
};

interface EconomicContributionProps {
  inView: boolean;
}

const EconomicContribution: React.FC<EconomicContributionProps> = ({ inView }) => {
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
    <motion.div
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-8 md:p-12"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h3 className="text-2xl font-lexend text-white mb-6">Economic Contribution</h3>
      <ul className="space-y-4">
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <DollarSign className="mr-2 text-primary" size={20} /> Significant investment in the local Bangalore economy
        </motion.li>
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <Users className="mr-2 text-primary" size={20} /> Creation of over 500 jobs in the past year
        </motion.li>
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <Activity className="mr-2 text-primary" size={20} /> Supporting local businesses and suppliers
        </motion.li>
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <PieChart className="mr-2 text-primary" size={20} /> Contributing to the overall economic growth of the region
        </motion.li>
      </ul>
    </motion.div>
  );
};

interface SustainabilityProps {
  inView: boolean;
}

const Sustainability: React.FC<SustainabilityProps> = ({ inView }) => {
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
    <motion.div
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-8 md:p-12"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h3 className="text-2xl font-lexend text-white mb-6">Sustainability Initiatives</h3>
      <ul className="space-y-4">
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <Globe className="mr-2 text-primary" size={20} /> Reducing carbon footprint through renewable energy sources
        </motion.li>
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <Check className="mr-2 text-primary" size={20} /> Implementing eco-friendly packaging and waste reduction programs
        </motion.li>
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <Check className="mr-2 text-primary" size={20} /> Promoting sustainable practices within the organization
        </motion.li>
      </ul>
    </motion.div>
  );
};

interface EthicalSourcingProps {
  inView: boolean;
}

const EthicalSourcing: React.FC<EthicalSourcingProps> = ({ inView }) => {
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
    <motion.div
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-8 md:p-12"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h3 className="text-2xl font-lexend text-white mb-6">Ethical Sourcing</h3>
      <ul className="space-y-4">
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <Check className="mr-2 text-primary" size={20} /> Ensuring fair labor practices throughout the supply chain
        </motion.li>
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <Check className="mr-2 text-primary" size={20} /> Sourcing materials from responsible and sustainable suppliers
        </motion.li>
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <Check className="mr-2 text-primary" size={20} /> Promoting ethical business practices within the industry
        </motion.li>
      </ul>
    </motion.div>
  );
};

interface FutureInitiativesProps {
  inView: boolean;
}

const FutureInitiatives: React.FC<FutureInitiativesProps> = ({ inView }) => {
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
    <motion.div
      className="bg-muted rounded-2xl shadow-2xl shadow-black/10 p-8 md:p-12"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h3 className="text-2xl font-lexend text-white mb-6">Future Initiatives</h3>
      <ul className="space-y-4">
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <Award className="mr-2 text-primary" size={20} /> Investing in research and development for sustainable technologies
        </motion.li>
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <Lightbulb className="mr-2 text-primary" size={20} /> Expanding community outreach programs and initiatives
        </motion.li>
        <motion.li className="flex items-center text-secondary" variants={itemVariants}>
          <Check className="mr-2 text-primary" size={20} /> Continuing to prioritize ethical and sustainable business practices
        </motion.li>
      </ul>
    </motion.div>
  );
};

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080/000000/FFFFFF/png?text=Hero"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-white font-lexend text-[clamp(3rem,8vw,6rem)] leading-tight mb-4">
          IWorld: Making a Difference
        </h1>
        <p className="text-secondary text-[clamp(1rem,2vw,1.25rem)]">
          Learn about our commitment to the Bangalore community and our sustainability initiatives.
        </p>
      </div>
    </section>
  );
};

const Page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-black text-white min-h-screen">
      <HeroSection />

      <section className="py-24 md:py-32">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
            <CommunityEngagement inView={isInView} />
            <EconomicContribution inView={isInView} />
            <Sustainability inView={isInView} />
            <EthicalSourcing inView={isInView} />
            <FutureInitiatives inView={isInView} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;