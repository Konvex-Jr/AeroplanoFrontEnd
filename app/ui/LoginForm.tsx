"use client"

import { SubmitEvent } from "react";
import { getUserPayload, getAccessToken } from "../api/auth";
import { useRouter } from "next/navigation";

export default function LoginForm(){

    const router = useRouter()

    async function onSubmit(event: SubmitEvent<HTMLElement>){

        event.preventDefault()
        
        const form = new FormData(event.target)
        
        const email    = form.get('email') as string
        const password = form.get('password') as string      

        // Enviar Requisição para Handler da API
        const res: Response = await fetch("api/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email, password })
        })

        const userPayload = getUserPayload()

        if(res.status == 200 && userPayload){
            
            // [ ] Utilizar um Toast
            alert("Usuário Logado com Sucesso!")
            
            router.replace('/blog')
            
            return
        } 

        if(res.status == 401){

            // [ ] Utilizar um Toast
            alert("Usuário e/ou Senha Incorretos!")
            return
        }

        // [ ] Utilizar um Toast
        alert("Ops! Algo deu Errado!")
        return
    }

    return (
        <form className="flex flex-col items-center justify-center w-full gap-8 text-[3cqw] md:text-lg" onSubmit={(e) => { onSubmit(e) }} >

            <div className="flex flex-col gap-1 px-6 w-full lg:w-[40%]">
                <label className="text-start" htmlFor="email">Email</label>
                <input className="bg-white border-0 p-2 text-black font-normal outline-0 w-full" type="email" name="email" id="email" required />
            </div>

            <div className="flex flex-col items-start gap-1 px-6 w-full lg:w-[40%]">
                <label htmlFor="name">Senha</label>
                <input className="bg-white border-0 p-2 text-black font-normal outline-0 w-full" type="password" name="password" id="password" required />
            </div>

            <button className="flex justify-center border-2 border-white hover:bg-gray-600 w-[20%] px-2 cursor-pointer" type="submit" >Login</button>

        </form>
    )

}

// Fluxo de Submit do Formulário

// 1. Envia para HANDLER do Componente
// 2. Envia para HANDLER da API
// 3. Envia a REQUISIÇÃO