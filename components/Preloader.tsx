"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >

          {/* Glow */}
          <motion.div
            animate={{
              opacity: [0.15, 0.3, 0.15],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute w-[400px] h-[400px] bg-[#551993] blur-[140px] rounded-full"
          />

          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{
              opacity: 1,
              letterSpacing: "0.5em",
            }}
            transition={{ duration: 1.5 }}
            className="relative text-white text-4xl md:text-7xl font-black uppercase"
          >
            MADCORE
          </motion.h1>

        </motion.div>
      )}
    </AnimatePresence>
  );
}