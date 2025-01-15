import { Button } from "./ui/button";
import Link from "next/link";

type ContactButtonProps = {
    type?: "default" | "Allotment";
};

const HeroButton = ({ type = "default" }: ContactButtonProps) => {
    const isAllotment = type === "Allotment";

    return (
        <div className="w-full flex justify-center mb-3">
          <Link
            href={isAllotment ? "#loteamentos" : "#sobre-nos"}
            className={`w-3/4 rounded-full font-bold ${
              isAllotment ? "bg-[#0c776c] text-white" : ""
            }`}
          >
            <Button
              className={`w-full rounded-full font-bold ${
                isAllotment ? "bg-[#0c776c] text-white hover:bg-[#085c53]" : "text-black bg-white hover:text-white"
              }`}
            >
              <h3 className="flex gap-1 items-center px-8 uppercase">
                {isAllotment ? "Nossos Empreendimentos" : "Venha Conhecer"}
              </h3>
            </Button>
          </Link>
        </div>
      );
}
  

export default HeroButton;