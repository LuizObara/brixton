import Link from "next/link";

export default function Copyright() {
    return(
        <div className="w-full text-center text-slate-400">
            <h5 className="font-semibold">© 2024 Brixton. Todos os direitos reservados.</h5>
            <h6 className="uppercase text-sm font-bold">Desenvolvido por <Link href="https://devfast.com.br" target="blank"><span className="text-blue-600 font-semibold">Devfast</span></Link></h6>
        </div>
    );
}