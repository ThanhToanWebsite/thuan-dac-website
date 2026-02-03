import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { Products } from "@/app/components/Products";
import { Services } from "@/app/components/Services";
import { Portfolio } from "@/app/components/Portfolio";
import { News } from "@/app/components/News";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

import { FloatingCTA } from "@/app/components/FloatingCTA";
import { NeonBackground } from "@/app/components/NeonBackground";
import { TechGrid } from "@/app/components/TechGrid";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground scroll-smooth selection:bg-cyan-500/30 selection:text-cyan-600 dark:selection:text-cyan-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Portfolio />
        <News />
        <Contact />
      </main>
      <TechGrid />
      <NeonBackground />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;