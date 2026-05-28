"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ManifestoPage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-28">

        <Image
          src="/brand/look1.jpg"
          alt="Manifesto"
          fill
          priority
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-black/75" />

        <motion.div
          animate={{
            opacity: [0.08, 0.18, 0.08],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[500px] h-[500px] bg-[#551993] blur-[140px] rounded-full"
        />

        <div className="relative z-20 max-w-5xl mx-auto px-8 text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#551993] uppercase tracking-[0.45em] mb-8"
          >
            Philosophy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-black uppercase mb-14"
          >
            THE MANIFESTO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-zinc-300 text-xl leading-relaxed"
          >
            Chaos is not randomness.
            It is discipline sharpened into identity.
          </motion.p>

        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-32 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black uppercase mb-8">
            BUILT IN
            <br />
            DISORDER
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Madcore is designed for those who move against the expected.
            Every silhouette is engineered through tension,
            rebellion, and controlled disruption.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative h-[600px]"
        >
          <Image
            src="/brand/ddd.jpg"
            alt="Disorder"
            fill
            className="object-cover"
          />
        </motion.div>

      </section>

      {/* SECTION 3 */}
      <section className="py-32 bg-zinc-950 text-center px-8">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black uppercase mb-10"
        >
          CHAOS
          <span className="text-[#551993] block">
            WITH INTENTION
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-zinc-400 text-xl leading-relaxed"
        >
          We reject conformity.
          We create tension through silhouette.
          We shape darkness into form.
        </motion.p>

      </section>

    </main>
  );
}