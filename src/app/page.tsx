import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import WaitingList from "@/components/sections/WaitingList";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <WaitingList />
      <Footer />
    </main>
  );
}
