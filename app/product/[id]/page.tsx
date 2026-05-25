"use client";

import Image from "next/image";
import { use } from "react";
import { useCart } from "@/context/CartContext";

const products = {
  "void-hoodie": {
    name: "VOID HOODIE",
    price: 1299,
    image: "/images/hoodie.jpg",
  },
  "chaos-tee": {
    name: "CHAOS TEE",
    price: 799,
    image: "/images/tee.jpg",
  },
  "obsidian-fit": {
    name: "OBSIDIAN FIT",
    price: 999,
    image: "/images/fit.jpg",
  },
};

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const { addToCart } = useCart();

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Product not found
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id,
      name: product.name,
      price: product.price,
    });
  };

  return (
    <main className="min-h-screen bg-black text-white px-10 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        <div className="relative h-[600px] overflow-hidden bg-zinc-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">

          <p className="text-violet-400 uppercase tracking-[0.4em] mb-4">
            Madcore Drop
          </p>

          <h1 className="text-6xl font-black mb-6">
            {product.name}
          </h1>

          <p className="text-zinc-400 mb-8">
            Engineered for rebellion.
          </p>

          <p className="text-3xl mb-10">
            EGP {product.price}
          </p>

          <button
            onClick={handleAddToCart}
            className="px-8 py-4 border border-violet-500 hover:bg-violet-600 transition uppercase tracking-widest"
          >
            Add To Cart
          </button>

        </div>

      </div>
    </main>
  );
}