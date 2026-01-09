import { About } from "./_components/about";
import { Clients } from "./_components/clients";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";

export default function Home() {
  return(
    <main className="overflow-x-hidden">
      <Hero/>
      <About/>
      <Services/>
      <Clients/>
      <Footer/>
    </main>
  )
}