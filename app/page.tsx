import Carousel from "./ui/carousel/Carousel";
import Equipe from "./ui/equipe/TeamCard";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Nav from "./ui/Nav";

export default function Home() {
    return (
        <main className="flex flex-col" >

            <Nav className="absolute" />
            <Header />

            <div className="w-full h-[1cqw] bg-white" ></div>
                
            {/* Sobre */}
            <section className="destaque scroll-pt-24 text-lg md:text-xl lg:text-3xl" id={"sobre"}>
                <div className="mx-auto grid max-w-8xl grid-cols-1 gap-x-60 gap-y-10 text-center md:grid-cols-2 md:gap-y-8 md:text-left">
                    <article className="flex flex-col items-center justify-between md:items-start">
                        <h2>
                            <strong className="font-medium">conhecimento</strong> e{" "}
                            <strong className="font-medium">experiência</strong>
                            <br />
                            em materiais e processos
                        </h2>
                        <p className="mt-4 text-slate-600 md:mt-14">
                            entendemos como criar soluções adequadas convertendo a intenção de um projeto de design para a realidade da fabricação
                        </p>
                    </article>
                    <article className="flex flex-col items-center justify-between md:items-start">
                        <h2>
                            entendimento do <strong className="font-medium">contexto</strong>
                        </h2>
                        <p className="mt-4 text-slate-600 md:mt-12">
                            sabemos como incluir fatores subjetivos como comportamento de uso, tendências e valores culturais na identidade do produto
                        </p>
                    </article>
                </div>
            </section>
            
            {/* Como fazemos */}
            <section className="como-fazemos-faixa text-center md:text-left" aria-labelledby="como-fazemos-titulo">
                <div className="como-fazemos">
                    <h2 id="como-fazemos-titulo" className="font-bold text-3xl uppercase  md:text-4xl">
                        Como fazemos
                    </h2>
                    <div className="mt-5 flex max-w-4xl flex-col gap-6 text-lg leading-snug md:text-xl">
                        <p>
                            Objetivos de custo, qualidade, inovação e outros fatores chave para nossos clientes <br/> são convertidos em <strong className="font-medium">soluções de design</strong>
                        </p>
                        <p>
                            Analisamos a <strong className="font-medium">viabilidade</strong> e riscos considerando os requisitos dos clientes e recursos disponíveis
                        </p>
                        <p>
                            Compartilhamos e dividimos as <strong className="font-medium">decisões</strong> com nossos clientes
                        </p>
                        <p>
                            Acompanhamento do projeto técnico para garantir que ajustes necessários <br />mantenham as <strong className="font-medium">soluções aprovadas</strong>
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Carrossel */}
            <Carousel />
            
            {/* Clientes */}
            <section className="w-full">
                <img
                    src="/Clientes.png"
                    alt="Clientes"
                    className="w-full h-auto block"
                />
            </section>
            
            {/* Equipe */}
            <Equipe/>
            
            {/* Footer */}
            <Footer id={"contato"} className="relative bottom-0 w-full flex flex-col md:flex-row items-start justify-center px-8 gap-3 lg:gap-32 py-10" />
        </main>
    )
}