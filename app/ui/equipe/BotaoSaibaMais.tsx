'use client';

import { useId, useState } from 'react';

interface BotaoSaibaMaisProps {
    bio: string
}

export default function BotaoSaibaMais({ bio }: BotaoSaibaMaisProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="w-full max-w-md rounded-lg overflow-hidden">

      {/* Botão de Acionamento */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex gap-3 cursor-pointer items-center p-4 hover:bg-gray-100 transition-colors text-gray-800"
      >
        <span className="text-xs md:text-lg" >{isOpen ? 'Ocultar detalhes' : 'Saiba mais'}</span>

        {/* Ícone de seta que rotaciona junto com o clique */}
        <svg
          aria-hidden="true"
          className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Painel: animação de altura só com CSS (grid 0fr -> 1fr), sem biblioteca de animação.
          `inert` quando fechado tira o conteúdo da ordem de tab e dos leitores de tela. */}
      <div
        id={panelId}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          {/* O padding fica dentro para não causar quebras na animação da altura */}
          <div className="p-4 text-xs md:text-lg text-slate-600 border-t border-gray-200">
            <p>
              { bio }
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
