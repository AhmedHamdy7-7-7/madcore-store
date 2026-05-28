"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  const linkClass = (path: string) =>
    pathname === path
      ? "text-[#551993]"
      : "text-white hover:text-[#551993] transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <Link
          href="/"
          className="text-xl font-black tracking-[0.35em] text-white"
        >
          MADCORE
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 uppercase text-sm tracking-widest">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/manifesto" className={linkClass("/manifesto")}>Manifesto</Link>
          <Link href="/lookbook" className={linkClass("/lookbook")}>Lookbook</Link>
          <Link href="/archive" className={linkClass("/archive")}>Archive</Link>
          <Link href="/cart" className={linkClass("/cart")}>
            Cart ({totalItems})
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-white/10"
          >
            <div className="flex flex-col px-8 py-6 gap-6 uppercase tracking-widest">
              <Link href="/" className={linkClass("/")} onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/manifesto" className={linkClass("/manifesto")} onClick={() => setMenuOpen(false)}>Manifesto</Link>
              <Link href="/lookbook" className={linkClass("/lookbook")} onClick={() => setMenuOpen(false)}>Lookbook</Link>
              <Link href="/archive" className={linkClass("/archive")} onClick={() => setMenuOpen(false)}>Archive</Link>
              <Link href="/cart" className={linkClass("/cart")} onClick={() => setMenuOpen(false)}>
                Cart ({totalItems})
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}