import Link from "next/link";

import sidebar_background from "@/public/sidebar_background.webp"

export function SideBar(){

    return (
        <>
        <img className="absolute right-0 top-0 z-10" src={sidebar_background.src} alt="" />
        <div className={`flex flex-col items-start justify-start right-0 pr-8  z-10`} >
            <Link href={`/`} >INICIO</Link>
            <Link href={`/servicos`} >SERVIÇOS</Link>
            <Link href={`/projetos`} >PROJETOS</Link>
            <Link href={`/blog`}>BLOG</Link>
        </div>
        </>
    )

}