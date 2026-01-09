import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import dogImage from '../../../public/hero-dog.webp'
import bgDogImage from '../../../public/bg-hero.png'
import Image from "next/image"

export function Hero() {
    return(
        <section className="bg-[#ffdb67] text-zinc-800 relative overflow-hidden">
            <div>
                <Image src={bgDogImage} alt="Foto de um cachorro" fill sizes="100vw" priority className="object-cover opacity-60 lg:hidden"/>
            </div>
            <div className="container mx-auto pt-16 pb-16 md:pb-0 md px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h1 data-aos="fade-down" className='text-3xl md:text-4xl lg:text-5xl font-oi'>Seu PET merece cuidado carinho e atenção especial.</h1>
                        <p className="lg:text-lg" data-aos="fade-right">
                            Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de patas.
                        </p>
                        <a data-aos="fade-up" data-aos-delay="500" target="_blank" href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`} className="bg-green-800 text-white px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
                            <WhatsappLogo weight="fill" size={20}/> Contato via Whatsapp
                        </a>
                        <div className="mt-6">
                            <p className="text-sm mb-4">
                                <b className="bg-zinc-800 text-white px-1.5 py-1 rounded-md">10%</b> de desconto na primeira compr
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:block h-full relative">
                        <Image src={dogImage} alt="Foto de um cachorro" className="object-contain" fill sizes="(max-width: 768px) 0vw, 50vw" quality={100} priority/>
                    </div>
                </article>
            </div>
        </section>
    )
}