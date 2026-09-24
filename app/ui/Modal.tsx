"use client"

import { ReactNode, useEffect } from "react";

interface ModalProps {
    onClose:         () => void
    label:           string
    children:        ReactNode
    // Classes do painel (largura máxima e fundo).
    panelClassName?: string
    // Classe de z-index do overlay.
    zIndex?:         string
}

// Overlay + painel centralizado. Fecha ao clicar fora ou apertar Esc.
export default function Modal({ onClose, label, children, panelClassName = "max-w-4xl bg-white", zIndex = "z-50" }: ModalProps){

    useEffect(() => {

        const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose() }

        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)

    }, [onClose])

    return (
        <div className={`fixed inset-0 ${zIndex} flex items-center justify-center bg-black/60 p-4`} role="dialog" aria-modal="true" aria-label={label} onClick={onClose} >
            <div className={`relative w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-xl ${panelClassName}`} onClick={(e) => e.stopPropagation() } >
                {children}
            </div>
        </div>
    )
}
