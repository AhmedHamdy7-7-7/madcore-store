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
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="border border-zinc-800 p-8 mb-6"
              >
                <div className="flex justify-between items-center">

                  <div>
                    <h2 className="text-2xl">
                      {item.name}
                    </h2>

                    <p>
                      EGP {item.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="text-red-400 ml-6"
                    >
                      Remove
                    </button>

                  </div>
                </div>
              </div>
            ))}

            <h2 className="text-3xl mt-10">
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