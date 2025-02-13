import Image from "next/image";
import masterplan from "@/assets/masterplan_2025_tsf.jpg.webp";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Enterprises() { 
    return (
        <div className="p-3">
            <div className="text-white select-none text-3xl"><h2>.</h2></div> {/* TODO how do i improve this? */}
            <div className="my-10 w-full text-center uppercase text-3xl font-bold">
                <h2 className="my-5">empreendimento terras de são francisco</h2>
            </div>
            <div className="my-10 w-full text-center uppercase hidden md:block text-md">
                <h4 className="mb-2 font-bold">Um empreendimento que irá cativar o seu coração</h4>
                <h3 className="text-2xl font-medium">Construa sua casa, curta seu espaço e viva em paz com a natureza</h3>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl">
                    <div className="flex justify-center mb-2 h-full items-center">
                        <h4 className="font-bold uppercase text-center lg:max-w-lg text-xl">Um empreendimento exclusivo para quem valoriza o que há de melhor!</h4>                            
                    </div>
                    <div className="">
                        <div className="flex justify-center mb-2">
                            <h4 className="font-bold uppercase text-center lg:max-w-lg text-3xl">masterplan</h4>                            
                        </div>
                        <div className="text-center flex justify-center mb-2">
                            <p className="text-lg font-semibold">O Residencial Terras de São Francisco foi planejado sob uma área de 533.455,10 M² com um total de 138 lotes que são divididos em 16 Condados</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-justify flex justify-center">
                            <p className="text-xl">Adquira seu lote a partir de 1.500 m² e desfrute de uma área verde preservada, corpos d´água com nascente exclusiva, ar puro a 1.020m de altitude para revitalizar sua saúde, fauna exuberante e trilhas na mata para conectar-se com a natureza. Além disso, tenha acesso a uma área rural integrada com animais, horta orgânica e pomar.Bem vindo(a) ao Residencial Terras de São Francisco!</p>
                        </div>
                        <div className="mt-auto flex justify-around">
                            <Link href="https://www.google.com/maps/dir/Residencial+Terras+de+S%C3%A3o+Francisco+-+Votorantim,+Rua+Jo%C3%A3o+Donizete+de+Almeida,+461,+Estr.+Pedro+Monari,+7+-+3+KM+-+Carafa,+Votorantim+-+SP,+18114-500,+Brasil/Carafa,+Votorantim+-+SP,+Brasil/@-23.5618644,-47.3456419,16z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x94cf65cceb0d40ef:0xc55137f8bb50e706!2m2!1d-47.3477942!2d-23.5638355!1m5!1m1!1s0x94cf6502afd40ee9:0xa7525bbbd801fd20!2m2!1d-47.3309137!2d-23.5657473?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDIxMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="blank" className="w-1/3">
                                <Button
                                    className="rounded-full w-full font-bold text-md"
                                    variant="outline"
                                >
                                    Endereço
                                </Button>
                            </Link>
                            <Link href="https://terrasdesaofrancisco.eco.br/" target="blank" className="w-1/3">
                                <Button
                                    className="rounded-full w-full font-bold text-md bg-[#0c776c]"
                                    >
                                    Saiba mais
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="">                            
                        <Link href="https://terrasdesaofrancisco.eco.br/wp-content/uploads/2025/01/masterpla_e_condados_2025_tsf.pdf" target="blank">
                            <Image
                                className="rounded-3xl"
                                src={masterplan}
                                alt="Masterplan empreendimento terras de são francisco"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}