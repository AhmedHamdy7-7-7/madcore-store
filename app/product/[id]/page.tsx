import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-black text-white min-h-screen pt-32 px-8">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Product Image */}
        <div className="relative h-[700px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div>

          <p className="text-[#551993] uppercase tracking-[0.4em] mb-4">
            {product.status}
          </p>

          <h1 className="text-6xl font-black uppercase mb-6">
            {product.name}
          </h1>

          <p className="text-zinc-400 text-xl mb-8 leading-relaxed">
            {product.description}
          </p>

          <p className="text-3xl font-bold mb-10">
            {product.displayPrice}
          </p>

          <AddToCartButton product={product} />

        </div>

      </div>

    </main>
  );
}