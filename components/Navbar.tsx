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
    <nav className="sticky top-0 z-50 border-b border-zinc-800 backdrop-blur-md bg-black/70">

      <div className="flex justify-between items-center px-4 md:px-10 py-5">

        <h1 className="text-lg md:text-2xl font-bold tracking-[0.25em] md:tracking-[0.35em]">
          MADCORE
        </h1>

        <div className="flex gap-4 md:gap-8 text-xs md:text-sm uppercase tracking-widest text-zinc-300">

          <a href="#home" className="hover:text-violet-400 transition">
            Home
          </a>

          <a href="#collection" className="hover:text-violet-400 transition">
            Shop
          </a>

          <Link
            href="/cart"
            className="hover:text-violet-400 transition font-semibold"
          >
            Cart ({totalItems})
          </Link>

        </div>

      </div>

    </nav>
  );
}