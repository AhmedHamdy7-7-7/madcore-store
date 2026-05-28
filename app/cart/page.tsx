"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-black text-white px-10 py-20">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-6xl font-black mb-16">
          CART
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-32">

            <p className="text-violet-400 uppercase tracking-[0.4em] mb-6">
              THE VOID AWAITS
            </p>

            <h2 className="text-5xl font-black mb-8">
              NO CHAOS YET
            </h2>

            <p className="text-zinc-400 mb-12 max-w-xl mx-auto">
              Your cart is empty. Enter the collection and claim your next statement.
            </p>

            <Link
              href="/#collection"
              className="inline-block px-10 py-5 border border-violet-500 hover:bg-violet-600 transition uppercase tracking-widest"
            >
              Enter The Chaos
            </Link>

          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="border border-zinc-800 p-8 mb-6"
              >
                <div className="flex justify-between items-center">

                  <div>
                    <h2 className="text-2xl">
                      {item.name}
                    </h2>

                    <p className="text-zinc-400 mt-1">
                      EGP {item.price}
                    </p>

                    <p className="text-violet-400 text-sm mt-2 uppercase tracking-widest">
                      Size: {item.size}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id, item.size)
                      }
                      className="px-4 py-2 border border-zinc-700 hover:border-violet-500 transition"
                    >
                      -
                    </button>

                    <span className="text-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id, item.size)
                      }
                      className="px-4 py-2 border border-zinc-700 hover:border-violet-500 transition"
                    >
                      +
                    </button>

                    <button
                      onClick={() =>
                        removeFromCart(item.id, item.size)
                      }
                      className="text-red-400 ml-6 hover:text-red-300 transition"
                    >
                      Remove
                    </button>

                  </div>
                </div>
              </div>
            ))}

            <h2 className="text-3xl mt-10 font-bold">
              Total: EGP {total}
            </h2>

            <Link
              href="/checkout"
              className="block mt-10 w-full text-center py-5 border border-violet-500 hover:bg-violet-600 transition uppercase tracking-widest"
            >
              Proceed To Checkout
            </Link>
          </>
        )}

      </div>
    </main>
  );
}