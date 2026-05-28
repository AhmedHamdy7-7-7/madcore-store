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
    <main className="min-h-screen bg-black text-white px-6 md:px-10 py-20">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-black mb-16">
          CART
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-violet-400 uppercase tracking-[0.4em] mb-6">
              THE VOID AWAITS
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-8">
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
                className="border border-zinc-800 p-6 mb-6"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

                  <div>
                    <h2 className="text-xl md:text-2xl">
                      {item.name}
                    </h2>

                    <p className="text-zinc-400 mt-1">
                      EGP {item.price}
                    </p>

                    <p className="text-violet-400 text-sm mt-2 uppercase tracking-widest">
                      Size: {item.size}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id, item.size)
                      }
                      className="px-4 py-2 border border-zinc-700"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id, item.size)
                      }
                      className="px-4 py-2 border border-zinc-700"
                    >
                      +
                    </button>

                    <button
                      onClick={() =>
                        removeFromCart(item.id, item.size)
                      }
                      className="w-full md:w-auto text-red-400 hover:text-red-300 transition text-left md:text-center"
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