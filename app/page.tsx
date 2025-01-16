import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Enterprises from "@/components/sections/enterprises";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
       <main>
          <section id="inicio">
            <Hero/>
          </section>

          <section id="empreendimentos" className="min-h-screen">
            <Enterprises/>
          </section>

          <section id="servicos" className="min-h-screen bg-[#0d2d44]">
            <Services/>
          </section>

          <section id="sobre-nos" className="min-h-screen">
            <About/>
          </section>

          <section id="contato" className="min-h-screen bg-[#0d2d44]">
            <Contact/>
          </section>
      </main>
    </div>
  );
}