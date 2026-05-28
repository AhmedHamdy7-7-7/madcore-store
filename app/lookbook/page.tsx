import Image from "next/image";

const looks = [
  "/brand/look1.jpg",
  "/brand/look2-new.jpg",
  "/brand/look3.jpg",
];

export default function LookbookPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-24">

      {/* Header */}
      <section className="text-center py-20 px-6">
        <p className="text-[#551993] uppercase tracking-[0.5em] mb-6">
          Editorial
        </p>

        <h1 className="text-7xl font-black uppercase">
          LOOKBOOK
        </h1>

        <p className="text-zinc-400 max-w-2xl mx-auto mt-8 text-lg">
          A visual transmission of shadow, rebellion,
          and controlled disorder.
        </p>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-8 pb-32 space-y-24">

        {looks.map((look, index) => (
          <div
            key={index}
            className="relative h-[85vh] overflow-hidden group"
          >
            <Image
              src={look}
              alt={`Look ${index + 1}`}
              fill
             className="object-contain group-hover:scale-100 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute bottom-12 left-12">
              <p className="text-[#551993] uppercase tracking-[0.4em] text-sm mb-3">
                Drop 01
              </p>

              <h2 className="text-5xl font-black uppercase">
                Look {index + 1}
              </h2>
            </div>
          </div>
        ))}

      </section>

    </main>
  );
}