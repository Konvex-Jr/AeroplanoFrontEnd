"use client"

import Image from "next/image";

import fundo_header_mobile from "@/public/tela_inicial_fundo_2026_v2_mobile.webp"
import fundo_header_desktop from "@/public/tela_inicial_fundo_2026_v2_desktop.webp"

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {

  return (

    <header className="relative z-10 w-full @container text-white">
      
      {/* Troca feita via CSS para a altura já vir certa do servidor (evita salto de layout que quebra o scroll para #sobre/#contato) */}
      <Image
        src={fundo_header_mobile}
        alt="Imagem da Tela Inicial"
        priority
        sizes="100vw"
        className="w-full h-full object-cover object-top block lg:hidden"
      />
      <Image
        src={fundo_header_desktop}
        alt="Imagem da Tela Inicial"
        priority
        sizes="100vw"
        className="w-full h-full object-cover object-top hidden lg:block"
      />

      <Link 
        href="https://wa.me/5547999626217" 
        target="_blank"  
      >
        <div className="absolute right-[4cqw] bottom-[4cqw] w-[6cqw] lg:w-[4cqw] h-[6cqw] lg:h-[4cqw] flex items-center justify-center bg-green-600 hover:scale-110 transition-all duration-250 rounded-[50%]" >
          <FaWhatsapp className="relative w-[65%] h-[65%]" />
        </div>
      </Link>

      <div className="absolute top-[30%] left-[18%] w-[80%] lg:top-[25%] flex flex-col gap-[2cqw]">
        
      {/* Neo Sans Pro não tem variante condensed: o efeito vem do tracking negativo + scale-x */}
      <h1 className="relative font-bold left-1 text-[4.6cqw] lg:text-[2.6cqw] leading-tight tracking-[-0.03em] scale-x-[0.92] origin-left whitespace-nowrap">
        criar produtos atraentes<br />
        é a nossa essência
      </h1>

      <h1 className="relative left-1 text-[2.6cqw] w-[80%] lg:w-[50%] lg:text-[2.4cqw] leading-tight tracking-[-0.03em] scale-x-[0.92] origin-left">
         e ideias criativas precisam ser viáveis
      </h1>
        
      </div>
    </header>
  );
}