"use client";

import { motion } from "framer-motion";
import {
    Building2, Network, Server, PhoneCall, ShieldCheck,
    ArrowRight, Users, Headset, BarChart3, Zap
} from "lucide-react";
import Link from "next/link";

export default function B2BPage() {
    const services = [
        {
            title: "Corporate Mobile Plans",
            description: "Tailored postpaid and prepaid bulk SIM solutions with customizable data pooling, international roaming, and cost-control features for your entire workforce.",
            icon: <Users size={32} />,
        },
        {
            title: "Enterprise Office Wi-Fi",
            description: "High-speed 5G internet and Wi-Fi 6 infrastructure designed for modern offices. Ensure zero downtime with scalable bandwidth that grows with your team.",
            icon: <Network size={32} />,
        },
        {
            title: "Dedicated Account Management",
            description: "Skip the standard customer service queues. Get a dedicated account manager who understands your business infrastructure and provides priority IT support.",
            icon: <Headset size={32} />,
        },
        {
            title: "Custom IT & Telecom Setups",
            description: "From setting up secure VPN networks across multiple branches to deploying bulk hardware, our technical team handles the heavy lifting of your digital transformation.",
            icon: <Server size={32} />,
        },
        {
            title: "Advanced Data Security",
            description: "Protect your corporate communications with enterprise-grade encryption and secure private APNs, ensuring your company's data remains uncompromised.",
            icon: <ShieldCheck size={32} />,
        },
        {
            title: "Real-Time Analytics",
            description: "Monitor data consumption, manage active lines, and optimize your telecom budget through comprehensive billing dashboards and usage reports.",
            icon: <BarChart3 size={32} />,
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">

            {/* 1. Hero Section */}
            <section className="relative px-6 pt-32 pb-24 overflow-hidden">
                <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium border rounded-full text-blue-400 border-blue-500/30 bg-blue-500/10">
                            <Building2 size={18} />
                            <span>Enterprise Connectivity Partner</span>
                        </div>

                        <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl leading-tight">
                            Scale Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                                Business Network.
                            </span>
                        </h1>
                        <p className="mb-10 text-lg text-slate-400 leading-relaxed max-w-xl">
                            Empowering UAE businesses with tailored corporate mobile plans, robust office internet, and scalable telecom solutions powered by du. We handle your connectivity so you can focus on growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                Contact Corporate Sales <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Abstract Tech Visual */}
                        <div className="relative w-full aspect-square max-h-[500px] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between p-8">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

                            <div className="relative z-10 flex justify-between items-start">
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                                    <Network className="text-cyan-400 w-8 h-8" />
                                </div>
                                <div className="text-right">
                                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Network Uptime</p>
                                    <p className="text-3xl font-black text-white">99.9%</p>
                                </div>
                            </div>

                            <div className="relative z-10 bg-slate-950/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800 mt-auto">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-slate-300 font-medium">Active Corporate Lines</span>
                                    <span className="text-cyan-400 font-bold flex items-center gap-1"><Zap size={14} /> Live</span>
                                </div>
                                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "85%" }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Partner Trust Banner */}
            <section className="py-12 bg-slate-900 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Trusted by 50,000+ Companies</h3>
                        <p className="text-slate-400">From emerging startups to established enterprises across Dubai and Abu Dhabi.</p>
                    </div>
                    <div className="flex gap-4">
                        {/* Visual indicators of trust */}
                        <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 px-6 py-3 rounded-lg">
                            <ShieldCheck className="text-blue-500" size={24} />
                            <span className="font-semibold text-sm">Authorized du Partner</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core B2B Services Grid */}
            <section className="px-6 py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive Business Solutions</h2>
                        <p className="text-slate-400 text-lg">We architect bespoke connectivity plans that align with your company's operational requirements and budget.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group"
                            >
                                <div className="w-16 h-16 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center mb-6 text-blue-500 group-hover:text-cyan-400 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. The SIMco Advantage (Why Us for B2B) */}
            <section className="px-6 py-24 bg-slate-900 border-y border-slate-800">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 text-center">
                                <h4 className="text-4xl font-black text-cyan-400 mb-2">24/7</h4>
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Priority Support</p>
                            </div>
                            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 text-center translate-y-8">
                                <h4 className="text-4xl font-black text-blue-500 mb-2">100%</h4>
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Customizable</p>
                            </div>
                            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 text-center -translate-y-4">
                                <h4 className="text-4xl font-black text-indigo-400 mb-2">0</h4>
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Hidden Fees</p>
                            </div>
                            <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 text-center translate-y-4">
                                <h4 className="text-4xl font-black text-cyan-400 mb-2">Fast</h4>
                                <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Deployment</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Enterprises Choose SIMco</h2>
                        <p className="text-slate-400 mb-8 text-lg">
                            Procuring telecom services for a business shouldn't involve endless bureaucracy. We streamline the entire process, acting as an extension of your IT department.
                        </p>
                        <ul className="space-y-6">
                            {[
                                { title: "Single Point of Contact", desc: "You will never be bounced between departments. Your dedicated account manager handles billing, technical support, and upgrades." },
                                { title: "Volume Discounts", desc: "Enjoy aggressive pricing models and corporate rates when activating bulk postpaid or prepaid lines." },
                                { title: "Seamless Migration", desc: "Switching from another provider? Our technical team ensures zero downtime during the porting and hardware setup process." }
                            ].map((point, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 bg-blue-600/20 p-2 rounded-lg text-blue-500">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg">{point.title}</h4>
                                        <p className="text-slate-400 mt-1">{point.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. Lead Generation / CTA Banner */}
            <section className="px-6 py-24 relative overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950" />

                <div className="max-w-4xl mx-auto relative z-10 bg-slate-900 border border-slate-800 rounded-3xl p-10 md:p-16 text-center">
                    <PhoneCall className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to upgrade your corporate network?</h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                        Schedule a free consultation with our enterprise team. We will analyze your current infrastructure and design a tailored proposal that cuts costs and boosts performance.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-slate-900 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors">
                            Request a Proposal <ArrowRight size={18} />
                        </Link>
                        <a href="mailto:info@SIMcogroup.ae" className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors">
                            Email Sales Team
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}