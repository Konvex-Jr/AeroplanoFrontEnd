
import fundo_header from "@/public/tela_inicial_fundo_2026_v2.webp"
import Image from "next/image";

export default function Header() {
  return (

    <header className="absolute -top-12 md:-top-32 lg:-top-56 xl:-top-86 w-full @container text-white">
      
      <Image 
        className="w-full h-auto block object-cover" 
        src={fundo_header.src} 
        alt="Imagem da Tela Inicial" 
      />

      <div className="absolute top-[50%] left-[18%] w-[50%] xl:top-[45%] flex flex-col gap-[2cqw]">
        
        <h1 className="relative font-bold left-1 text-[4cqw] xl:w-2xl leading-tight">
          criar produtos atraentes é a nossa essência
        </h1>
        
        <h2 className="font-normal text-[2.5cqw] leading-tight">
          e ideias criativas precisam ser viáveis
        </h2>
        
      </div>
    </header>
  );
}