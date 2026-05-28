"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import CartToast from "@/components/CartToast";
import { products } from "@/data/products";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Product not found
      </main>
    );
  }

  const gallery = [
    product.image,
    product.image,
    product.image,
  ];

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        size,
      },
      qty
    );

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white px-8 md:px-20 py-28">
      <div className="grid md:grid-cols-2 gap-20 items-center">

        {/* Gallery */}
        <div>
          <div className="relative h-[650px] rounded-2xl overflow-hidden border border-zinc-900 mb-6">
            <Image
              src={gallery[selectedImage]}
              alt={product.name}
              fill
              sizes="100vw"
              className="object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div className="flex gap-4">
            {gallery.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-24 w-24 border ${
                  selectedImage === index
                    ? "border-violet-500"
                    : "border-zinc-800"
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <p className="text-violet-400 uppercase tracking-[0.35em] mb-4">
            Limited Drop
          </p>

          <h1 className="text-6xl font-black mb-6">
            {product.name}
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          <p className="text-3xl font-bold mb-10">
            EGP {product.price}
          </p>

          {/* Size */}
          <div className="mb-8">
            <p className="mb-4 uppercase tracking-widest text-sm">
              Size
            </p>

            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-5 py-3 border transition ${
                    size === s
                      ? "border-violet-500 bg-violet-600"
                      : "border-zinc-700 hover:border-violet-500"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-10">
            <p className="mb-4 uppercase tracking-widest text-sm">
              Quantity
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="px-4 py-2 border border-zinc-700"
              >
                -
              </button>

              <span className="text-xl">{qty}</span>

              <button
                onClick={() => setQty(qty + 1)}
                className="px-4 py-2 border border-zinc-700"
              >
                +
              </button>
            </div>
          </div>

          <p className="text-green-400 mb-8">
            ● In Stock
          </p>

          <button
            onClick={handleAddToCart}
            className="w-full py-5 bg-violet-600 hover:bg-violet-700 transition uppercase tracking-[0.3em] font-semibold"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <CartToast show={showToast} />
    </main>
  );
}