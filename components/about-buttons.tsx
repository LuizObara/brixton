import { Button } from "./ui/button";

// TODO funcionalidade dos botões

export default function AboutButtons () {
    return (
        <div className="md:flex md:justify-between">
            <Button
                className="rounded-full mt-5 w-full md:w-72 font-semibold uppercase"
                variant={"outline"}
            >
                Nossos empreendimentos
            </Button>

            <Button
                className="rounded-full mt-5 w-full md:w-72 font-semibold uppercase bg-[#0c776c] text-white hover:bg-[#085c53]"
            >
                Solicitar pré-projeto
            </Button>
        </div>
    );
}