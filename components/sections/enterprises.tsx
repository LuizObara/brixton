import masterplan from "@/assets/masterplan_2025_tsf.jpg.webp";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Enterprises() { 
    return (
        <div className="p-3">
            <div className="text-white select-none text-3xl"><h2>.</h2></div>
            <div className="my-10 w-full text-center uppercase text-3xl font-bold">
                <h2 className="my-5">empreendimento terras de são francisco</h2>
            </div>
            <div className="my-10 w-full text-center uppercase hidden md:block text-md">
                <h4 className="mb-2 font-bold">Um empreendimento que irá cativar o seu coração</h4>
                <h3 className="text-2xl font-medium">Construa sua casa, curta seu espaço e viva em paz com a natureza</h3>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl md:auto-rows-auto md:grid-flow-row">
                    <div className="flex justify-center mb-2 h-full items-center order-1 md:order-none">
                        <h4 className="font-bold uppercase text-center lg:max-w-lg text-xl">Um empreendimento exclusivo para quem valoriza o que há de melhor!</h4>                            
                    </div>
                    <div className="order-3 md:order-none">
                        <div className="flex justify-center mb-2">
                            <h4 className="font-bold uppercase text-center lg:max-w-lg text-3xl">masterplan</h4>                            
                        </div>
                        <div className="text-center flex justify-center mb-2">
                            <p className="text-lg font-semibold">O Residencial Terras de São Francisco foi planejado sob uma área de 533.455,10 M² com um total de 137 lotes que são divididos em 15 Condados</p>
                        </div>
                    </div>
                    <div className="flex flex-col order-2 md:order-none mb-5 md:mb-0">
                        <div className="text-justify flex justify-center mb-5">
                            <p className="text-xl">Adquira seu lote a partir de 1.500 m² e desfrute de uma área verde preservada, corpos d´água com nascente exclusiva, ar puro a 1.020m de altitude para revitalizar sua saúde, fauna exuberante e trilhas na mata para conectar-se com a natureza. Além disso, tenha acesso a uma área rural integrada com animais, horta orgânica e pomar. Bem vindo(a) ao Residencial Terras de São Francisco!</p>
                        </div>
                        <div className="mt-auto flex justify-around">
                            <Link href="https://www.google.com/maps/place/Sorocaba,+SP/@-23.530338,-47.4650515,13z/data=!4m23!1m16!4m15!1m6!1m2!1s0x94c5f54bcad87989:0x4a9099fb9d10cb8e!2sSorocaba,+SP!2m2!1d-47.4851438!2d-23.4709096!1m6!1m2!1s0x94cf65cceb0d40ef:0xc55137f8bb50e706!2sResidencial+Terras+de+S%C3%A3o+Francisco+-+Votorantim+-+Rua+Jo%C3%A3o+Donizete+de+Almeida,+461,+Estr.+Pedro+Monari,+7+-+3+KM+-+Carafa,+Votorantim+-+SP,+18114-500!2m2!1d-47.3477942!2d-23.5638355!3e0!3m5!1s0x94c5f54bcad87989:0x4a9099fb9d10cb8e!8m2!3d-23.4709096!4d-47.4851438!16s%2Fg%2F11bwdyrhd5?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="blank" className="w-1/3">
                                <Button className="rounded-full w-full font-bold text-md" variant="outline">
                                    Endereço
                                </Button>
                            </Link>
                            <Link href="https://terrasdesaofrancisco.eco.br/" target="blank" className="w-1/3">
                                <Button className="rounded-full w-full font-bold text-md bg-[#0c776c]">
                                    Saiba mais
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="order-4 md:order-none">                            
                        <Link href="https://terrasdesaofrancisco.eco.br/wp-content/uploads/2025/01/masterpla_e_condados_2025_tsf.pdf" target="blank">
                            <Image className="rounded-3xl" src={masterplan} alt="Masterplan empreendimento terras de são francisco" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}