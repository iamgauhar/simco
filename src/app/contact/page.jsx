"use client";

import { motion } from "framer-motion";
import {
    MapPin, Mail, Phone, Clock, Send, MessageSquare,
    Briefcase, Headset,
    ArrowRight
} from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">

            {/* 1. Hero Section */}
            <section className="relative px-6 pt-32 pb-16 overflow-hidden text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium border rounded-full text-cyan-400 border-cyan-500/30 bg-cyan-500/10">
                        <MessageSquare size={18} />
                        <span>We are here to help</span>
                    </div>

                    <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Touch.</span>
                    </h1>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Whether you are looking to upgrade your home wireless plan, need a custom enterprise connectivity solution, or require technical support, our UAE-based team is ready to assist.
                    </p>
                </motion.div>
            </section>

            {/* 2. Quick Contact Cards */}
            <section className="px-6 pb-20 relative z-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Visit Our Office",
                            detail: "Suite 2047, 20th Floor, Damas Towers (Burj 2000), Sharjah",
                            icon: <MapPin size={28} />,
                            color: "text-blue-500",
                            bg: "bg-blue-500/10"
                        },
                        {
                            title: "Call Sales & Support",
                            detail: "+971 (6575) 0777",
                            subdetail: "Available Sat-Thu, 9 AM - 6 PM",
                            icon: <Phone size={28} />,
                            color: "text-cyan-400",
                            bg: "bg-cyan-400/10"
                        },
                        {
                            title: "Email Us",
                            detail: "info@SIMcogroup.ae",
                            subdetail: "We aim to reply within 24 hours",
                            icon: <Mail size={28} />,
                            color: "text-indigo-400",
                            bg: "bg-indigo-400/10"
                        }
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-slate-700 transition-colors"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${card.bg} ${card.color}`}>
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                            <p className="text-white font-medium mb-1">{card.detail}</p>
                            {card.subdetail && <p className="text-slate-500 text-sm">{card.subdetail}</p>}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. Main Form & Routing Section */}
            <section className="px-6 py-20 bg-slate-900 border-t border-slate-800">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Form Side */}
                    <div className="lg:col-span-7">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
                            <p className="text-slate-400">Fill out the form below and the appropriate department will get back to you shortly.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+971 50 123 4567"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Inquiry Type</label>
                                    <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer">
                                        <option>5G Home Wireless Setup</option>
                                        <option>Prepaid SIM Activation</option>
                                        <option>Corporate / B2B Solutions</option>
                                        <option>Technical Support</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="How can we help you today?"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Department Routing Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <Clock className="text-cyan-400" size={24} />
                                Business Hours
                            </h3>
                            <ul className="space-y-4 text-slate-300">
                                <li className="flex justify-between items-center pb-4 border-b border-slate-800/50">
                                    <span>Monday - Thursday</span>
                                    <span className="font-medium text-white">9:00 AM - 6:00 PM</span>
                                </li>
                                <li className="flex justify-between items-center pb-4 border-b border-slate-800/50">
                                    <span>Friday</span>
                                    <span className="font-medium text-white">9:00 AM - 1:00 PM</span>
                                </li>
                                <li className="flex justify-between items-center pb-4 border-b border-slate-800/50">
                                    <span>Saturday</span>
                                    <span className="font-medium text-white">10:00 AM - 4:00 PM</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>Sunday</span>
                                    <span className="font-medium text-slate-500">Closed</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <Briefcase size={80} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white relative z-10">Enterprise Solutions</h3>
                            <p className="text-slate-400 text-sm mb-6 relative z-10">Looking for custom IT setups or bulk SIM activations for your company?</p>
                            <button className="relative z-10 inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                                Contact Account Manager <ArrowRight size={16} />
                            </button>
                        </div>

                        <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <Headset size={80} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white relative z-10">Existing Customers</h3>
                            <p className="text-slate-400 text-sm mb-6 relative z-10">Experiencing an outage or need help configuring your 5G router?</p>
                            <button className="relative z-10 inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                                Visit Support Center <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}