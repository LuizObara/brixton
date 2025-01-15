import HeroButton from "./hero-button"

export default function Hero() { 
    return (
        <div className="min-h-screen bg-hero flex items-center justify-center relative">
            <div className="text-white px-5 md:px-10 text-center lg:text-left max-w-7xl">
                <h1 className="uppercase text-3xl md:text-5xl font-bold  mb-4">
                    Da Terra ao Resultado: Brixton
                </h1>
                <h2 className="text-xl md:text-3xl text-center font-medium mb-6">
                    LOTEAMENTOS QUE INSPIRAM VIDAS.
                </h2>

                <div className="lg:flex justify-around gap-4 mb-10">
                    <HeroButton/>
                    <HeroButton type="Allotment" />
                </div>
            </div>
        </div>
    )
}