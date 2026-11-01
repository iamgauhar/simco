"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Smartphone,
  Briefcase,
  Zap,
  ShieldCheck,
  MapPin,
  Clock,
  Headset,
  Activity,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">
      {/* 1. Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden text-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium border rounded-full text-cyan-400 border-cyan-500/30 bg-cyan-500/10">
            <ShieldCheck size={18} />
            <span>Authorized du Telecommunications Partner</span>
          </div>

          <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
            Next-Gen Connectivity <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Without the Friction.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mb-10 text-lg text-slate-400 md:text-xl">
            Experience ultra-fast 5G home wireless and mobile solutions. Get
            connected instantly across Dubai and Abu Dhabi with plug-and-play
            simplicity.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/home-wireless"
              className="flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] w-full sm:w-auto"
            >
              <Wifi size={20} />
              View Home Wireless
            </Link>
            <Link
              href="/b2b"
              className="flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold transition-all border rounded-lg text-slate-200 border-slate-700 bg-slate-900 hover:bg-slate-800 w-full sm:w-auto"
            >
              <Briefcase size={20} />
              Business Solutions
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. Core Services Grid */}
      <section className="px-6 py-24 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Choose Your Connection
            </h2>
            <p className="mt-4 text-slate-400">
              Tailored plans running on the UAE's most reliable network.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "5G Home Wireless",
                description:
                  "Unlimited data with a free plug-and-play 5G router. No technician required.",
                icon: <Wifi className="text-cyan-400" size={32} />,
                link: "/home-wireless",
              },
              {
                title: "Prepaid Mobile",
                description:
                  "Flexible data and calling plans with instant activation and maximum coverage.",
                icon: <Smartphone className="text-cyan-400" size={32} />,
                link: "/prepaid",
              },
              {
                title: "Enterprise Setups",
                description:
                  "Scalable IT and telecom solutions designed for UAE businesses.",
                icon: <Zap className="text-cyan-400" size={32} />,
                link: "/b2b",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 transition-colors border rounded-2xl border-slate-800 bg-slate-900 hover:border-slate-700"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-slate-800/50">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-slate-400">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center font-medium text-cyan-400 hover:text-cyan-300"
                >
                  Learn more &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The "Telecom Vibe" Network Section */}
      <section className="px-6 py-24 relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powered by the UAE's Premier 5G Network
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                As an authorized du partner, SIMco delivers uncompromised speed
                and reliability. Whether you are streaming in 4K at home or
                running a multi-office enterprise, our infrastructure ensures
                you never drop a packet.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-cyan-500/20 p-2 rounded-lg text-cyan-400">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">
                      Ultra-Low Latency
                    </h4>
                    <p className="text-slate-400 text-sm mt-1">
                      Built for seamless gaming, smooth video calls, and instant
                      cloud sync.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-cyan-500/20 p-2 rounded-lg text-cyan-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">
                      Nationwide Coverage
                    </h4>
                    <p className="text-slate-400 text-sm mt-1">
                      Robust signal strength across all emirates, from urban
                      centers to remote facilities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visual Speed Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full" />
              <h3 className="text-slate-400 font-medium mb-8 uppercase tracking-wider text-sm">
                Network Performance
              </h3>
              <div className="flex items-end gap-2 text-white mb-2">
                <span className="text-6xl font-black tabular-nums tracking-tighter">
                  5G
                </span>
                <span className="text-2xl font-bold text-cyan-400 pb-1">
                  Ready
                </span>
              </div>
              <p className="text-slate-400 mb-8">
                Gigabit-capable speeds delivered directly to your home or office
                router.
              </p>

              {/* Animated Progress Bar */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300">Download Consistency</span>
                    <span className="text-cyan-400 font-mono">99.9%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "99%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose SIMco */}
      <section className="px-6 py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We eliminate the typical frustrations of setting up telecom
              services by prioritizing speed and transparent communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto bg-blue-600/10 text-blue-500 rounded-full flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Same-Day Processing
              </h4>
              <p className="text-slate-400 text-sm">
                Order your 5G router or SIM and get connected instantly without
                week-long waiting periods.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto bg-blue-600/10 text-blue-500 rounded-full flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h4 className="font-semibold text-lg mb-2">Plug & Play Setup</h4>
              <p className="text-slate-400 text-sm">
                No drills, no cables, no technicians. Just power on your device
                and instantly connect to the network.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto bg-blue-600/10 text-blue-500 rounded-full flex items-center justify-center mb-4">
                <Headset size={24} />
              </div>
              <h4 className="font-semibold text-lg mb-2">
                Dedicated Local Support
              </h4>
              <p className="text-slate-400 text-sm">
                Skip the infinite phone trees. Get direct assistance from our
                UAE-based customer success team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Banner */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600" />
        {/* Subtle gradient overlay to make it pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-90" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to upgrade your connection?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of residents and businesses who have switched to a
            faster, more reliable network experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/home-wireless"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-blue-900 bg-white rounded-lg hover:bg-slate-100 transition-colors"
            >
              Get 5G Home Wireless <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
