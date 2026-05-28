"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const looks = [
  "/brand/look1.jpg",
  "/brand/look2-new.jpg",
  "/brand/look3.jpg",
];

export default function LookbookPage() {
  return (
    <main className="bg-black text-white pt-28 min-h-screen">

      {/* Header */}
      <section className="text-center py-20 px-8">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#551993] uppercase tracking-[0.45em] mb-6"
        >
          Editorial
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black uppercase"
        >
          LOOKBOOK
        </motion.h1>

      </section>

      {/* Images */}
      <section className="max-w-7xl mx-auto px-8 pb-32 space-y-20">

        {looks.map((look, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[70vh] overflow-hidden group bg-zinc-950"
          >

            <Image
              src={look}
              alt={`Look ${index + 1}`}
              fill
              sizes="100vw"
              className="object-contain scale-100 group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-700" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute bottom-10 left-10"
            >
              <p className="text-[#551993] uppercase tracking-[0.4em] text-sm">
                Look 0{index + 1}
              </p>
            </motion.div>

          </motion.div>
        ))}

      </section>

    </main>
  );
}