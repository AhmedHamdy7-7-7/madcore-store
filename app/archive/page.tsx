import Image from "next/image";

const drops = [
  {
    title: "DROP 01",
    subtitle: "The Beginning of Disorder",
    image: "/brand/product1.jpg",
    status: "SOLD OUT",
  },
  {
    title: "DROP 02",
    subtitle: "Shadow Transmission",
    image: "/brand/product2.jpg",
    status: "LIVE",
  },
  {
    title: "DROP 03",
    subtitle: "Controlled Collapse",
    image: "/brand/product3.jpg",
    status: "COMING SOON",
  },
];

export default function ArchivePage() {
  return (
    <main className="bg-black text-white min-h-screen pt-24">

      {/* Header */}
      <section className="text-center py-20 px-6">
        <p className="text-[#551993] uppercase tracking-[0.5em] mb-6">
          Legacy
        </p>

        <h1 className="text-7xl font-black uppercase">
          ARCHIVE
        </h1>

        <p className="text-zinc-400 max-w-2xl mx-auto mt-8 text-lg">
          Every drop is a timestamp in the evolution of chaos.
        </p>
      </section>

      {/* Drops */}
      <section className="max-w-6xl mx-auto px-8 pb-32 space-y-16">

        {drops.map((drop, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-10 items-center border border-white/10 p-8 hover:border-[#551993] transition"
          >

            <div className="relative h-[500px]">
              <Image
                src={drop.image}
                alt={drop.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-[#551993] uppercase tracking-[0.4em] mb-4">
                {drop.status}
              </p>

              <h2 className="text-5xl font-black uppercase mb-6">
                {drop.title}
              </h2>

              <p className="text-zinc-400 text-xl">
                {drop.subtitle}
              </p>
            </div>

          </div>
        ))}

      </section>

    </main>
  );
}