"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle2, Smartphone, Wifi, Building2,
    ArrowRight, ShieldCheck, HelpCircle, Plus, Minus
} from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
    const [activeTab, setActiveTab] = useState("prepaid");
    const [openFaq, setOpenFaq] = useState(null);

    // Centralized Pricing Data
    const pricingData = {
        prepaid: [
            { name: "Flexi Mini", price: "49", period: "/ 28 days", description: "Light browsing and essential messaging.", features: ["2GB 5G Data", "30 Flexi Minutes", "No Contract", "Free SIM Delivery"], popular: false },
            { name: "Flexi Standard", price: "99", period: "/ 28 days", description: "The ideal balance of data and calling.", features: ["10GB 5G Data", "100 Flexi Minutes", "No Contract", "Free SIM Delivery"], popular: true },
            { name: "Flexi Max", price: "199", period: "/ 28 days", description: "For heavy streamers and frequent callers.", features: ["Unlimited 5G Data", "500 Flexi Minutes", "No Contract", "Free SIM Delivery"], popular: false }
        ],
        wireless: [
            { name: "5G Home Standard", price: "199", period: "/ month", description: "Perfect for everyday streaming and remote work.", features: ["Unlimited 5G Data", "Free 5G Router included", "Connect 32 devices", "12-Month Contract"], popular: false },
            { name: "5G Home Premium", price: "299", period: "/ month", description: "Maximum bandwidth for 4K streaming and gaming.", features: ["Unlimited 5G Priority Data", "Premium Wi-Fi 6 Router", "Connect 64 devices", "12-Month Contract"], popular: true }
        ],
        b2b: [
            { name: "Business Starter", price: "99", period: "/ line", description: "Essential connectivity for small teams.", features: ["15GB 5G Data per line", "Unlimited Local Calls", "Shared Data Pool", "Dedicated Support"], popular: false },
            { name: "Enterprise Custom", price: "Custom", period: "Quote", description: "Tailored IT, bulk SIMs, and office Wi-Fi.", features: ["Unlimited 5G Data", "Custom Hardware Setup", "Private Secure APN", "24/7 Account Manager"], popular: true }
        ]
    };

    const faqs = [
        { q: "Are there any activation fees?", a: "No, we do not charge any activation fees for our prepaid SIMs or Home Wireless connections. You only pay for your selected plan." },
        { q: "What happens if I cancel my Home Wireless early?", a: "Our standard Home Wireless plans are on a 12-month contract, which includes a free 5G router. Early cancellation may incur a fee equivalent to the remaining cost of the router." },
        { q: "Do the prices include VAT?", a: "Yes, all prices listed for our consumer prepaid and Home Wireless plans are inclusive of the 5% UAE VAT." },
        { q: "Can I upgrade or downgrade my plan?", a: "Absolutely. Prepaid plans can be changed at any recharge cycle. Home Wireless customers can upgrade their speeds at any time without extending their contract." },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">

            {/* 1. Hero Section */}
            <section className="relative px-6 pt-32 pb-16 overflow-hidden text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none" />

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
                        Transparent Pricing. <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Zero Hidden Fees.
                        </span>
                    </h1>
                    <p className="mb-10 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Whether you need a flexible prepaid SIM for your phone, ultra-fast 5G for your home, or a custom enterprise setup, we have a plan designed for you.
                    </p>
                </motion.div>
            </section>

            {/* 2. Interactive Tab Selector */}
            <section className="px-6 relative z-10">
                <div className="max-w-xl mx-auto mb-16">
                    <div className="flex p-1 bg-slate-900 border border-slate-800 rounded-2xl relative">

                        {/* Animated Tab Background Indicator */}
                        <motion.div
                            className="absolute top-1 bottom-1 bg-blue-600 rounded-xl"
                            initial={false}
                            animate={{
                                left: activeTab === "prepaid" ? "0.25rem" : activeTab === "wireless" ? "33.33%" : "66.66%",
                                width: "calc(33.33% - 0.33rem)"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />

                        {[
                            { id: "prepaid", label: "Prepaid", icon: <Smartphone size={16} /> },
                            { id: "wireless", label: "Home 5G", icon: <Wifi size={16} /> },
                            { id: "b2b", label: "Business", icon: <Building2 size={16} /> }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-colors rounded-xl ${activeTab === tab.id ? "text-white" : "text-slate-400 hover:text-slate-300"
                                    }`}
                            >
                                {tab.icon}
                                <span className="hidden sm:inline">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Dynamic Pricing Cards */}
            <section className="px-6 pb-24 relative z-10">
                <div className="max-w-6xl mx-auto min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className={`grid grid-cols-1 gap-8 ${activeTab === "prepaid" ? "md:grid-cols-3" : "md:grid-cols-2 max-w-4xl mx-auto"
                                }`}
                        >
                            {pricingData[activeTab].map((plan, index) => (
                                <div
                                    key={plan.name}
                                    className={`relative flex flex-col p-8 rounded-3xl border ${plan.popular
                                            ? "bg-slate-900 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.2)] md:-translate-y-4"
                                            : "bg-slate-900/50 border-slate-800"
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                                            Recommended
                                        </div>
                                    )}

                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-slate-400 text-sm mb-6 h-10">{plan.description}</p>

                                    <div className="mb-8">
                                        <span className="text-4xl font-black text-white">
                                            {plan.price !== "Custom" && <span className="text-xl text-slate-400 font-medium mr-1">AED</span>}
                                            {plan.price}
                                        </span>
                                        <span className="text-slate-400 text-sm ml-2">{plan.period}</span>
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="text-cyan-400 shrink-0 mt-0.5" size={18} />
                                                <span className="text-slate-300 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-4 rounded-xl font-semibold transition-colors ${plan.popular
                                            ? "bg-blue-600 text-white hover:bg-blue-500"
                                            : "bg-slate-800 text-white hover:bg-slate-700"
                                        }`}>
                                        {activeTab === "b2b" ? "Contact Sales" : "Select Plan"}
                                    </button>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* 4. Trust Banner */}
            <section className="py-12 bg-slate-900 border-y border-slate-800">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-full flex items-center justify-center mb-4">
                            <ShieldCheck size={24} />
                        </div>
                        <h4 className="font-bold text-white mb-2">Secure Payments</h4>
                        <p className="text-sm text-slate-400">All transactions are encrypted and secured.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center mb-4">
                            <Building2 size={24} />
                        </div>
                        <h4 className="font-bold text-white mb-2">Authorized Partner</h4>
                        <p className="text-sm text-slate-400">Official plans directly from du Telecommunications.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-full flex items-center justify-center mb-4">
                            <HelpCircle size={24} />
                        </div>
                        <h4 className="font-bold text-white mb-2">24/7 Support</h4>
                        <p className="text-sm text-slate-400">Our UAE-based team is always here to help.</p>
                    </div>
                </div>
            </section>

            {/* 5. Pricing FAQ */}
            <section className="px-6 py-24 bg-slate-950">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Pricing Questions & Answers</h2>
                        <p className="text-slate-400">Everything you need to know about our billing and contracts.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-slate-800 rounded-xl bg-slate-900 overflow-hidden transition-all">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors"
                                >
                                    <span className="font-semibold text-lg pr-8">{faq.q}</span>
                                    {openFaq === index ? <Minus className="text-cyan-400 shrink-0" /> : <Plus className="text-slate-400 shrink-0" />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4 mt-2">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA */}
            <section className="px-6 py-20 bg-blue-600 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-90" />
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a custom solution?</h2>
                    <p className="text-blue-100 mb-8">Contact our corporate team for volume discounts, complex IT setups, and customized SLAs.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-blue-900 bg-white rounded-lg hover:bg-slate-100 transition-colors">
                        Contact Sales Team <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

        </div>
    );
}