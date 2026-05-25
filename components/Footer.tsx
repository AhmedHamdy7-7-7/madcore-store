export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-20 px-10 bg-black">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-black tracking-[0.3em] mb-4">
            MADCORE
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            Dark streetwear engineered for those who thrive in chaos.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-widest">
            Navigate
          </h3>

          <div className="flex flex-col gap-3 text-zinc-400">
            <a href="#home" className="hover:text-violet-400 transition">
              Home
            </a>
            <a href="#collection" className="hover:text-violet-400 transition">
              Collection
            </a>
            <a href="#about" className="hover:text-violet-400 transition">
              About
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase tracking-widest">
            Connect
          </h3>

          <div className="flex flex-col gap-3 text-zinc-400">
            <p>Instagram</p>
            <p>Email</p>
            <p>Egypt</p>
          </div>
        </div>

      </div>

      <div className="mt-16 text-center text-zinc-600 text-sm tracking-widest uppercase">
        Madcore © 2026 — Born From Chaos
      </div>

    </footer>
  );
}