"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/data/products";

export default function Collection() {
  return (
    <section
      id="collection"
      className="relative z-10 px-8 py-24 bg-black"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[#551993] uppercase tracking-[0.4em] text-sm">
          Current Drop
        </p>

        <h2 className="text-5xl font-black text-white mt-4 uppercase">
          Featured Collection
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
          >
            <Link href={`/product/${product.id}`}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
                className="group bg-zinc-950 border border-zinc-800 hover:border-[#551993] transition-colors duration-300 overflow-hidden cursor-pointer"
              >

                {/* Image */}
                <div className="relative h-[460px] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-7">

                  <p className="text-[#551993] text-xs tracking-[0.35em] mb-3 uppercase">
                    {product.status}
                  </p>

                  <h3 className="text-xl font-bold text-white uppercase">
                    {product.name}
                  </h3>

                  <p className="text-zinc-400 mt-2">
                    {product.displayPrice}
                  </p>

                </div>

              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}