"use client"

// Mobile  : Sandwich
// Desktop : Navigation

import {  AnimatePresence, motion, Variants } from "motion/react"

import logo_aeroplano from "@/public/logo_aero_2026_branco.webp"

import sandwich_icon from "@/public/icons/sandwich_icon.svg"
import close_sidebar_icon from "@/public/icons/x-solid-full.svg"

import Link from "next/link"
import { useState } from "react"
import { useWindowWidth } from "@/app/lib/hooks/useWindowWidth"

const MAX_WIDTH = 960

const navigation = [
    {
        href: '/',
        text: "INÍCIO"
    },
    {
        href: '/servicos',
        text: "SERVIÇOS"
    },
    {
        href: '/portfolio',
        text: "PORTFÓLIO"
    },
    {
        href: '/#sobre',
        text: "SOBRE"
    },
    {
        href: '/blog',
        text: "BLOG"
    },
    {
        href: '/#contato',
        text: "CONTATO"
    }
]

interface NavProps {
    className?: string
}

export default function Nav({ className }: NavProps){
    
    const [ open, setSideBar ] = useState(false)

    const width = useWindowWidth()


    if(width === 0) return

    function openSidebar(){
        setSideBar(true)
    }

    function closeSidebar(){
        setSideBar(false)
    }

    const sidebarVariants: Variants = {
        hidden: { 
            x: '100%' // Fora da Tela
        },
        visible: { 
            x: '0',     // Posição Original (borda direita)
            transition: { type: 'tween', duration: 0.3, ease: 'easeOut' }
        },
        exit: { 
            x: '100%', // Volta para Fora da Tela
            transition: { type: 'tween', duration: 0.3, ease: 'easeIn' }
        }
    }

    const overlayVariants: Variants = {
        hidden: { 
            opacity: 0 // Começa Invisível
        },
        visible: { 
            opacity: 1, // Fica Totalmente Visível (com o bg-black/40)
            transition: { duration: 0.3 }
        },
        exit: { 
            opacity: 0, // Volta a Ficar Invisível
            transition: { duration: 0.3 }
        }
    };

    return (    
        <>  
            {/* Navigation Desktop */}
            <div className={`${className} w-full top-0 left-0 flex justify-between items-center px-8 py-10 lg:py-16`} >

                {/* Imagem de Fundo */}
                <div className="absolute inset-0 w-full h-full -z-10 bg-linear-to-r from-nav-gradient-start to-nav-gradient-end overflow-hidden" ></div>
            
                <Link href="/" className="z-20">
                    <img className="h-[6cqw] lg:h-16 pl-1 lg:pl-7 lg" src={logo_aeroplano.src} alt="Logo Aeroplano" />
                </Link>
                
                {/* Sandwich to Open Sidebar */}
                { width < MAX_WIDTH && <img className="pr-2 cursor-pointer z-20" src={sandwich_icon.src} alt="Ícone de Sanduíche" onClick={() => openSidebar() } /> }
        
                {/* Navigation Desktop */}
                <div className={`${ width < MAX_WIDTH ? `hidden` : 'flex relative gap-8 z-20 md:pr-8' }`}>
                    { navigation.map((elem, index) => {
                        return <Link key={index} className="text-white text-[1.4cqw] cursor-pointer hover:scale-110 transition-all duration-200" href={elem.href} >{elem.text}</Link>
                    }) }
                </div>
            </div>

            <AnimatePresence>
            { open && (
                <>
                    {/* Overlay  */}
                    <motion.div
                        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
                        key="overlay"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible" 
                        exit="exit"      
                        onClick={() => closeSidebar() }
                        aria-hidden="true"                         
                    />

                    {/* Sidebar */}
                    <motion.div
                        className="fixed flex flex-col items-center justify-center gap-8 right-0 top-0 w-48 h-full bg-linear-to-r from-gradient-start to-gradient-end text-white z-50" 
                        key="sidebar"
                        variants={sidebarVariants} 
                        initial="hidden" 
                        animate="visible"
                        exit="exit"
                        role="dialog"
                        aria-modal="true"
                        transition={{type: "tween", 
                        duration: 0.35, ease: "easeOut"}} 
                    >                
                        <img className="h-8 absolute cursor-pointer right-12 top-18 z-52" src={close_sidebar_icon.src} alt="Ícone X" onClick={() => closeSidebar() } />
                            <div className={`flex flex-col items-center justify-center gap-12 h-full right-0 pr-8  z-50`} >
                                { navigation.map((elem, index) => {
                                    return (
                                            <Link key={index} className="text-white cursor-pointer hover:scale-120 transition-all duration-75" href={elem.href} onClick={() => closeSidebar() } >{elem.text}</Link>
                                    )
                                }) }
                            </div>
                    </motion.div>
                </>
            )
            }
            </AnimatePresence>

        </>
    )
}