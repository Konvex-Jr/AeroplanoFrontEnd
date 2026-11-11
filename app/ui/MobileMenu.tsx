"use client"

// Menu lateral do mobile. Animação feita com transições CSS (sem lib de animação),
// o que tira ~100KB de JS do carregamento inicial.

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import { navigation } from "./navigation"

export default function MobileMenu(){

    const [ open, setOpen ] = useState(false)

    const openButtonRef  = useRef<HTMLButtonElement>(null)
    const closeButtonRef = useRef<HTMLButtonElement>(null)

    // Esc fecha o menu; foco vai para o botão de fechar ao abrir e volta ao sanduíche ao fechar.
    useEffect(() => {

        if (!open) return

        closeButtonRef.current?.focus()

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setOpen(false)
                openButtonRef.current?.focus()
            }
        }

        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)

    }, [open])

    function close(){
        setOpen(false)
    }

    return (
        <div className="min-[960px]:hidden">

            {/* Sandwich to Open Sidebar */}
            <button
                ref={openButtonRef}
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Abrir menu"
                aria-expanded={open}
                aria-controls="menu-lateral"
                className="relative z-20 flex size-11 items-center justify-center cursor-pointer"
            >
                <svg width="30" height="17" viewBox="0 0 30 17" fill="none" aria-hidden="true">
                    <rect width="30" height="3" rx="1.5" fill="white" />
                    <rect y="7" width="30" height="3" rx="1.5" fill="white" />
                    <rect y="14" width="30" height="3" rx="1.5" fill="white" />
                </svg>
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={close}
                aria-hidden="true"
            />

            {/* Sidebar — fechada fica `inert` (fora da ordem de tab e dos leitores de tela) */}
            <div
                id="menu-lateral"
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
                inert={!open}
                className={`fixed right-0 top-0 z-50 flex h-full w-48 flex-col items-center justify-center bg-linear-to-r from-gradient-start to-gradient-end text-white transition-[transform,visibility] duration-300 ease-out ${open ? "translate-x-0 visible" : "translate-x-full invisible"}`}
            >
                <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={close}
                    aria-label="Fechar menu"
                    className="absolute right-8 top-16 z-52 flex size-11 items-center justify-center cursor-pointer"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" className="size-7" aria-hidden="true">
                        <path d="M5 5l14 14M19 5L5 19" />
                    </svg>
                </button>

                <nav aria-label="Menu principal" className="flex h-full flex-col items-center justify-center gap-12 pr-8">
                    { navigation.map((elem) => (
                        <Link key={elem.href} className="text-white cursor-pointer hover:scale-120 transition-transform duration-75" href={elem.href} onClick={close} >{elem.text}</Link>
                    )) }
                </nav>
            </div>

        </div>
    )
}
