"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Check, Mail, User, ArrowRight, BookOpen, Shield, MessageCircle, Phone, MapPin, Globe, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="border border-Border rounded-2xl overflow-hidden mb-4"
            layout
        >
            <motion.button
                className="w-full text-left py-4 px-6 flex items-center justify-between bg-Muted hover:bg-Muted/80 transition-colors duration-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-medium text-Foreground">{question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ArrowRight className="h-6 w-6 text-Foreground" />
                </motion.div>
            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="py-4 px-6 bg-Muted/50 text-Secondary"
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

interface TroubleshootingStepProps {
    step: number;
    description: string;
}

const TroubleshootingStep: React.FC<TroubleshootingStepProps> = ({ step, description }) => {
    return (
        <div className="flex items-start mb-4">
            <div className="w-8 h-8 rounded-full bg-Primary text-Foreground flex items-center justify-center mr-4">
                {step}
            </div>
            <p className="text-Secondary">{description}</p>
        </div>
    );
};

interface ContactFormProps { }

const ContactForm: React.FC<ContactFormProps> = () => {
    return (
        <form className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-Foreground">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-2xl border-Border bg-Muted text-Foreground shadow-sm focus:border-Primary focus:ring-Primary sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-Foreground">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-2xl border-Border bg-Muted text-Foreground shadow-sm focus:border-Primary focus:ring-Primary sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-Foreground">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-2xl border-Border bg-Muted text-Foreground shadow-sm focus:border-Primary focus:ring-Primary sm:text-sm"
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="inline-flex items-center rounded-2xl border border-transparent bg-Primary px-6 py-3 text-base font-medium text-Background shadow-sm hover:bg-Primary/80 focus:outline-none focus:ring-2 focus:ring-Primary focus:ring-offset-2"
                >
                    Send Message
                </button>
            </div>
        </form>
    );
};

interface WarrantyInfoProps { }

const WarrantyInfo: React.FC<WarrantyInfoProps> = () => {
    return (
        <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-Foreground">Warranty Information</h3>
            <p className="text-Secondary">
                IWorld products come with a one-year limited warranty against defects in materials and workmanship.
            </p>
            <ul className="list-disc list-inside text-Secondary">
                <li>Warranty covers defects in manufacturing.</li>
                <li>Warranty does not cover damage from misuse.</li>
                <li>To claim warranty, contact our support team.</li>
            </ul>
        </div>
    );
};

interface CommunityForumProps { }

const CommunityForum: React.FC<CommunityForumProps> = () => {
    return (
        <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-Foreground">Community Forum</h3>
            <p className="text-Secondary">
                Join our community forum to connect with other IWorld users, share tips, and get support.
            </p>
            <Link href="#" className="text-Primary hover:underline">
                Visit the Forum
            </Link>
        </div>
    );
};

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
    };

    return (
        <motion.section
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative py-24 md:py-32 bg-Background overflow-hidden"
        >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:60px_60px] z-0" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h1 className="text-[clamp(3rem, 8vw, 6rem)] font-Lexend text-Foreground font-bold leading-tight mb-6">
                    We're here to help.
                </h1>
                <p className="text-[clamp(1rem, 2vw, 1.25rem)] text-Secondary mb-8 max-w-3xl">
                    Find answers to common questions, troubleshoot issues, and get in touch with our support team.
                </p>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search for help..."
                        className="w-full md:w-96 rounded-2xl border-Border bg-Muted text-Foreground py-3 px-4 focus:outline-none focus:ring-2 focus:ring-Primary"
                    />
                    <button className="bg-Primary text-Background rounded-2xl py-3 px-6 hover:bg-Primary/80 transition-colors duration-300">
                        <Search className="h-5 w-5 inline-block mr-2" />Search
                    </button>
                </div>
            </div>
        </motion.section>
    );
};

interface FAQProps { }

const FAQ: React.FC<FAQProps> = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, staggerChildren: 0.1 } },
    };

    const faqData = [
        {
            question: "What is IWorld?",
            answer:
                "IWorld is a technology company focused on creating customizable and affordable solutions for modern living.",
        },
        {
            question: "How can I customize my IWorld product?",
            answer:
                "Our products are designed with customization in mind. You can personalize various aspects through our online configurator.",
        },
        {
            question: "What is your return policy?",
            answer:
                "We offer a 30-day return policy for all products. Please see our return policy page for more details.",
        },
    ];

    return (
        <motion.section
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="py-24 md:py-32 bg-Background"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-[clamp(2rem, 5vw, 3.5rem)] font-Lexend text-Foreground font-bold mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    {faqData.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

interface TroubleshootingProps { }

const Troubleshooting: React.FC<TroubleshootingProps> = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, staggerChildren: 0.1 } },
    };

    return (
        <motion.section
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="py-24 md:py-32 bg-Muted"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-[clamp(2rem, 5vw, 3.5rem)] font-Lexend text-Foreground font-bold mb-8">
                    Troubleshooting
                </h2>
                <div className="space-y-6">
                    <TroubleshootingStep step={1} description="Check the power connection and ensure the device is turned on." />
                    <TroubleshootingStep step={2} description="Restart the device and try again." />
                    <TroubleshootingStep step={3} description="Update to the latest software version." />
                    <TroubleshootingStep step={4} description="Contact our support team for further assistance." />
                </div>
            </div>
        </motion.section>
    );
};

interface ContactFormSectionProps { }

const ContactFormSection: React.FC<ContactFormSectionProps> = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
    };

    return (
        <motion.section
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="py-24 md:py-32 bg-Background"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-[clamp(2rem, 5vw, 3.5rem)] font-Lexend text-Foreground font-bold mb-8">
                    Contact Us
                </h2>
                <p className="text-Secondary mb-8">
                    Need further assistance? Fill out the form below to get in touch with our support team.
                </p>
                <ContactForm />
            </div>
        </motion.section>
    );
};

interface WarrantyInfoSectionProps { }

const WarrantyInfoSection: React.FC<WarrantyInfoSectionProps> = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
    };

    return (
        <motion.section
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="py-24 md:py-32 bg-Muted"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <WarrantyInfo />
            </div>
        </motion.section>
    );
};

interface CommunityForumSectionProps { }

const CommunityForumSection: React.FC<CommunityForumSectionProps> = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
    };

    return (
        <motion.section
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="py-24 md:py-32 bg-Background"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <CommunityForum />
            </div>
        </motion.section>
    );
};

interface PageProps { }

const Page: React.FC<PageProps> = () => {
    return (
        <div className="bg-Background min-h-screen">
            <Hero />
            <FAQ />
            <Troubleshooting />
            <ContactFormSection />
            <WarrantyInfoSection />
            <CommunityForumSection />
        </div>
    );
};

export default Page;