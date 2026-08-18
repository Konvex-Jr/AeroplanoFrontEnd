// Mobile  : Sandwich
// Desktop : Navigation

import sandwich_icon from "@/public/icons/sandwich_icon.svg"

import logo_aeroplano from "@/public/logo_aero_2026_branco.webp"

export default function Nav(){
    return (
        <div className="relative flex justify-between px-4 py-4 z-10" >
            <img className="h-6" src={logo_aeroplano.src} alt="" />
            <img src={sandwich_icon.src} alt="" />
        </div>
    )
}