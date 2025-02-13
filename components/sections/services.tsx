export default function Services() { 
    return (
        <div className="p-3">
            <div className="text-[#0d2d44] select-none text-3xl"><h2>.</h2></div>    
            <div className="my-10 w-full text-center uppercase text-3xl text-white font-bold">
                <h2 className="my-5">Como podemos ajudar você</h2>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl p-2 md:p-8 rounded-3xl text-white bg-[#09273D]">                    
                    <div className="flex flex-col">
                        <div className="bg-[#0D2D44] rounded-3xl p-4 lg:p-8 mb-4 text-white transition-transform duration-500 md:hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-5 uppercase text-center">Avaliação Inicial e Viabilidade</h3>
                            <ul className="list-disc list-inside space-y-1 text-lg text-justify mx-auto w-11/12">
                                <li>Analisamos seu terreno, fazenda ou área disponível para identificar o potencial de loteamento.</li>
                                <li>Desenvolvemos um pré-projeto que demonstra a viabilidade e o potencial de lucro.</li>
                            </ul>
                        </div>
                        <div className="bg-[#0D2D44] rounded-3xl p-4 lg:p-8 mt-auto text-white transition-transform duration-500 md:hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-5 uppercase text-center">Planejamento Personalizado</h3>
                            <ul className="list-disc list-inside space-y-1 text-lg text-justify mx-auto w-11/12">
                                <li>Criamos um projeto adaptado ao tamanho da área, às normas da cidade e às oportunidades do mercado local.</li>
                                <li>Garantimos que tudo esteja em conformidade com as leis e regulamentações aplicáveis.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="">       
                        <div className="bg-[#0D2D44] rounded-3xl p-4 mb-5 text-white transition-transform duration-500 md:hover:scale-105">
                            <h3 className="text-xl font-semibold mb-5 uppercase text-center">Aprovações e Regularizações</h3>
                            <ul className="list-disc list-inside space-y-1 text-md text-justify mx-auto w-11/12">
                                <li>Cuidamos de toda a burocracia, incluindo aprovações na prefeitura e na Secretaria do Meio Ambiente.</li>
                            </ul>
                        </div>
                        <div className="bg-[#0D2D44] rounded-3xl p-4 mb-5 text-white transition-transform duration-500 md:hover:scale-105">
                            <h3 className="text-xl font-semibold mb-5 uppercase text-center">Execução Completa</h3>
                            <ul className="list-disc list-inside space-y-1 text-md text-justify mx-auto w-11/12">
                                <li>Desenvolvemos a marca e a identidade visual para o loteamento.</li>
                                <li>Planejamos estratégias para atrair investidores e compradores.</li>
                            </ul>
                        </div>
                        <div className="bg-[#0D2D44] rounded-3xl p-4 text-white transition-transform duration-500 md:hover:scale-105">
                            <h3 className="text-xl font-semibold mb-5 uppercase text-center">Criação da Identidade</h3>
                            <ul className="list-disc list-inside space-y-1 text-md text-justify mx-auto w-11/12">
                                <li>Realizamos todas as etapas do projeto, desde a concepção até a conclusão do empreendimento.</li>
                                <li>Garantimos qualidade, lucratividade e resultados duradouros para você e sua família.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 