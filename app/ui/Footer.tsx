"use client"

import Image from "next/image"

import map_icon       from "@/public/icons/map_icon.svg"
import instagram_icon from "@/public/icons/instagram_icon.svg"
import email_icon     from "@/public/icons/email_icon.svg"

import Form from "./Form"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"
import AdminLock from "./AdminLock"

interface FooterProps {
    className?: string,
    id: string
}

export default function Footer({ className, id }: FooterProps){
    
    const iconClass = "size-5 min-[800px]:size-[30px] shrink-0"

    return (
        <div id={id} className={`${className ?? ""} bg-background-footer text-white relative bottom-0 w-full`}>

          <div className="w-full flex flex-col md:flex-row items-start md:items-stretch justify-center px-8 gap-3 lg:gap-32 pt-10 pb-4">
            
            {/* Contacts */}
            <div className="flex flex-col gap-6 text-center w-full md:py-8 px-4 lg:ml-20" >
                <div className="flex gap-2" >
                    <Image src={map_icon.src} width={30} height={30} className={iconClass} alt="Ícone de Pino de Mapa" />
                    <div className="text-start text-[3cqw] md:text-lg" >
                        <p>Rua Doutor João Colin, 1285, Sala 3</p>
                        <p>Joinville SC Brasil</p>
                    </div>
                </div>
                <div className="flex gap-4" >
                    <Image src={email_icon.src} width={30} height={30} className={iconClass} alt="Ícone de Email" />
                    <div className="text-start text-[3cqw] md:text-lg" >
                        <p>Contato@aeroplano.com.br</p>
                    </div>
                </div>
                <div className="flex gap-4" >
                    <Image src={instagram_icon.src} width={30} height={30} className={iconClass} alt="Ícone do Instagram" />
                <div className="text-start text-[3cqw] md:text-lg">
                    <Link
                        href="https://www.instagram.com/aeroplano_design/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        <p>aeroplano_design</p>
                    </Link>
                </div>
                </div>

                {/* texto fica no fluxo normal, sem ser empurrado */}
                <div className="flex flex-col items-start text-[3cqw] md:text-lg">
                    <p>Agende uma conversa</p>
                </div>

                {/* só o botão desce até o fim da coluna, alinhando com o Enviar */}
                <div className="mt-auto flex justify-start">
                    <Link 
                        href="https://wa.me/5547999626217"
                        target="_blank" 
                    >
                        <div className="w-[16cqw] h-[6cqw] lg:w-[8cqw] lg:h-[3cqw] flex items-center justify-center bg-green-600 hover:bg-green-700 rounded-4xl" >
                            <FaWhatsapp className="relative w-[65%] h-[65%]" />
                        </div>
                    </Link>
                </div>
            </div>

            {/* Forms */}
            <div className="w-full p-4 font-bold" >
                <Form />                
            </div>
          </div>

          {/* Cadeado escondido: acesso à área administrativa */}
          <div className="flex justify-end px-6 pb-3" >
              <AdminLock />
          </div>

        </div>
    )
}