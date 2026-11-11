
import consultoria_bg       from "@/public/consultoria_1920_1080.png"
import design_grafico_bg    from "@/public/design_grafico_1920_1080.png"
import design_de_produto_bg from "@/public/design_de_produto_1920_1080.png"
import Image, { StaticImageData } from "next/image"

interface ServicesProps {
    className?: string
}

interface ServiceCardProp {
    title: string
    info:  string
    list:  string[]
    background: StaticImageData
}

const services: ServiceCardProp[] = [
    {
        title: "Design de Produto",
        info: "Cada projeto é executado num contexto único com foco em execução ágil, com melhor equilíbrio possível entre investimento e resultado",
        list: [
            "Conceito",
            "Geração de Alternativas",
            "Análise Preliminar de Execução (materiais e processos)",
            "Modelagem 3D",
            "Renderings | Simulação Virtual",
            "Mockup",
            "Protótipo",
            "Acompanhamento do Projeto Técnico"
        ],
        background: design_de_produto_bg
    },
    {
        title: "Design Gráfico",
        info: "",
        list: [
            "Linguagem Gráfica de Produtos",
            "Interfaces Gráficas",
            "Especificação de Cores, Acabamentos e Materiais",
            "Lógica de Uso",
            "Naming"
        ],
        background: design_grafico_bg
    },
    {
        title: "Consultoria",
        info: "",
        list: [
            "Design Thinking",
            "Estratégia de Marca no Produto",
            "Conversão de Atributos de Marca em Produto",
            "Análise de Portfólio e Posicionamento (funcionalidade, atratividade e competitividade)",
            "Avaliação de Usabilidade",
            "Avaliação de Qualidade Percebida"
        ],
        background: consultoria_bg
    }
]

function ServiceCard({ title, info, list, background, priority }: ServiceCardProp & { priority: boolean }) {
  return (
    <div className="relative w-full overflow-hidden bg-jet-black">
      <div className="relative aspect-video w-full">
        <Image
          // Só a 1ª imagem (acima da dobra) é carregada cedo; as demais ficam lazy.
          // PNG 1920x1080 em quality=100 pesava ~1MB cada: o otimizador entrega WebP/AVIF no tamanho certo.
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          src={background}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
      <div className="pointer-events-none absolute -bottom-1 inset-0 bg-linear-to-t from-background-footer to-transparent md:bg-none" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background-footer to-transparent md:bg-linear-to-r" />

      <div className="relative z-10 flex flex-col p-8 gap-4 text-white md:absolute md:inset-0 md:justify-top md:items-start md:text-left">
        <h2 className="text-[4cqw] md:text-xl lg:text-4xl">{title}</h2>
        { info && <p className="text-[3cqw] md:text-lg lg:text-2xl max-w-[120ch] md:max-w-sm">{info}</p> }

        <ul className="flex flex-col md:items-start">
          {list.map((item) => (
            <li key={item} className="text-[3cqw] md:text-lg lg:text-2xl">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services({ className }: ServicesProps){

    return (
        <section className={`${className ?? ""} flex flex-col gap-4 bg-background-footer`} >
            <h1 className="sr-only">Serviços</h1>
            { services.map((card, index) => {
                return <ServiceCard key={card.title} title={card.title} info={card.info} list={card.list} background={card.background} priority={index === 0} />
            }) }
        </section>
    )

}