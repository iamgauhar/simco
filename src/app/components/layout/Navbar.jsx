"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-slate-950/80 border-slate-800 backdrop-blur-md">
            <div className="flex items-center justify-between h-20 max-w-7xl px-6 mx-auto">

                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
                    {/* Horizontal (Rotated) SIM Card "S" Container */}
                    <div
                        className="relative flex items-center justify-center w-12 h-8 bg-gradient-to-br from-blue-600 to-blue-800 transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-700 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                        style={{
                            clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 37.5%)",
                            borderRadius: "4px"
                        }}
                    >
                        {/* Decorative Microchip Traces */}
                        <div
                            className="absolute inset-[3px] border border-blue-400/40"
                            style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 37.5%)" }}
                        />
                        <div className="absolute inset-y-2 left-3 right-3 border-x border-blue-400/20" />
                        <div className="absolute inset-x-3 top-2 bottom-2 border-y border-blue-400/20" />

                        <span className="relative z-10 text-xl font-black text-white">S</span>
                    </div>

                    <span className="text-2xl font-bold tracking-tight">
                        SIMco<span className="text-cyan-400">.</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <Link href="/home-wireless" className="hover:text-cyan-400 transition-colors">Home Wireless</Link>
                    <Link href="/prepaid" className="hover:text-cyan-400 transition-colors">Prepaid SIMs</Link>
                    <Link href="/b2b" className="hover:text-cyan-400 transition-colors">Business Solutions</Link>
                    <Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
                    <Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
                </nav>

                {/* Contact CTA & Mobile Menu Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden md:inline-flex px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
                    >
                        Contact Sales
                    </Link>

                    <button
                        onClick={toggleMenu}
                        className="p-2 md:hidden text-slate-300 hover:text-white transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 left-0 right-0 bg-slate-950 border-b border-slate-800 shadow-2xl md:hidden"
                    >
                        <nav className="flex flex-col px-6 py-6 space-y-6 text-slate-300 font-medium">
                            <Link href="/home-wireless" onClick={closeMenu} className="block text-lg hover:text-cyan-400 transition-colors">
                                Home Wireless
                            </Link>
                            <Link href="/prepaid" onClick={closeMenu} className="block text-lg hover:text-cyan-400 transition-colors">
                                Prepaid SIMs
                            </Link>
                            <Link href="/b2b" onClick={closeMenu} className="block text-lg hover:text-cyan-400 transition-colors">
                                Business Solutions
                            </Link>
                            <Link href="/pricing" onClick={closeMenu} className="block text-lg hover:text-cyan-400 transition-colors">
                                Pricing
                            </Link>
                            <Link href="/about" onClick={closeMenu} className="block text-lg hover:text-cyan-400 transition-colors">
                                About Us
                            </Link>
                            <div className="pt-4 border-t border-slate-800">
                                <Link href="/contact" onClick={closeMenu} className="flex items-center justify-center w-full py-4 text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">
                                    Contact Sales
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}