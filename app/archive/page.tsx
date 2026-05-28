"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/data/products";

export default function ArchivePage() {
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
          Transmission History
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black uppercase"
        >
          ARCHIVE
        </motion.h1>

      </section>

      {/* Drops */}
      <section className="max-w-7xl mx-auto px-8 pb-32 space-y-28">

        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-14 items-center"
          >

            {/* Image */}
            <div className="relative h-[70vh] overflow-hidden group bg-zinc-950">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="50vw"
                className="object-cover brightness-110 contrast-125"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-700" />
            </div>

            {/* Content */}
            <div>

              <p className="text-[#551993] uppercase tracking-[0.45em] text-sm mb-5">
                Drop 0{index + 1}
              </p>

              <h2 className="text-5xl md:text-6xl font-black uppercase mb-6">
                {product.name}
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              <p className="uppercase tracking-[0.35em] text-white">
                {product.status}
              </p>

            </div>

          </motion.div>
        ))}

      </section>

    </main>
  );
}