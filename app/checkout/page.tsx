"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [payment, setPayment] = useState("cash");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (!name || !phone || !address || !city) {
      alert("Complete all required fields.");
      return;
    }

    router.push("/confirmation");
  };

  return (
    <main className="min-h-screen bg-black text-white px-8 md:px-20 py-24">
      <div className="max-w-7xl mx-auto">

        <p className="text-violet-400 uppercase tracking-[0.4em] mb-4">
          Final Step
        </p>

        <h1 className="text-6xl font-black mb-16">
          CHECKOUT
        </h1>

        <div className="grid md:grid-cols-2 gap-20">

          {/* Customer Info */}
          <div className="space-y-8">

            <div>
              <p className="uppercase tracking-widest text-sm mb-3">
                Full Name
              </p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 p-4"
              />
            </div>

            <div>
              <p className="uppercase tracking-widest text-sm mb-3">
                Phone Number
              </p>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 p-4"
              />
            </div>

            <div>
              <p className="uppercase tracking-widest text-sm mb-3">
                Delivery Address
              </p>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 p-4"
              />
            </div>

            <div>
              <p className="uppercase tracking-widest text-sm mb-3">
                City
              </p>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 p-4"
              />
            </div>

            <div>
              <p className="uppercase tracking-widest text-sm mb-3">
                Delivery Notes
              </p>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                className="w-full bg-zinc-950 border border-zinc-800 p-4"
              />
            </div>

            {/* Payment */}
            <div>
              <p className="uppercase tracking-widest text-sm mb-4">
                Payment Method
              </p>

              <div className="space-y-3">

                <button
                  onClick={() => setPayment("cash")}
                  className={`w-full text-left p-4 border transition ${
                    payment === "cash"
                      ? "border-violet-500 bg-zinc-900"
                      : "border-zinc-800"
                  }`}
                >
                  Cash On Delivery
                </button>

                <button
                  onClick={() => setPayment("online")}
                  className={`w-full text-left p-4 border transition ${
                    payment === "online"
                      ? "border-violet-500 bg-zinc-900"
                      : "border-zinc-800"
                  }`}
                >
                  Online Payment (Coming Soon)
                </button>

              </div>
            </div>

          </div>

          {/* Order Summary */}
          <div className="border border-zinc-800 p-10 h-fit">

            <h2 className="text-3xl font-bold mb-10">
              ORDER SUMMARY
            </h2>

            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="border-b border-zinc-800 pb-5"
                >
                  <h3 className="text-xl">
                    {item.name}
                  </h3>

                  <p className="text-violet-400 text-sm uppercase tracking-widest mt-2">
                    Size: {item.size}
                  </p>

                  <p className="text-zinc-400 mt-2">
                    Qty: {item.quantity}
                  </p>

                  <p className="mt-2">
                    EGP {item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-zinc-800">

              <h3 className="text-3xl font-bold mb-8">
                Total: EGP {total}
              </h3>

              <button
                onClick={handleCheckout}
                className="w-full py-5 bg-violet-600 hover:bg-violet-700 transition uppercase tracking-[0.3em] font-semibold"
              >
                Confirm Order
              </button>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}