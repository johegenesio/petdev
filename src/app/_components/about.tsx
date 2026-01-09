import Image from "next/image"
import aboutImg1 from '../../../public/about-1.png'
import aboutImg2 from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
export function About() {
    return(
        <section className="bg-white py-16 text-zinc-800">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image src={aboutImg1} alt="Um cachorro e um gato lado a lado" fill quality={100} priority className="object-cover hover:scale-110 duration-300"/>
                        </div>
                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                            <Image src={aboutImg2} alt="Um gato laranja" fill quality={100} priority/>
                        </div>
                    </div>
                    <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
                        <h2 className="text-4xl font-oi">Sobre</h2>
                        <p>Sabemos que cada laço é único. Fonte de alegria, evolução, bem-estar. Temos experiência e oferecemos espaços, produtos e serviços - e tudo mais que for preciso - para que a relação entre pets e suas famílias seja melhor a cada dia. Essa é nossa razão de ser.</p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-amber-300"/><p>Aberto desde 2006</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-amber-300"/><p>Equipe especializada</p>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-amber-300"/><p>Qualidade é nossa prioridade</p>
                            </li>
                        </ul>
                        <div className="flex gap-2">
                            <a target="_blank" href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`} className="bg-green-800 text-white px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2">
                                <WhatsappLogo weight="fill" size={24}/>
                                Contato via Whatsapp
                            </a>
                            <a target="_blank" href='#' className="px-5 py-2 rounded-md flex items-center justify-center w-fit gap-2">
                                <MapPin/>
                                Endereço da Loja
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}