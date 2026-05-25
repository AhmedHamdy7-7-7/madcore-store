import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute top-20 left-20 w-72 h-72 bg-violet-700 opacity-20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-900 opacity-20 blur-[180px] rounded-full"></div>

      <Navbar />
      <Hero />
      <Collection />
      <Manifesto />
      <Footer />

    </main>
  );
}