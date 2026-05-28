"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-zinc-900 px-8 md:px-20 py-28 overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.08),transparent_65%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto"
      >

        <p className="text-violet-400 uppercase tracking-[0.45em] text-sm mb-6">
          CONNECT
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none text-white">
          ENTER
          <br />
          THE NETWORK
        </h2>

        <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed mb-16">
          Madcore exists at the intersection of chaos, identity, and dark expression.
          Join the movement and stay connected to future drops.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mb-20">

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest">
              Social
            </h3>

            <div className="space-y-3 text-zinc-400">
              <Link href="#">Instagram</Link>
              <br />
              <Link href="#">TikTok</Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest">
              Contact
            </h3>

            <div className="space-y-3 text-zinc-400">
              <p>hello@madcore.store</p>
              <p>Cairo, Egypt</p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest">
              Newsletter
            </h3>

            <div className="flex">
              <input
                placeholder="Your Email"
                className="flex-1 bg-zinc-950 border border-zinc-800 p-4 text-white"
              />
              <button className="px-6 bg-violet-600 hover:bg-violet-700 transition uppercase tracking-widest">
                Join
              </button>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between text-zinc-600 text-sm border-t border-zinc-900 pt-8">
          <p>© 2026 MADCORE</p>
          <p>Built In Cairo</p>
        </div>

      </motion.div>
    </footer>
  );
}