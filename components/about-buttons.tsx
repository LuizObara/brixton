import { Button } from "./ui/button";
import Link from "next/link";

export default function AboutButtons () {
    const whatsappNumber = '5511941864769'; 
    const whatsappMessage = encodeURIComponent('Olá! Gostaria de mais informações.');

    return (
        <div className="md:flex md:justify-between">
            <Link href="#empreendimentos">
                <Button
                    className="rounded-full mt-5 w-full md:w-72 font-semibold uppercase"
                    variant={"outline"}
                    >
                    Nossos empreendimentos
                </Button>
            </Link>
            <Link 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
            >
                <Button
                    className="rounded-full mt-5 w-full md:w-72 font-semibold uppercase bg-[#0c776c] text-white hover:bg-[#085c53]"
                    >
                    fale conosco
                </Button>
            </Link>
        </div>
    );
}