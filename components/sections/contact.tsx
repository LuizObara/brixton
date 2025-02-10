import EmailCopy from '@/components/email-copy'
export default function Contact() { 
    return (
        <div className="p-3 ">
            <div className="text-[#0d2d44] select-none text-3xl"><h2>.</h2></div> 
            <div className="my-10 w-full text-center text-white uppercase text-3xl font-bold">
                <h2 className="my-5">Quem nós somos</h2>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-7xl">
                    <div className="p-3 rounded-lg bg-[#08263A]">
                        <div className="my-3 w-full text-center text-white uppercase text-xl font-bold">nossa localização</div>
                        <div className="p-3 md:w-[500px] md:h-[500px] bg-black rounded-lg">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.264234075433!2d-47.54088341297569!3d-23.52299690557499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58ca4e9afa265%3A0x521e3bc72eef7c95!2sTv.%20Moacir%20Tudela%20Fernandes%2C%20297%20-%20Recanto%20Ipanema%20do%20Meio%2C%20Sorocaba%20-%20SP%2C%2018035-257!5e0!3m2!1spt-BR!2sbr!4v1739210585263!5m2!1spt-BR!2sbr"                         
                                className="w-full h-full rounded-lg"
                                allowFullScreen={true}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#08263A]">
                        <div className="my-3 w-full text-center text-white uppercase text-xl font-bold">fale conosco!</div>
                        <div className="md:w-[500px] md:h-[500px] flex flex-col">
                            <p className="text-white text-justify p-3 text-md font-semibold">
                                Estamos aqui para você! Solicite um orçamento, agende uma conversa com nossa equipe de produtos ou compartilhe suas opiniões e críticas construtivas. Sua experiência é importante para nós, e estamos prontos para esclarecer qualquer dúvida. Entre em contato e descubra como podemos ajudar a transformar suas ideias em realidade.
                            </p>
                            <div className="mt-auto">
                                <EmailCopy/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}