"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Wifi, Zap, CheckCircle2, ShieldCheck, ArrowRight,
    MonitorPlay, Truck, Power, MapPin, Mail, Phone,
    Plus, Minus
} from "lucide-react";
import Link from "next/link";

export default function HomeWirelessPage() {
    const [isAnnual, setIsAnnual] = useState(true);
    const [openFaq, setOpenFaq] = useState(null);

    const plans = [
        {
            name: "5G Home Standard",
            description: "Perfect for everyday streaming, browsing, and remote work.",
            monthlyPrice: "299",
            annualPrice: "199",
            features: [
                "Unlimited 5G Data",
                "Free 5G Plug & Play Router",
                "Connect up to 32 devices",
                "Free standard delivery"
            ],
            popular: false,
        },
        {
            name: "5G Home Premium",
            description: "Maximum bandwidth for 4K streaming, gaming, and smart homes.",
            monthlyPrice: "399",
            annualPrice: "299",
            features: [
                "Unlimited 5G Data (Priority Speed)",
                "Free Premium Wi-Fi 6 Router",
                "Connect up to 64 devices",
                "Free OSN+ Streaming Subscription"
            ],
            popular: true,
        }
    ];

    // Corrected FAQs (Replaced the "Homeless" text with actual Home Wireless context)
    const faqs = [
        { q: "What is 5G Home Wireless Internet by SIMco?", a: "Home Wireless Internet by SIMco offers affordable and reliable high-speed internet powered by du's 5G network, tailored to provide seamless connectivity for your home without the need for fiber cables." },
        { q: "Are there any hidden charges for the Home Wireless plan?", a: "No, there are no hidden charges. Our Home Wireless plans are designed to be transparent. The router is included free of charge on 12-month contracts." },
        { q: "What is included with the Home Wireless Internet plan?", a: "The plan provides unlimited 5G data and a plug-and-play Wi-Fi router designed to handle 4K streaming, remote work, and smart home devices." },
        { q: "How long does delivery take?", a: "We offer same-day delivery across the UAE. Once you place your order, our team will dispatch your pre-configured router immediately." },
        { q: "How can I get support if I have issues with my router?", a: "You can contact our dedicated 24/7 support team through the contact information provided on our website, or visit any of our 200+ partner kiosks across Dubai." }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">

            {/* 1. Hero Section */}
            <section className="relative px-6 pt-32 pb-20 overflow-hidden text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none" />

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium border rounded-full text-cyan-400 border-cyan-500/30 bg-cyan-500/10">
                        <Wifi size={18} />
                        <span>Plug & Play • No Technician Required</span>
                    </div>

                    <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
                        Home Wireless <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Internet.
                        </span>
                    </h1>
                    <p className="mb-10 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Experience seamless internet with SIMco. Our home wireless connections offer reliable, high-speed connectivity tailored for your everyday needs. Perfect for streaming, browsing, and working from home on du's trusted network.
                    </p>
                    <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                        Explore Plans <ArrowRight size={18} />
                    </a>
                </motion.div>
            </section>

            {/* 2. Scrolling Marquee (From original HTML Slider) */}
            <div className="w-full overflow-hidden bg-slate-900 border-y border-slate-800 py-4 flex whitespace-nowrap relative">
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex gap-8 items-center text-cyan-500/50 font-bold uppercase tracking-widest"
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-8 items-center">
                            <span>Home Wireless</span> <span>•</span>
                            <span>DU Channel Partner</span> <span>•</span>
                            <span>Seamless Connectivity</span> <span>•</span>
                            <span>Affordable Prices</span> <span>•</span>
                            <span>24/7 Customer Service</span> <span>•</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* 3. Interactive Pricing Section */}
            <section id="pricing" className="px-6 py-24 relative z-10 bg-slate-950">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Select Your Speed</h2>
                        <p className="text-slate-400">Choose the perfect bandwidth for your household.</p>
                    </div>

                    <div className="flex justify-center mb-12">
                        <div className="relative flex items-center p-1 bg-slate-900 border border-slate-800 rounded-full">
                            <button onClick={() => setIsAnnual(false)} className={`relative w-40 py-3 text-sm font-semibold transition-colors z-10 ${!isAnnual ? "text-white" : "text-slate-400 hover:text-slate-300"}`}>
                                No Contract
                            </button>
                            <button onClick={() => setIsAnnual(true)} className={`relative w-40 py-3 text-sm font-semibold transition-colors z-10 ${isAnnual ? "text-white" : "text-slate-400 hover:text-slate-300"}`}>
                                12-Month Contract
                            </button>
                            <motion.div
                                className="absolute left-1 top-1 bottom-1 w-40 bg-blue-600 rounded-full"
                                animate={{ x: isAnnual ? 160 : 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`relative flex flex-col p-8 rounded-3xl border ${plan.popular ? "bg-slate-900 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.2)] md:-translate-y-4" : "bg-slate-900/50 border-slate-800"}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">Recommended</div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-slate-400 text-sm mb-6 h-10">{plan.description}</p>

                                <div className="mb-2 flex items-baseline">
                                    <span className="text-xl text-slate-400 mr-2 font-medium">AED</span>
                                    <div className="relative overflow-hidden h-12 flex items-center">
                                        <AnimatePresence mode="popLayout">
                                            <motion.span key={isAnnual ? plan.annualPrice : plan.monthlyPrice} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.2 }} className="text-5xl font-black text-white">
                                                {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                            </motion.span>
                                        </AnimatePresence>
                                    </div>
                                    <span className="text-slate-400 text-sm ml-2">/ month</span>
                                </div>

                                <p className="text-cyan-400 text-sm font-medium h-6 mb-8">
                                    {isAnnual ? "Includes free 5G router worth AED 1,000" : "Router fee may apply"}
                                </p>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-cyan-400 shrink-0" size={20} />
                                            <span className="text-slate-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-4 rounded-xl font-semibold transition-colors ${plan.popular ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-slate-800 text-white hover:bg-slate-700"}`}>
                                    Select Plan
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Us (Integrated directly from original HTML points) */}
            <section className="px-6 py-24 bg-slate-900 border-y border-slate-800">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute inset-0 bg-gradient-to-l from-blue-600 to-cyan-400 rounded-3xl blur-2xl opacity-20" />
                        <div className="relative bg-slate-950 border border-slate-800 rounded-3xl h-[400px] flex flex-col items-center justify-center p-8 text-center">
                            <MonitorPlay className="w-20 h-20 text-cyan-400 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-2">Next-Gen Wi-Fi 6</h3>
                            <p className="text-slate-400">Experience broader coverage and ability to connect up to 64 devices simultaneously without lag.</p>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Us?</h2>
                        <ul className="space-y-6">
                            {[
                                { title: "Fast to Activate", desc: "Get online instantly without waiting for installation appointments.", icon: <Zap /> },
                                { title: "No Wires Involved", desc: "Skip the drilling and cable management. Pure wireless 5G connectivity.", icon: <Wifi /> },
                                { title: "Plug & Play", desc: "Immediate activation by just plugging in and turning on the router.", icon: <Power /> },
                                { title: "Same Day Delivery", desc: "Order today, get connected today across the UAE.", icon: <Truck /> },
                                { title: "Trusted Network", desc: "Official channel partner of du with over 200 kiosks across Dubai.", icon: <ShieldCheck /> }
                            ].map((point, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-10 h-10 shrink-0 bg-blue-600/20 text-cyan-400 rounded-lg flex items-center justify-center">
                                        {point.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white">{point.title}</h4>
                                        <p className="text-slate-400 text-sm">{point.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 5. Corrected FAQ Section */}
            <section className="px-6 py-24 bg-slate-950">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-400">Everything you need to know about setting up your 5G home connection.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-slate-800 rounded-xl bg-slate-900 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    aria-expanded={openFaq === index}
                                    aria-controls={`faq-answer-${index}`}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors"
                                >
                                    <span className="font-semibold text-lg">{faq.q}</span>
                                    {openFaq === index ? <Minus className="text-cyan-400 shrink-0" /> : <Plus className="text-slate-400 shrink-0" />}
                                </button>
                                <AnimatePresence initial={false}>
                                    {openFaq === index && (
                                        <motion.div
                                            id={`faq-answer-${index}`}
                                            key="answer"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-slate-400 leading-relaxed">
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

            {/* 6. Contact Banner (From HTML Source) */}
            <section className="px-6 py-20 border-t border-slate-800 bg-slate-900">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between">
                    <div className="lg:w-1/2">
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-500 uppercase bg-blue-500/10 rounded-full">
                            Get In Touch
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s get in touch with us</h2>
                        <p className="text-slate-400 mb-8 max-w-md">
                            If you would like to work with us, upgrade your plan, or just want to get in touch, we’d love to hear from you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300">
                                <MapPin className="text-cyan-400 shrink-0" size={20} />
                                <span className="text-sm">Suite 2047, 20th Floor, Damas Towers (Burj 2000), Sharjah</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <Mail className="text-cyan-400 shrink-0" size={20} />
                                <span className="text-sm">info@SIMcogroup.ae</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <Phone className="text-cyan-400 shrink-0" size={20} />
                                <span className="text-sm">+971-(6575)-(0777)</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <form className="bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <input
                                type="tel"
                                placeholder="Your Contact Number"
                                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            />
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                            ></textarea>
                            <button
                                type="button"
                                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors"
                            >
                                Let's Talk
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
}