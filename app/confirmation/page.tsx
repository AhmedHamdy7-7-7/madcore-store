"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ConfirmationPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-10">
      <div className="text-center max-w-3xl">
        <p className="text-violet-400 uppercase tracking-[0.4em] mb-6">
          Order Confirmed
        </p>

        <h1 className="text-7xl font-black mb-8 tracking-tight">
          WELCOME TO
          <br />
          CHAOS
        </h1>

        <p className="text-zinc-400 text-lg leading-relaxed mb-12">
          Your order has been placed successfully.
          Madcore will contact you shortly.
        </p>

        <Link
          href="/"
          className="px-8 py-4 border border-violet-500 hover:bg-violet-600 transition uppercase tracking-widest"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}