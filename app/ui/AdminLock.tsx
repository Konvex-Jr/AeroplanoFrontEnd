"use client"

// Cadeado escondido no rodapé: porta de entrada da área administrativa.
// Deslogado: abre o login. Logado: encerra a sessão.

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { getUserPayload } from "../api/auth";
import LoginModal from "./LoginModal";

export default function AdminLock(){

    const router = useRouter()

    const [ logged, setLogged ]       = useState(false)
    const [ loginOpen, setLoginOpen ] = useState(false)

    // O cookie 'user-payload' só é legível no client, depois de montar.
    useEffect(() => {
        setLogged(getUserPayload() !== null)
    }, [])

    async function logout(){

        try {

            const res = await fetch("/api/logout", { method: "POST", credentials: "include" })

            if (res.ok) {
                setLogged(false)
                router.refresh()
            }

        } catch (error) {
            console.log(error)
        }
    }

    function onLoginSuccess(){
        setLoginOpen(false)
        setLogged(true)

        // Re-renderiza os Server Components com o cookie novo (ex: botões de edição do blog).
        router.refresh()
    }

    return (
        <>
            {/* Baixo contraste de propósito: fica quase invisível sobre o fundo do rodapé. */}
            <button
                type="button"
                aria-label={ logged ? "Sair da área administrativa" : "Área administrativa" }
                onClick={() => { logged ? logout() : setLoginOpen(true) } }
                className="p-2 text-white/20 hover:text-white/60 focus-visible:text-white/60 transition-colors cursor-pointer"
            >
                { logged ? <FaLockOpen size={14} /> : <FaLock size={14} /> }
            </button>

            { loginOpen && <LoginModal onClose={() => setLoginOpen(false)} onSuccess={onLoginSuccess} /> }
        </>
    )
}
