import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Allotment from "@/components/allotment";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
       <main>
          <section id="inicio">
            <Hero/>
          </section>

          <section id="sobre-nos" className="min-h-screen">
            <About/>
          </section>

          <section id="servicos" className="min-h-screen bg-[#0d2d44]">
            <Services/>
          </section>

          <section id="loteamentos" className="min-h-screen">
            <Allotment/>
          </section>

          <section id="contato" className="min-h-screen bg-[#0d2d44]">
            <Contact/>
          </section>
      </main>
    </div>
  );
}