import { getImageProps } from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import fundo_header_mobile from "@/public/tela_inicial_fundo_2026_v2_mobile.webp"
import fundo_header_desktop from "@/public/tela_inicial_fundo_2026_v2_desktop.webp"

export default function Header() {

  // Art direction com <picture>: o navegador baixa APENAS a imagem do breakpoint atual
  // (antes as duas eram baixadas, com prioridade alta, e uma ficava escondida via CSS).
  // Server Component: nenhum JS do header vai para o bundle do cliente.
  const common = { alt: "", sizes: "100vw" }

  const { props: { srcSet: desktopSrcSet } } = getImageProps({
    ...common,
    src: fundo_header_desktop,
  })

  const { props: mobileProps } = getImageProps({
    ...common,
    src: fundo_header_mobile,
  })

  return (

    <div className="relative z-10 w-full @container text-white">

      {/* Imagem decorativa (o texto do hero está no HTML), por isso alt="" */}
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktopSrcSet} sizes="100vw" />
        <img
          {...mobileProps}
          alt=""
          // LCP: carrega cedo e com prioridade alta
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover object-top block"
        />
      </picture>

      <Link
        href="https://wa.me/5547999626217"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Aeroplano pelo WhatsApp (abre em nova aba)"
        className="absolute right-[4cqw] bottom-[4cqw] w-[6cqw] lg:w-[4cqw] h-[6cqw] lg:h-[4cqw] flex items-center justify-center bg-green-600 hover:scale-110 transition-transform duration-250 rounded-[50%]"
      >
        <FaWhatsapp aria-hidden="true" className="relative w-[65%] h-[65%]" />
      </Link>

      <div className="absolute top-[30%] left-[18%] w-[80%] lg:top-[25%] flex flex-col gap-[2cqw]">

      {/* Neo Sans Pro não tem variante condensed: o efeito vem do tracking negativo + scale-x */}
      <h1 className="relative font-bold left-1 text-[4.6cqw] lg:text-[2.6cqw] leading-tight tracking-[-0.03em] scale-x-[0.92] origin-left whitespace-nowrap">
        criar produtos atraentes<br />
        é a nossa essência
      </h1>

      {/* Só deve existir um <h1> por página: o subtítulo é um parágrafo */}
      <p className="relative left-1 text-[2.6cqw] w-[80%] lg:w-[50%] lg:text-[2.4cqw] leading-tight tracking-[-0.03em] scale-x-[0.92] origin-left">
         e ideias criativas precisam ser viáveis
      </p>

      </div>
    </div>
  );
}
