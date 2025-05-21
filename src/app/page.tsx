import Hero from "@/components/Hero/Hero";
import Product from "@/components/Product/Product";
import Location from "@/components/Location/Location";
import Bander from "@/components/Hero/Bander/Bander";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
      <Hero />
      <Product />
      <Location />
      <Bander />
      <Footer />
    </div>
    </>
  );
}
