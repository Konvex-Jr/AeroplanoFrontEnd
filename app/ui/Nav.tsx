"use client"

// Mobile  : Sandwich
// Desktop : Navigation

import { AnimatePresence, motion } from "motion/react"
import logo_aeroplano from "@/public/logo_aero_2026_branco.webp"
import sandwich_icon from "@/public/icons/sandwich_icon.svg"
import close_sidebar_icon from "@/public/icons/x-solid-full.svg"
import Link from "next/link"
import { useEffect, useState } from "react"
import { SideBar } from "./SideBar"
import { useWindowWidth } from "@/app/lib/hooks/useWindowWidth"

export default function Nav(){
    
    const [ open, setSideBar ] = useState(false)

    const width = useWindowWidth()

    if(width === 0) return

    console.log(width);

    function openSideBar(){
        setSideBar(true)
    }

    function closeSideBar(){
        setSideBar(false)
    }

    return (
        <>
            <div className="relative flex justify-between px-4 py-4 z-10" >
                <img className="h-6" src={logo_aeroplano.src} alt="" />
                { width < 800 && <img src={sandwich_icon.src} alt="" onClick={() => openSideBar() } /> }
                <div className={`${ width < 800 ? `hidden` : 'flex relative gap-8' }`}>
                    <Link href={`/`} >INICIO</Link>
                    <Link href={`/servicos`} >SERVIÇOS</Link>
                    <Link href={`/projetos`} >PROJETOS</Link>
                    <Link href={`/blog`}>BLOG</Link>
                </div>
            </div>

            { open ? (
                <>                
                    <img className="h-6 absolute right-4 top-4  z-12" src={close_sidebar_icon.src} alt="" onClick={() => closeSideBar() } />
                    <SideBar />
                </>
            ) : '' }

        </>
    )
}