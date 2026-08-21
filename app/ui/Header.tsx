
import fundo_header from "@/public/tela_inicial_fundo_2026_v2_recortada.webp"

export default function Header() {
  return (

    <header className="relative -top-20 md:-top-32 lg:-top-48 z-10 w-full @container text-white">
      
      <img 
        className="w-full h-full object-cover object-top block" 
        src={fundo_header.src} 
        alt="Imagem da Tela Inicial" 
      />

      <div className="absolute top-[30%] left-[18%] w-[80%] xl:top-[25%] flex flex-col gap-[2cqw]">
        
        <h1 className="relative font-bold left-1 text-[4cqw] w-[70%] xl:w-[40%] xl:text-[3.7cqw] leading-tight">
          criar produtos atraentes é a nossa essência
        </h1>
        
        <h2 className="font-normal text-[2.5cqw] leading-tight">
          e ideias criativas precisam ser viáveis
        </h2>
        
      </div>
    </header>
  );
}
