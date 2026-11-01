import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-8">
            <div className="max-w-7xl px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tight mb-4 inline-block">
                            SIMco<span className="text-cyan-400">.</span>
                        </Link>
                        <p className="text-slate-400 mb-6 max-w-sm">
                            Your trusted partner for seamless connectivity. Delivering next-generation mobile and internet services across the UAE.
                        </p>
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg">
                            <ShieldCheck className="text-cyan-400" size={18} />
                            <span>Authorized du Telecommunications Partner</span>
                        </div>
                    </div>

                    {/* Consumer Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Personal</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="/home-wireless" className="hover:text-cyan-400 transition-colors">5G Home Wireless</Link></li>
                            <li><Link href="/prepaid" className="hover:text-cyan-400 transition-colors">Prepaid Mobile Plans</Link></li>
                            <li><Link href="/coverage" className="hover:text-cyan-400 transition-colors">Network Coverage</Link></li>
                        </ul>
                    </div>

                    {/* Business Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Business</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="/b2b" className="hover:text-cyan-400 transition-colors">Enterprise Connectivity</Link></li>
                            <li><Link href="/b2b/digital-solutions" className="hover:text-cyan-400 transition-colors">IT Solutions</Link></li>
                            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Account Team</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} SIMco Group of Companies. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}