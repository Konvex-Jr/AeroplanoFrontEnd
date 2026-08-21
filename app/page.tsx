import Hero from "./ui/Hero";
import Carousel from "./ui/carousel/Carousel";
import Equipe from "./ui/equipe/TeamCard";

export default function Home() {
    return (
        <main>
            <Hero />

            {/* <div aria-hidden="true" className="h-6 bg-white" /> */}

<section className="destaque">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-60 gap-y-10 text-center md:grid-cols-2 md:gap-y-8 md:text-left">
        <article className="flex flex-col items-center md:items-start">
            <h2>
                <strong className="font-medium">conhecimento</strong> e{" "}
                <strong className="font-medium">experiência</strong>
                <br />
                em materiais e processos
            </h2>

            <p className="mt-4 max-w-sm text-slate-600 md:mt-14">
                entendemos como criar soluções adequadas convertendo a intenção de um projeto de design para a realidade da fabricação
            </p>
        </article>

        <article className="flex flex-col items-center md:items-start">
            <h2>
                entendimento do <strong className="font-medium">contexto</strong>
            </h2>

            <p className="mt-4 max-w-sm text-slate-600 md:mt-12">
                sabemos como incluir fatores subjetivos como comportamento de uso, tendências e valores culturais na identidade do produto
            </p>
        </article>
    </div>
</section>

            <section className="como-fazemos-faixa" aria-labelledby="como-fazemos-titulo">
                <div className="como-fazemos mx-auto">
                    <h2 id="como-fazemos-titulo" className="font-bold text-3xl uppercase  md:text-4xl">
                        Como fazemos?
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

            <Carousel />
            <section className="w-full">
                <img
                    src="/Clientes.png"
                    alt="Clientes"  
                    className="w-full h-auto block"
                />
            </section>
            <Equipe/>
        </main>
    )
}