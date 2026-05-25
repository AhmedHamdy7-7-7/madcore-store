export default function Manifesto() {
  return (
    <section id="about" className="relative bg-black py-32 overflow-hidden border-t border-zinc-900">

      {/* Background purple glows */}
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-violet-700/20 blur-[160px]" />
      <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-violet-700/20 blur-[160px]" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Label */}
        <p className="text-violet-500 uppercase tracking-[0.45em] text-sm mb-8">
          THE PHILOSOPHY
        </p>

        <div className="flex justify-center items-center gap-4 mb-16">
          <div className="w-24 h-px bg-violet-500/40"></div>
          <span className="text-violet-500 text-xl">✦</span>
          <div className="w-24 h-px bg-violet-500/40"></div>
        </div>

        {/* Main text block */}
        <div className="relative flex flex-col items-center leading-none">

          {/* Top word */}
          <h2 className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black tracking-[-0.08em] text-white">
            CHAOS
          </h2>

          {/* Center IS */}
          <span className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-black italic text-violet-500 rotate-[-10deg] drop-shadow-[0_0_25px_rgba(139,92,246,0.9)] -my-2 z-10">
            IS
          </span>

          {/* Bottom word */}
          <h2 className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-black tracking-[-0.08em] text-white">
            IDENTITY
          </h2>

        </div>

        {/* Description */}
        <p className="mt-16 max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed">
          Madcore is built for those who reject conformity.
          A dark expression of rebellion engineered through
          oversized silhouettes, brutal minimalism, and the
          energy of controlled disorder.
        </p>

      </div>
    </section>
  );
}