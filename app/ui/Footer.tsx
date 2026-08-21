"use client"

import Image from "next/image"

import map_icon       from "@/public/icons/map_icon.svg"
import phone_icon     from "@/public/icons/phone_icon.svg"
import instagram_icon from "@/public/icons/instagram_icon.svg"
import email_icon     from "@/public/icons/email_icon.svg"


import { useWindowWidth } from "../lib/hooks/useWindowWidth"
import Form from "./Form"

interface FooterProps {
    className: string
}

export default function Footer({ className }: FooterProps){
    
    const width = useWindowWidth()

    if(width === 0) return

    const iconSize = width < 800 ? 20 : 30
    
    return (
        <div className={`${className} bg-background-footer text-white font-bold`}>
            
            {/* Contacts */}
            <div className="flex flex-col gap-6 text-center w-full py-8 md:ml-20 lg:ml-32" >
                <div className="flex gap-2" >
                    <Image src={map_icon.src} width={0} height={0} style={{ width: iconSize, height: iconSize }} alt="Ícone de Pino de Mapa" />
                    <div className="text-start text-[2cqw] md:text-lg" >
                        <p>Rua Doutor João Colin, 1285, Sala 3</p>
                        <p>Joinville SC Brasil</p>
                    </div>
                </div>
                <div className="flex gap-4" >
                    <Image src={phone_icon.src} width={0} height={0} style={{ width: iconSize, height: iconSize }} alt="Ícone de Telefone" />
                    <div className="text-start text-[2cqw] md:text-lg" >
                        <p>(47) 99962-6217</p>
                    </div>
                </div>
                <div className="flex gap-4" >
                    <Image src={phone_icon.src} width={0} height={0} style={{ width: iconSize, height: iconSize }} alt="Ícone de Telefone" />
                    <div className="text-start text-[2cqw] md:text-lg" >
                        <p>(47) 99108-5092</p>
                    </div>
                </div>
                <div className="flex gap-4" >
                    <Image src={instagram_icon.src} width={0} height={0} style={{ width: iconSize, height: iconSize }} alt="Ícone do Instagram" />
                    <div className="text-start text-[2cqw] md:text-lg" >
                        <p>aeroplano_design</p>
                    </div>
                </div>
                <div className="flex gap-4" >
                    <Image src={email_icon.src} width={0} height={0} style={{ width: iconSize, height: iconSize }} alt="Ícone de Email" />
                    <div className="text-start text-[2cqw] md:text-lg" >
                        <p>Contato@aeroplano.com.br</p>
                    </div>
                </div>
            </div>

            {/* Forms */}
            <div className="w-full p-4" >
                <Form />                
            </div>
        </div>
    )
}