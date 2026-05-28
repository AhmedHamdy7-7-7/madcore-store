import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import PageTransition from "@/components/PageTransition";
import Preloader from "@/components/Preloader";

export const metadata = {
  title: "MADCORE",
  description: "Chaos With Intention",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Preloader />
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
        </CartProvider>
      </body>
    </html>
  );
}