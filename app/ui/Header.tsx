"use client"

import Image from "next/image";

import fundo_header_mobile from "@/public/tela_inicial_fundo_2026_v2_mobile.webp"
import fundo_header_desktop from "@/public/tela_inicial_fundo_2026_v2_desktop.webp"

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useWindowWidth } from "../lib/hooks/useWindowWidth";

export default function Header() {

  const width = useWindowWidth()

  return (

    <header className="relative z-10 w-full @container text-white">
      
      <Image
        src={width < 1024 ? fundo_header_mobile : fundo_header_desktop}
        alt="Imagem da Tela Inicial"
        priority
        sizes="100vw"
        className="w-full h-full object-cover object-top block"
      />

      <Link href={`https://wa.me/5547999626217`} >
        <div className="absolute right-[4cqw] bottom-[4cqw] w-[6cqw] lg:w-[4cqw] h-[6cqw] lg:h-[4cqw] flex items-center justify-center bg-green-600 hover:scale-110 transition-all duration-250 rounded-[50%]" >
          <FaWhatsapp className="relative w-[65%] h-[65%]" />
        </div>
      </Link>

      <div className="absolute top-[30%] left-[18%] w-[80%] lg:top-[25%] flex flex-col gap-[2cqw]">
        
      <h1 className="relative font-bold left-1 text-[4.6cqw] w-[70%] lg:w-[42%] lg:text-[2.6cqw] leading-tight tracking-tight">
        criar produtos atraentes é a nossa essência
      </h1>
               
      <h1 className="relative left-1 text-[2cqw] w-[60%] lg:w-[32%] lg:text-[2cqw] leading-tight tracking-tight">
         e ideias criativas precisam ser viáveis
      </h1>
        
      </div>
    </header>
  );
}