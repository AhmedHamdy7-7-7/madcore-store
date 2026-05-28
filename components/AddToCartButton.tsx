"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

type Product = {
  id: string;
  name: string;
  price: number;
  displayPrice: string;
  image: string;
  description: string;
  status: string;
};

export default function AddToCartButton({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="relative">

      <button
        onClick={handleAdd}
        className="px-8 py-4 bg-[#551993] hover:bg-violet-700 transition uppercase tracking-widest"
      >
        Add To Cart
      </button>

      {added && (
        <div className="absolute top-[-60px] left-0 bg-black border border-[#551993] px-6 py-3 text-sm uppercase tracking-[0.25em] text-[#551993] animate-pulse">
          Added To Chaos
        </div>
      )}

    </div>
  );
}