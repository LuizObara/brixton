import Image from "next/image";
import about from "@/assets/about.jpg";
import AboutButtons from "../about-buttons"

export default function About() { 
    return (
        <div className="p-3">
            <div className="text-white select-none text-3xl"><h2>.</h2></div> {/* TODO how do i improve this? */}
            <div className="my-10 w-full text-center uppercase text-3xl font-bold">
                <h2 className="my-5">Quem nós somos</h2>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl">
                    <div className="relative ">
                        <Image
                            src={about}
                            alt="Quem somos"
                            priority
                            sizes="(min-width: 100%)"
                            style={{ objectFit: 'contain' }}
                            className="rounded-[16px]"
                        />
                    </div>
                    <div className="w-full md:w-5/6 mx-auto font-medium text-justify">
                        <p className="mb-3 text-xl">
                            Trabalhamos com dedicação para planejar, regularizar, aprovar e desenvolver cada projeto de acordo com as necessidades do mercado e a vocação de cada área. Na Brixton, cada terreno é uma oportunidade de construir sonhos, transformar paisagens e criar resultados lucrativos para nossos clientes.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-3">
                <div className="w-full max-w-7xl">
                    <h3 className="text-center uppercase text-2xl font-medium">Transformamos terrenos em oportunidades únicas, buscando resultados sólidos.</h3>
                    <ul className="list-disc mt-3 mb-3">
                        <li><strong>Avaliação Inicial e Viabilidade:</strong> Realizamos um estudo completo, entendendo as possibilidades garantindo que o projeto seja viável e sustentável.</li>
                        <li><strong>Planejamento Customizado:</strong> Desenvolvemos planos exclusivos que atendem às necessidades do mercado e às especificações do cliente.</li>
                        <li><strong>Aprovações e Regularizações:</strong> Gerenciamos os processos legais junto às prefeituras e órgãos competentes, assegurando que tudo esteja em conformidade.</li>
                        <li><strong>Projetos de Infraestrutura:</strong> Elaboramos projetos detalhados de infraestrutura urbana, para garantir a qualidade do empreendimento.</li>
                        <li><strong>Execução de Infraestrutura:</strong> Coordenamos e executamos as obras de infraestrutura com eficiência, cumprindo prazos e padrões de qualidade.</li>
                        <li><strong>Marketing e Vendas:</strong> Criamos estratégias e campanhas para promover o empreendimento e atrair os compradores certos.</li>
                        <li><strong>Resultado e Segurança:</strong> Garantimos a entrega do projeto com excelência e asseguramos a segurança jurídica e técnica do investimento.</li>
                    </ul>
                    <AboutButtons/>
                </div>
            </div>
        </div>
    );
}