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

interface OurStoryProps {
    inView: boolean;
}

const OurStory: React.FC<OurStoryProps> = ({ inView }) => {
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.section
            className="py-24 md:py-32 bg-muted rounded-2xl shadow-2xl shadow-black/10"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center font-heading">Our Story</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-lg text-secondary mb-4 font-body">
                            IWorld was founded with a simple vision: to create technology that adapts to you, not the other way around.
                            We believe in the power of personalization and the importance of making technology accessible to everyone.
                        </p>
                        <p className="text-lg text-secondary font-body">
                            From humble beginnings, we've grown into a team of passionate innovators dedicated to pushing the boundaries
                            of what's possible. Our journey has been fueled by a commitment to quality, sustainability, and customer
                            satisfaction.
                        </p>
                    </div>
                    <div>
                        <Image
                            src="https://placehold.co/600x400/000000/FFFFFF/png?text=Our+Story"
                            alt="Our Story"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-2xl shadow-black/10"
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

interface MissionVisionProps {
    inView: boolean;
}

const MissionVision: React.FC<MissionVisionProps> = ({ inView }) => {
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.2,
            },
        },
    };

    return (
        <motion.section
            className="py-24 md:py-32 bg-muted rounded-2xl shadow-2xl shadow-black/10"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center font-heading">Mission & Vision</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-accent mb-4 font-heading">Our Mission</h3>
                        <p className="text-lg text-secondary mb-4 font-body">
                            To empower individuals through customizable technology solutions that enhance their lives and contribute
                            to a sustainable future.
                        </p>
                        <h3 className="text-2xl font-semibold text-accent mb-4 font-heading">Our Vision</h3>
                        <p className="text-lg text-secondary font-body">
                            To be the global leader in personalized technology, recognized for our innovation, customer-centric approach,
                            and commitment to environmental responsibility.
                        </p>
                    </div>
                    <div>
                        <Image
                            src="https://placehold.co/600x400/000000/FFFFFF/png?text=Mission+Vision"
                            alt="Mission & Vision"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-2xl shadow-black/10"
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

interface TeamMember {
    name: string;
    title: string;
    image: string;
}

interface TeamProps {
    inView: boolean;
}

const Team: React.FC<TeamProps> = ({ inView }) => {
    const teamMembers: TeamMember[] = [
        { name: "John Doe", title: "CEO", image: "https://placehold.co/200x200/000000/FFFFFF/png?text=John+Doe" },
        { name: "Jane Smith", title: "CTO", image: "https://placehold.co/200x200/000000/FFFFFF/png?text=Jane+Smith" },
        { name: "Mike Johnson", title: "Head of Design", image: "https://placehold.co/200x200/000000/FFFFFF/png?text=Mike+Johnson" },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.4,
                staggerChildren: 0.2,
            },
        },
    };

    const memberVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            className="py-24 md:py-32 bg-muted rounded-2xl shadow-2xl shadow-black/10"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center font-heading">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            variants={memberVariants}
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={200}
                                height={200}
                                className="rounded-full mx-auto mb-4 shadow-lg"
                            />
                            <h3 className="text-xl font-semibold text-white font-heading">{member.name}</h3>
                            <p className="text-secondary font-body">{member.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

interface ValuesProps {
    inView: boolean;
}

const Values: React.FC<ValuesProps> = ({ inView }) => {
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.6,
            },
        },
    };

    return (
        <motion.section
            className="py-24 md:py-32 bg-muted rounded-2xl shadow-2xl shadow-black/10"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center font-heading">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <Zap className="h-10 w-10 text-accent mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white font-heading">Innovation</h3>
                        <p className="text-secondary font-body">We constantly seek new and creative solutions to meet the evolving needs of our customers.</p>
                    </div>
                    <div className="text-center">
                        <Heart className="h-10 w-10 text-accent mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white font-heading">Customer Focus</h3>
                        <p className="text-secondary font-body">We prioritize our customers and strive to exceed their expectations in every interaction.</p>
                    </div>
                    <div className="text-center">
                        <Globe className="h-10 w-10 text-accent mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white font-heading">Sustainability</h3>
                        <p className="text-secondary font-body">We are committed to minimizing our environmental impact and promoting sustainable practices.</p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

interface CareersProps {
    inView: boolean;
}

const Careers: React.FC<CareersProps> = ({ inView }) => {
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.8,
            },
        },
    };

    return (
        <motion.section
            className="py-24 md:py-32 bg-muted rounded-2xl shadow-2xl shadow-black/10"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center font-heading">Join Our Team</h2>
                <p className="text-lg text-secondary mb-4 text-center font-body">
                    Interested in a career at IWorld? We're always looking for talented and passionate individuals to join our team.
                </p>
                <div className="text-center">
                    <Link href="/careers" className="bg-primary text-black py-3 px-6 rounded-full font-semibold hover:bg-accent transition-colors duration-300 font-body">
                        View Open Positions
                    </Link>
                </div>
            </div>
        </motion.section>
    );
};

const Page: React.FC = () => {
    const careersRef = useRef<HTMLDivElement>(null);
    const ourStoryRef = useRef<HTMLDivElement>(null);
    const missionVisionRef = useRef<HTMLDivElement>(null);
    const teamRef = useRef<HTMLDivElement>(null);
    const valuesRef = useRef<HTMLDivElement>(null);
    
    const ourStoryInView = useInView(ourStoryRef, { amount: 0.2 });
    const missionVisionInView = useInView(missionVisionRef, { amount: 0.2 });
    const teamInView = useInView(teamRef, { amount: 0.2 });
    const valuesInView = useInView(valuesRef, { amount: 0.2 });
    const careersInView = useInView(careersRef, { amount: 0.2 });

    return (
        <div className="bg-black text-white">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[length:60px_60px] z-0" />

                <section className="py-24 md:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold font-heading">About IWorld</h1>
                        <p className="text-secondary text-[clamp(1rem,2vw,1.25rem)] mt-4 font-body">
                            Learn more about our company history, mission, vision, and team.
                        </p>
                    </div>
                </section>

                <div ref={ourStoryRef}>
                    <OurStory inView={ourStoryInView} />
                </div>

                <div ref={missionVisionRef}>
                    <MissionVision inView={missionVisionInView} />
                </div>

                <div ref={teamRef}>
                    <Team inView={teamInView} />
                </div>

                <div ref={valuesRef}>
                    <Values inView={valuesInView} />
                </div>

                <div ref={careersRef}>
                    <Careers inView={careersInView} />
                </div>

                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <p className="text-secondary font-body">© {new Date().getFullYear()} IWorld. All rights reserved.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Page;
