export default function Hero() {
  return (
    <section id="home" className="relative z-10 flex flex-col justify-center items-center text-center h-[85vh] px-6">

      <p className="text-violet-400 uppercase tracking-[0.6em] mb-5 text-sm">
        Born From Chaos
      </p>

      <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-[0.08em] leading-none drop-shadow-[0_0_30px_rgba(139,92,246,0.35)]">
        MADCORE
      </h2>

      <p className="mt-8 text-zinc-400 max-w-2xl text-lg leading-relaxed">
        Dark streetwear engineered for those who refuse conformity and thrive in disorder.
      </p>

      <a
      href="#collection"
      className="inline-block px-8 py-4 border border-violet-500 hover:bg-violet-600 transition uppercase tracking-widest"
      >
        ENTER THE CHAOS
        </a>
    </section>
  );
}