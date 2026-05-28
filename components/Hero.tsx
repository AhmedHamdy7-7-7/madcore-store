"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center pt-28 pb-12">

      {/* Background */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5 }}
        className="absolute inset-0"
      >
        <Image
          src="/brand/hero-main.jpg"
          alt="Madcore Hero"
          fill
          priority
          className="object-cover opacity-25"
        />
      </motion.div>

      {/* Noise */}
      <Image
        src="/brand/noise.jpg"
        alt="Noise"
        fill
        className="object-cover opacity-10 mix-blend-screen"
      />

      {/* Glow */}
      <motion.div
        animate={{
          opacity: [0.12, 0.25, 0.12],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] bg-[#551993] blur-[140px] rounded-full"
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/brand/logo-wordmark.png"
            alt="Madcore Logo"
            width={180}
            height={60}
            className="object-contain"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-[#551993] uppercase tracking-[0.45em] text-xs mb-5"
        >
          Cairo Born
        </motion.p>

        {/* Main Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="uppercase font-black leading-none"
        >
          {["CHAOS", "WITH", "INTENTION"].map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className={
                word === "WITH"
                  ? "text-[#551993] text-[1.4rem] md:text-[2rem] tracking-[0.9em] my-2"
                  : "text-[3.5rem] md:text-[7rem] text-white"
              }
            >
              {word}
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 max-w-2xl mx-auto text-zinc-300 text-base md:text-lg leading-relaxed"
        >
          Built for the ones who reject conformity.
          A dark expression of rebellion engineered through mystery,
          silhouette, and controlled disorder.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-10 flex flex-col md:flex-row justify-center gap-4"
        >
          <a
            href="#collection"
            className="px-8 py-4 border border-[#551993] hover:bg-[#551993] transition uppercase tracking-widest"
          >
            Enter The Chaos
          </a>

          <Link
            href="/manifesto"
            className="px-8 py-4 border border-white/20 hover:border-white transition uppercase tracking-widest"
          >
            The Manifesto
          </Link>
        </motion.div>

      </div>
    </section>
  );
}