import Image from "next/image";

export default function ManifestoPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <Image
          src="/brand/look1.jpg"
          alt="Manifesto"
          fill
          className="object-cover opacity-20"
        />

        <div className="absolute w-[600px] h-[600px] bg-[#551993] blur-[160px] opacity-20 rounded-full"></div>

        <div className="relative z-10 text-center px-6">
          <p className="uppercase tracking-[0.5em] text-[#551993] mb-6">
            The Philosophy
          </p>

          <h1 className="text-7xl font-black uppercase">
            CHAOS
            <br />
            WITH
            <br />
            INTENTION
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-5xl mx-auto px-8 py-32">

        <p className="text-[#551993] uppercase tracking-[0.4em] mb-8">
          The Story
        </p>

        <h2 className="text-5xl font-black mb-10 uppercase">
          Built In The Shadows
        </h2>

        <p className="text-zinc-300 text-xl leading-relaxed mb-10">
          Madcore was born in Cairo as a rebellion against conformity.
          It is a language for those who refuse to blend in.
          A collision of darkness, identity, mystery, and controlled disorder.
        </p>

        <p className="text-zinc-400 text-lg leading-relaxed">
          We do not create clothing.
          We create statements.
          Every silhouette is an act of defiance.
          Every piece carries the energy of those who choose individuality
          over acceptance.
        </p>
      </section>

      {/* Core Principles */}
      <section className="border-t border-white/10 px-8 py-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-[#551993] text-xl font-bold mb-4 uppercase">
              Mystery
            </h3>
            <p className="text-zinc-400">
              Identity is power when protected by shadow.
            </p>
          </div>

          <div>
            <h3 className="text-[#551993] text-xl font-bold mb-4 uppercase">
              Rebellion
            </h3>
            <p className="text-zinc-400">
              Madcore exists for those who reject ordinary expression.
            </p>
          </div>

          <div>
            <h3 className="text-[#551993] text-xl font-bold mb-4 uppercase">
              Intention
            </h3>
            <p className="text-zinc-400">
              Chaos is never random. It is designed.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}