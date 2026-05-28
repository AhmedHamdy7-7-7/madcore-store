"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

export default function ConfirmationPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-8 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative text-center max-w-4xl z-10"
      >

        <p className="text-violet-400 uppercase tracking-[0.5em] mb-8">
          Order Confirmed
        </p>

        <h1 className="text-7xl md:text-8xl font-black mb-8 leading-none">
          WELCOME
          <br />
          TO CHAOS
        </h1>

        <p className="text-zinc-400 text-xl leading-relaxed mb-14 max-w-2xl mx-auto">
          Your order has entered the system.
          Madcore will contact you shortly to complete delivery.
        </p>

        <Link
          href="/"
          className="inline-block px-10 py-5 border border-violet-500 hover:bg-violet-600 transition uppercase tracking-[0.35em]"
        >
          Continue Shopping
        </Link>

      </motion.div>
    </main>
  );
}