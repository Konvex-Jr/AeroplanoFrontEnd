'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BotaoSaibaMaisProps {
    bio: string
}

export default function BotaoSaibaMais({ bio }: BotaoSaibaMaisProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="w-full max-w-md rounded-lg overflow-hidden">
      
      {/* Botão de Acionamento */}
      <button
        onClick={toggleOpen}
        className="w-full flex gap-3 cursor-pointer items-center p-4 hover:bg-gray-100 transition-colors text-gray-800"
      >
        <span className="text-xs md:text-lg" >{isOpen ? 'Ocultar detalhes' : 'Saiba mais'}</span>
        
        {/* Ícone de seta que rotaciona junto com o clique */}
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-5 h-5 text-gray-500"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      {/* Invólucro Animado */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="conteudo-saiba-mais"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* O padding fica dentro para não causar quebras na animação da altura */}
            <div className="p-4 text-xs md:text-lg text-slate-600 border-t border-gray-200">
              <p>
                { bio }
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}