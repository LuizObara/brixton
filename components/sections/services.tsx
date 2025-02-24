import terraplanagem from '@/assets/services/terraplanagem.jpg';
import pavimentacao from '@/assets/services/pavimentacao.jpg';
import aprovacao from '@/assets/services/aprovacao.jpg';
import drenagem from '@/assets/services/drenagem.jpeg';
import portaria from '@/assets/services/portaria.jpg';
import projeto from '@/assets/services/projeto.jpg';
import esgoto from '@/assets/services/esgoto.webp';
import estudo from '@/assets/services/estudo.png';           
import area from '@/assets/hero.jpg';

import Image from 'next/image';

const servicesData = [
    { title: 'Área', image: area },
    { title: 'Estudo de Viabilidade', image: estudo },
    { title: 'Projetos', image: projeto },
    { title: 'Aprovação', image: aprovacao },
    { title: 'Terraplanagem', image: terraplanagem },
    { title: 'Drenagem', image: drenagem },
    { title: 'Esgoto', image: esgoto },
    { title: 'Pavimentação', image: pavimentacao },
    { title: 'Portaria e Segurança', image: portaria },
];

export default function Services() {
    return (
        <div className="p-3">
            <div className="text-[#0d2d44] select-none text-3xl"><h2>.</h2></div>
            <div className="my-10 w-full text-center uppercase text-3xl text-white font-bold">
                <h3 className="my-5">Transformamos areas em oportunidades únicas, buscando resultados sólidos.</h3>
            </div>
            <div className="flex justify-center mb-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl p-2 md:p-4 rounded-3xl text-white bg-[#09273D]">
                    {servicesData.map((service, index) => (
                        <div key={index} className="flex flex-col items-center bg-[#0D2D44] rounded-3xl p-4 transition-transform duration-500 md:hover:scale-105">
                            <Image src={service.image} alt={service.title} className="rounded-2xl mb-4 w-full h-40 object-cover" />
                            <h3 className="text-xl font-semibold uppercase text-center">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}