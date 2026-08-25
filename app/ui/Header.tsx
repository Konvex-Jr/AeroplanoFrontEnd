"use client"

import fundo_header_mobile from "@/public/tela_inicial_fundo_2026_v2_recortada.webp"
import fundo_header_desktop from "@/public/tela_inicial_fundo_2026_v2_rerecortada.webp"

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useWindowWidth } from "../lib/hooks/useWindowWidth";

export default function Header() {

  const width = useWindowWidth()

  return (

    <header className="relative z-10 w-full @container text-white">
      
      <img 
        className="w-full h-full object-cover object-top block" 
        src={width < 1024 ? fundo_header_mobile.src : fundo_header_desktop.src} 
        alt="Imagem da Tela Inicial" 
      />

      <Link href={`https://wa.me/5547999626217`} >
        <div className="absolute right-[4cqw] bottom-[4cqw] w-[6cqw] lg:w-[4cqw] h-[6cqw] lg:h-[4cqw] flex items-center justify-center bg-green-600 hover:bg-green-700 rounded-[50%]" >
          <FaWhatsapp className="relative w-[65%] h-[65%]" />
        </div>
      </Link>

      <div className="absolute top-[30%] left-[18%] w-[80%] lg:top-[25%] flex flex-col gap-[2cqw]">
        
        <h1 className="relative font-bold left-1 text-[4cqw] w-[70%] lg:w-[40%] lg:text-[2cqw] leading-tight">
          criar produtos atraentes é a nossa essência
        </h1>
        
        <h2 className="font-normal text-[2cqw] leading-tight">
          e ideias criativas precisam ser viáveis
        </h2>
        
      </div>
    </header>
  );
}
