import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Hero />
      <Collection />
      <Footer />
    </main>
  );
}