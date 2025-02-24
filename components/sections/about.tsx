import NavigationButtons from "../navigation-buttons";
import AboutButtons from "../about-buttons";
import about from "@/assets/about.jpg";
import Image from "next/image";

export default function About() { 
    return (
        <div className="p-3">
            <div className="text-white select-none text-3xl"><h2>.</h2></div> {/* TODO how do i improve this? */}
            <div className="my-10 w-full text-center uppercase text-3xl font-bold">
                <h2 className="my-5">Quem nós somos</h2>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl">
                    <div className="relative mb-3">
                        <Image
                            src={about}
                            alt="Quem somos"
                            priority
                            sizes="(min-width: 100%)"
                            style={{ objectFit: 'contain' }}
                            className="rounded-[16px]"
                        />
                    </div>
                    <div className="w-full md:w-5/6 mx-auto font-medium text-justify flex flex-col min-h-full">
                        <p className="mb-3 text-xl">
                            Trabalhamos com dedicação para planejar, aprovar e desenvolver cada projeto de acordo com as necessidades do mercado e a vocação de cada área. Na Brixton, cada área é uma oportunidade de construir sonhos, transformar paisagens e criar resultados para nossos clientes.
                        </p>
                        <div className="mt-auto mb-5 hidden md:block">
                            <h5 className="uppercase text-center w-full mb-3 text-lg font-semibold">Conheça nossas empresas do grupo</h5>
                            <NavigationButtons/>    
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-3">
                <div className="w-full max-w-7xl">
                    <div className="my-5 md:hidden">
                        <h5 className="uppercase text-center w-full mb-3 text-lg font-semibold">Conheça nossas empresas do grupo</h5>
                        <NavigationButtons/>    
                    </div>
                    <AboutButtons/>
                </div>
            </div>

        </div>
    );
}