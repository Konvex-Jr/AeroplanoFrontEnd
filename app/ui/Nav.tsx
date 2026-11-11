// Mobile  : Sandwich (MobileMenu, único trecho client)
// Desktop : Navigation (HTML puro, renderizado no servidor)
//
// Antes o Nav inteiro era client e não renderizava nada até medir a largura da janela
// (useWindowWidth), o que atrasava o conteúdo, gerava layout shift e puxava a lib de
// animação para o bundle inicial. Agora a troca mobile/desktop é feita só com CSS.

import Image from "next/image"
import Link from "next/link"

import logo_aeroplano from "@/public/logo_aero_2026_branco.webp"

import MobileMenu from "./MobileMenu"
import { navigation } from "./navigation"

interface NavProps {
    className?: string
}

export default function Nav({ className }: NavProps){

    return (
        <header className={`${className ?? ""} w-full top-0 left-0 flex justify-between items-center px-8 py-10 lg:py-16`} >

            {/* Imagem de Fundo */}
            <div className="absolute inset-0 w-full h-full -z-10 bg-linear-to-r from-nav-gradient-start to-nav-gradient-end overflow-hidden" aria-hidden="true" ></div>

            <Link href="/" className="z-20" aria-label="Aeroplano Design - Página inicial">
                <Image
                    className="h-[6cqw] lg:h-16 w-auto pl-1 lg:pl-7"
                    src={logo_aeroplano}
                    alt="Logo Aeroplano"
                    // O logo é exibido com ~64px de altura: não precisa da imagem de 3015px
                    sizes="(min-width: 1024px) 400px, 45vw"
                    loading="eager"
                    fetchPriority="high"
                />
            </Link>

            {/* Navigation Desktop (>= 960px) */}
            <nav aria-label="Principal" className="hidden min-[960px]:flex relative gap-8 z-20 md:pr-8">
                { navigation.map((elem) => (
                    <Link key={elem.href} className="text-white text-[1.4cqw] cursor-pointer hover:scale-110 transition-transform duration-200" href={elem.href} >{elem.text}</Link>
                )) }
            </nav>

            {/* Sandwich + Sidebar (< 960px) */}
            <MobileMenu />
        </header>
    )
}
