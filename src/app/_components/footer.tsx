import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import whiskas from '../../../public/whiskas.png'
import natural from '../../../public/natural.png'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo, YoutubeLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]

export function Footer() {
    return(
        <section className='bg-zinc-900 py-16 text-white'>
            <div className='container mx-auto px-4'>
                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl mb-8 text-center font-oi'>Marcas que trabalhamos</h4>
                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {brands.map((item, index) => (
                            <div key={index} className='bg-white flex justify-center items-center p-4 rounded-lg'>
                                <Image src={item.logo} alt={item.name} width={100} height={50} className='object-contain' quality={100} style={{width: 'auto', height: 'auto'}}/>
                            </div>
                        ))}
                    </div>
                </div>
                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-4'>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Pet Shop Dev</h3>
                        <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação.</p>
                        <a target="_blank" href={`https://wa.me/556799998800?text=Olá vim pelo site e gostaria de mais informações`} className="bg-green-800 text-white px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 mt-4">
                                <WhatsappLogo weight="fill" size={24}/>
                                Contato via Whatsapp
                            </a>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                        <p className='mb-4'>Email: teste@teste.com</p>
                        <p className='mb-4'>Telefone: (XX) XXXXX-XXXX</p>
                        <p className='mb-4'>Rua X, Centro, Osasco | SP</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
                        <div className='flex gap-4'>
                            <a href="#" target='_blank'><FacebookLogo className='w-8 h-8'/></a>
                            <a href="#" target='_blank'><InstagramLogo className='w-8 h-8'/></a>
                            <a href="#" target='_blank'><YoutubeLogo className='w-8 h-8'/></a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}