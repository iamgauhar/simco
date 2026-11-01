"use client";

import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Users, ArrowRight, Award, SignalHigh } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">

            {/* 1. Hero Section */}
            <section className="relative px-6 pt-32 pb-20 overflow-hidden text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium border rounded-full text-cyan-400 border-cyan-500/30 bg-cyan-500/10">
                        <SignalHigh size={18} />
                        <span>Connecting the UAE</span>
                    </div>

                    <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
                        Your Trusted Partner for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Seamless Connectivity.
                        </span>
                    </h1>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        SIMco Solutions is a leading provider of mobile and internet services across Dubai and Abu Dhabi. As an official partner of du Telecommunications, we are committed to delivering innovative and reliable solutions to individuals and businesses.
                    </p>
                </motion.div>
            </section>

            {/* 2. Stats/Trust Bar */}
            <section className="border-y border-slate-800 bg-slate-900/50 py-12 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-2">50k+</h3>
                        <p className="text-cyan-400 font-medium tracking-wide uppercase text-sm">Happy Customers Monthly</p>
                    </motion.div>
                    <div className="hidden md:block w-px h-16 bg-slate-800" />
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-2">200+</h3>
                        <p className="text-cyan-400 font-medium tracking-wide uppercase text-sm">Service Kiosks</p>
                    </motion.div>
                    <div className="hidden md:block w-px h-16 bg-slate-800" />
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <div className="flex items-center justify-center mb-2 h-[48px] md:h-[60px]">
                            <ShieldCheck className="text-white w-12 h-12 md:w-14 md:h-14" />
                        </div>
                        <p className="text-cyan-400 font-medium tracking-wide uppercase text-sm">Official du Partner</p>
                    </motion.div>
                </div>
            </section>

            {/* 3. Mission & Vision */}
            <section className="px-6 py-24 bg-slate-950">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl border border-slate-800 bg-slate-900 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Target size={120} />
                        </div>
                        <div className="w-14 h-14 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center mb-6 relative z-10">
                            <Target size={28} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Our Mission</h2>
                        <p className="text-slate-400 leading-relaxed relative z-10">
                            At SIMco Solutions, our mission is to offer seamless communication and connectivity to our customers through reliable and innovative solutions. We aim to enhance the mobile experience by providing top-quality products and exceptional customer service. Our mission is to be a trusted partner in the digital transformation of businesses and individuals.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-3xl border border-slate-800 bg-slate-900 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Eye size={120} />
                        </div>
                        <div className="w-14 h-14 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center mb-6 relative z-10">
                            <Eye size={28} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h2>
                        <p className="text-slate-400 leading-relaxed relative z-10">
                            Our vision is to be the leading provider of mobile and internet solutions in the region, shaping the future of communication. We strive to create a connected world where individuals and businesses can seamlessly interact, stay informed, and be empowered through technology. SIMco Solutions is dedicated to delivering sustainable and customer-centric services that meet the evolving needs of our community.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 4. Leadership & CEO Message */}
            <section className="px-6 py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Leadership</h2>
                        <p className="text-slate-400">The team driving SIMco Group of Companies forward.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* CEO Message Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-8 bg-slate-950 border border-slate-800 p-10 rounded-3xl flex flex-col justify-center"
                        >
                            <Award className="text-blue-500 w-12 h-12 mb-6" />
                            <h3 className="text-2xl font-bold mb-6">CEO Message</h3>
                            <div className="space-y-4 text-slate-400 leading-relaxed mb-8 italic">
                                <p>
                                    "At SIMco Group of Companies, we are excited to bring you seamless connectivity through our prepaid SIM cards and home wireless internet services. As a trusted partner of du Telecommunications, we are committed to providing you with exceptional service and innovative solutions that keep you connected anytime, anywhere."
                                </p>
                                <p>
                                    "Our mission is to simplify your communication needs while delivering reliable and high-speed internet access to your home. We believe everyone deserves the power to stay connected, and we are here to make that a reality."
                                </p>
                                <p>
                                    "Thank you for choosing SIMco. Together, let's embrace the future of connectivity."
                                </p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Abdul Nasar Madiyan Kunnu</h4>
                                <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider">CEO, SIMco Group of Companies</p>
                            </div>
                        </motion.div>

                        {/* Ops Head Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-4 bg-slate-950 border border-slate-800 p-10 rounded-3xl flex flex-col"
                        >
                            <Users className="text-cyan-400 w-12 h-12 mb-6" />
                            <div className="flex-grow">
                                <h4 className="text-white font-bold text-xl mb-1">Sadiq Abdulla</h4>
                                <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-6">Sales & Operations Head</p>
                                <p className="text-slate-400 text-sm leading-relaxed italic">
                                    "I bring years of experience in managing both sales and operations to ensure our company is always optimizing its processes and driving growth. My role involves improving operational efficiency while leading teams to achieve remarkable results. At Simco, I focus on delivering impactful solutions that contribute to the continued success of our telecom business in the UAE."
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 5. Bottom CTA Overlay */}
            <section className="px-6 py-32 relative overflow-hidden bg-slate-950 flex flex-col items-center justify-center text-center">
                {/* Graph-like decorative background mimicking the original "graph.png" intent */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-900/20 to-transparent" />
                <svg className="absolute bottom-0 w-full h-auto text-slate-900/50" viewBox="0 0 1440 320" fill="currentColor">
                    <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>

                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Looking for Support?</h2>
                    <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
                        Whether you need assistance with your current plan or want to explore our enterprise solutions, our team is ready to help.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    >
                        Reach out to us today <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

        </div>
    );
}