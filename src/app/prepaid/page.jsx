"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    CheckCircle2, Smartphone, Globe, Zap, ArrowRight, ShieldCheck,
    CreditCard, Package, Headset, Plus, Minus, Check
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import brandOne from "../../../public/asset/8.jpg"
import brandTwo from "../../../public/asset/10.jpg"
import brandThree from "../../../public/asset/12.jpg"
import brandFour from "../../../public/asset/13.jpg"
import brandFive from "../../../public/asset/16.jpg"
import expertiesOne from "../../../public/asset/compressed_Neon 5G Network Hub.jpg"
import expertiesTwo from "../../../public/asset/compressed_Neon 5G Connectivity Network.jpg"

export default function PrepaidPage() {
    const [openFaq, setOpenFaq] = useState(null);

    // Pricing Data
    const plans = [
        { name: "Flexi Mini", price: "49", period: "/ 28 days", description: "Light browsing and essential messaging.", features: ["2GB 5G Data", "30 Flexi Minutes", "No Contract"], popular: false },
        { name: "Flexi Standard", price: "99", period: "/ 28 days", description: "The ideal balance of data and calling.", features: ["10GB 5G Data", "100 Flexi Minutes", "No Contract"], popular: true },
        { name: "Flexi Max", price: "199", period: "/ 28 days", description: "For heavy streamers and frequent callers.", features: ["Unlimited 5G Data", "500 Flexi Minutes", "No Contract"], popular: false }
    ];

    // FAQ Data from Original HTML
    const faqs = [
        { q: "What types of SIM cards do you offer?", a: "We offer prepaid SIM cards for both local and international use, with various plans tailored to suit your personal, travel, or business needs." },
        { q: "How can I activate my SIM card?", a: "Activation is quick and easy. Simply visit any of our kiosks or follow the instructions provided with your SIM card to activate it instantly." },
        { q: "Can I change my prepaid plan?", a: "Yes, you can change your prepaid plan at any time by visiting one of our kiosks or contacting our customer support team for assistance." },
        { q: "How do I top up my prepaid SIM card?", a: "You can easily top up your prepaid SIM card through our kiosks, online services, or partner retail locations across Dubai and Abu Dhabi." },
        { q: "Is there customer support available for troubleshooting?", a: "Yes, we provide dedicated customer support to assist with any issues related to your prepaid SIM card, plans, or Wireless Internet connections." },
        { q: "Can I use my SIM card internationally?", a: "Yes, our prepaid SIM cards support international roaming, so you can stay connected while traveling abroad with affordable rates." }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">

            {/* 1. Hero Section */}
            {/* <section className="relative px-6 pt-32 pb-16 overflow-hidden text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
                        Prepaid <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            SIMcards.
                        </span>
                    </h1>
                    <p className="mb-10 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Stay connected effortlessly with SIMco Mobile Phone Trading. Our prepaid SIM cards provide reliable, hassle-free communication for your on-the-go needs. With a variety of plans tailored to fit your lifestyle, SIMco ensures seamless connectivity and unparalleled convenience, all powered by DU.
                    </p>
                    <a href="#plans" className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                        Explore Now <ArrowRight size={18} />
                    </a>
                </motion.div>
            </section> */}

            <section className="relative px-6 pt-32 pb-28 overflow-hidden text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium border rounded-full text-cyan-400 border-cyan-500/30 bg-cyan-500/10">
                        <Smartphone size={18} />
                        <span>Instant Activation Available</span>
                    </div>

                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl leading-[110%]">
                        Prepaid Freedom on the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            UAE's Fastest Network.
                        </span>
                    </h1>
                    <p className="mb-10 text-lg text-slate-400">
                        Get your du prepaid SIM today. Enjoy blazing-fast 5G speeds, flexible international minutes, and zero hidden fees.
                    </p>
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
                    {/* Duplicated for smooth infinite scroll */}
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-8 items-center">
                            <span>Prepaid SIMcards</span> <span>•</span>
                            <span>DU Channel Partner</span> <span>•</span>
                            <span>Seamless Connectivity</span> <span>•</span>
                            <span>Affordable Prices</span> <span>•</span>
                            <span>24/7 Customer Service</span> <span>•</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* 3. Our Offerings (Grid from Original HTML) */}
            <section className="px-6 py-24 bg-slate-950">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h4 className="text-cyan-400 font-semibold mb-2 tracking-wider uppercase text-sm">Our Offerings</h4>
                        <h2 className="text-3xl md:text-4xl font-bold">Prepaid SIMcards, Plans, and More.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Local & International Coverage", desc: "Stay connected globally with our prepaid SIM cards, providing coverage both locally and internationally at competitive rates.", icon: <Globe size={28} /> },
                            { title: "Customizable Data Plans", desc: "Choose a prepaid SIM card with data plans that can be tailored to your personal usage, whether for light browsing or heavy streaming.", icon: <Smartphone size={28} /> },
                            { title: "Seamless Connectivity", desc: "Travel without worries. Our prepaid SIM cards offer seamless roaming features for your international trips, making communication effortless.", icon: <Zap size={28} /> },
                            { title: "Recharge Anywhere", desc: "Keep your SIM card ready for use with simple recharge options available at various kiosks, online, and through our app.", icon: <CreditCard size={28} /> },
                            { title: "Prepaid Bundles", desc: "Maximize your savings with our prepaid bundles that combine talk time, data, and texts in one convenient package.", icon: <Package size={28} /> },
                            { title: "Dedicated Customer Support", desc: "Our expert customer support is available to assist you with any queries, ensuring your prepaid SIM card works flawlessly.", icon: <Headset size={28} /> }
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors">
                                <div className="w-14 h-14 bg-blue-600/10 text-cyan-400 rounded-xl flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Trust/Logo Section */}
            <section className="py-16 bg-slate-900 border-y border-slate-800 text-center">
                <p className="text-slate-300 text-lg mb-8">More than <strong className="text-white">50k+ companies</strong> trust us worldwide</p>
                <div className="flex justify-center flex-wrap gap-8 opacity-80 px-6">
                    {/* Placeholder for Logos - In production, map your real logo images here */}
                    <div className="w-32 bg-slate-800 rounded overflow-hidden" ><Image width={128} height={"auto"} src={brandOne} alt="Logo" /></div>
                    <div className="w-32 bg-slate-800 rounded overflow-hidden" ><Image width={128} height={48} src={brandTwo} alt="Logo" /></div>
                    <div className="w-32 bg-slate-800 rounded overflow-hidden" ><Image width={128} height={48} src={brandThree} alt="Logo" /></div>
                    <div className="w-32 bg-slate-800 rounded overflow-hidden" ><Image width={128} height={48} src={brandFour} alt="Logo" /></div>
                    <div className="w-32 bg-slate-800 rounded overflow-hidden hidden md:block"><Image width={128} height={48} src={brandFive} alt="Logo" /></div>
                </div>
            </section>

            {/* 5. Expertise & Why Choose Us (Alternating Layouts) */}
            <section className="px-6 py-24 overflow-hidden">
                <div className="max-w-6xl mx-auto space-y-32">

                    {/* Expertise */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight">
                                Discover Our Expertise in <br className="hidden md:block" />
                                <span className="text-cyan-400">Reliable Prepaid SIM Cards</span> <br className="hidden md:block" />
                                for Seamless Connectivity
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Prepaid SIM Solutions", desc: "Effortlessly stay connected with our reliable prepaid SIM cards." },
                                    { title: "Flexible Plans", desc: "Choose prepaid plans designed to fit your communication needs and budget." },
                                    { title: "Instant activation", desc: "Enjoy quick and hassle-free activation of your prepaid SIM cards." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 w-10 h-10 shrink-0 bg-blue-600/20 text-blue-500 rounded-lg flex items-center justify-center"><Check size={20} /></div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                            <p className="text-slate-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur-2xl opacity-20" />
                            <div className="relative bg-slate-900 border border-slate-800 overflow-hidden rounded-3xl h-[500px] flex items-center justify-center">
                                <Image className="w-full h-full object-cover" height={"auto"} width={"auto"} src={expertiesTwo} alt="Exp" />
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-gradient-to-l from-blue-600 to-cyan-400 rounded-3xl blur-2xl opacity-20" />
                            <div className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl h-[500px] flex items-center justify-center">
                                <Image className="w-full h-full object-cover" height={"auto"} width={"auto"} src={expertiesOne} alt="Exp" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Us?</h2>
                            <ul className="space-y-6">
                                {[
                                    "Trusted channel partner of du with over 200 kiosks across Dubai.",
                                    "Wide range of prepaid SIM cards and flexible plans to suit every need.",
                                    "Quick and hassle-free activation for all du services.",
                                    "Exceptional customer service with a focus on satisfaction.",
                                    "Dedicated team to assist with all your connectivity requirements."
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                                        <ShieldCheck className="text-cyan-400 shrink-0 mt-0.5" size={24} />
                                        <span className="text-slate-300">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Pricing (Essential for Telecom) */}
            <section id="plans" className="px-6 py-24 bg-slate-900 border-y border-slate-800">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Select Your Plan</h2>
                        <p className="text-slate-400">Instantly activate the perfect data and calling bundle.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {plans.map((plan, index) => (
                            <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`relative flex flex-col p-8 rounded-3xl border ${plan.popular ? "bg-slate-950 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.2)] md:-translate-y-4" : "bg-slate-950/50 border-slate-800"}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">Most Popular</div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-slate-400 text-sm mb-6 h-10">{plan.description}</p>
                                <div className="mb-8">
                                    <span className="text-4xl font-black text-white">AED {plan.price}</span>
                                    <span className="text-slate-400 text-sm ml-2">{plan.period}</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-cyan-400 shrink-0" size={20} />
                                            <span className="text-slate-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-4 rounded-xl font-semibold transition-colors ${plan.popular ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-slate-800 text-white hover:bg-slate-700"}`}>
                                    Buy Now
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <section className="px-6 py-24 bg-slate-950">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-400">Everything you need to know about our prepaid services.</p>
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

        </div>
    );
}