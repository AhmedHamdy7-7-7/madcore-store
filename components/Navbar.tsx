"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-6 border-b border-zinc-800 backdrop-blur-md bg-black/70">

      <h1 className="text-2xl font-bold tracking-[0.35em]">
        MADCORE
      </h1>

      <div className="flex gap-8 text-sm uppercase tracking-widest text-zinc-300">

        <a href="#home" className="hover:text-violet-400 transition">
          Home
        </a>

        <a href="#collection" className="hover:text-violet-400 transition">
          Collection
        </a>

        <a href="#about" className="hover:text-violet-400 transition">
          About
        </a>

        <Link
          href="/cart"
          className="hover:text-violet-400 transition"
        >
          Cart ({totalItems})
        </Link>

      </div>
    </nav>
  );
}