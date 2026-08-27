import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import SolutionAreas from "@/components/SolutionAreas";

export default function Home() {
  return (
    <>
      <main id="home">
        <Hero />
        <ServiceCategories />
        <SolutionAreas />
      </main>
      <Footer />
    </>
  );
}
