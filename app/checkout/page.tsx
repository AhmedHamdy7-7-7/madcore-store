"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-black text-white px-10 py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

        {/* Delivery Form */}
        <div>

          <p className="text-violet-400 uppercase tracking-[0.4em] mb-4">
            Delivery Details
          </p>

          <h1 className="text-5xl font-black mb-12">
            CHECKOUT
          </h1>

          <div className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-zinc-950 border border-zinc-800 p-4"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-zinc-950 border border-zinc-800 p-4"
            />

            <input
              type="text"
              placeholder="City"
              className="w-full bg-zinc-950 border border-zinc-800 p-4"
            />

            <input
              type="text"
              placeholder="Address"
              className="w-full bg-zinc-950 border border-zinc-800 p-4"
            />

            <select className="w-full bg-zinc-950 border border-zinc-800 p-4">
              <option>Cash On Delivery</option>
              <option>Online Payment</option>
            </select>

          </div>

        </div>

        {/* Order Summary */}
        <div>

          <h2 className="text-3xl font-bold mb-10">
            Order Summary
          </h2>

          <div className="space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="border border-zinc-800 p-6 flex justify-between"
              >
                <div>
                  <h3>{item.name}</h3>
                  <p className="text-zinc-400">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p>
                  EGP {item.price * item.quantity}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-10 border-t border-zinc-800 pt-8 flex justify-between text-2xl font-bold">
            <span>Total</span>
            <span>EGP {total}</span>
          </div>

        <Link
          href="/confirmation"
          className="block mt-12 w-full text-center py-5 border border-violet-500 hover:bg-violet-600 transition uppercase tracking-widest"
        >
            Place Order
        </Link>

        </div>

      </div>

    </main>
  );
}