"use client"

import Image from "next/image"

import map_icon       from "@/public/icons/map_icon.svg"
import instagram_icon from "@/public/icons/instagram_icon.svg"
import email_icon     from "@/public/icons/email_icon.svg"


import { useWindowWidth } from "../lib/hooks/useWindowWidth"
import Form from "./Form"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

interface FooterProps {
    className?: string,
    id: string
}

export default function Footer({ className, id }: FooterProps){
    
    const width = useWindowWidth()

    if(width === 0) return

    const iconSize = width < 800 ? 20 : 30
    
    return (
        <div id={id} className={`${className} bg-background-footer text-white relative bottom-0 w-full flex flex-col md:flex-row items-start justify-center px-8 gap-3 lg:gap-32 py-10`}>
            
            {/* Contacts */}
            <div className="flex flex-col gap-6 text-center w-full md:py-8 px-4 lg:ml-20" >
                <div className="flex gap-2" >
                    <Image src={map_icon.src} width={0} height={0} style={{ width: iconSize, height: iconSize }} alt="Ícone de Pino de Mapa" />
                    <div className="text-start text-[3cqw] md:text-lg" >
                        <p>Rua Doutor João Colin, 1285, Sala 3</p>
                        <p>Joinville SC Brasil</p>
                    </div>
                </div>
                <div className="flex gap-4" >
                    <Image src={email_icon.src} width={0} height={0} style={{ width: iconSize, height: iconSize }} alt="Ícone de Email" />
                    <div className="text-start text-[3cqw] md:text-lg" >
                        <p>Contato@aeroplano.com.br</p>
                    </div>
                </div>
                <div className="flex gap-4" >
                    <Image src={instagram_icon.src} width={0} height={0} style={{ width: iconSize, height: iconSize }} alt="Ícone do Instagram" />
                    <div className="text-start text-[3cqw] md:text-lg" >
                        <p>aeroplano_design</p>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4" >
                    <div className="flex flex-col justify-center gap-2 text-[3cqw] md:text-lg">
                        <p>Agende uma conversa</p>
                        <Link className="flex justify-center" href={`https://wa.me/5547999626217`} >
                            <div className=" w-[16cqw] h-[6cqw] lg:w-[8cqw] lg:h-[3cqw] flex items-center justify-center bg-green-600 hover:bg-green-700 rounded-4xl" >
                                <FaWhatsapp className="relative w-[65%] h-[65%]" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Forms */}
            <div className="w-full p-4 font-bold" >
                <Form />                
            </div>
        </div>
    )
}