import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "void-hoodie",
    name: "VOID HOODIE",
    price: "EGP 1,299",
    image: "/images/hoodie.jpg",
  },
  {
    id: "chaos-tee",
    name: "CHAOS TEE",
    price: "EGP 799",
    image: "/images/tee.jpg",
  },
  {
    id: "obsidian-fit",
    name: "OBSIDIAN FIT",
    price: "EGP 999",
    image: "/images/fit.jpg",
  },
];

export default function Collection() {
  return (
    <section
      id="collection"
      className="relative z-10 px-10 py-24"
    >
      <div className="text-center mb-16">
        <p className="text-violet-400 uppercase tracking-[0.4em] text-sm">
          New Drop
        </p>

        <h3 className="text-4xl font-bold mt-4 tracking-widest">
          FEATURED COLLECTION
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="bg-zinc-950 border border-zinc-800 p-8 hover:border-violet-500 transition-all duration-500 hover:scale-105 cursor-pointer">

              <div className="relative h-72 mb-6 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <h4 className="text-xl font-semibold">
                {product.name}
              </h4>

              <p className="text-zinc-400 mt-2">
                {product.price}
              </p>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}