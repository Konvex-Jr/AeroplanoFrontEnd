import { SubmitEvent } from "react";

export default function Form(){

    async function onSubmit(event: SubmitEvent<HTMLElement>){

        event.preventDefault()

        const formData = new FormData(event.target)

        for(const entry of formData.entries()){
            console.log(entry);
        }
        
        event.target.reset()

        alert("Enviado com sucesso!")

    }

    return (
        <form className="flex flex-col gap-8 text-[2cqw] md:text-lg" onSubmit={(e) => { onSubmit(e) }} >

            <div className="flex flex-col items-start gap-1">
                <label htmlFor="name">Seu nome</label>
                <input className="bg-white border-0 p-2 text-black font-normal outline-0 w-full lg:w-[80%]" type="text" name="name" id="name" required />
            </div>

            <div className="flex flex-col items-start gap-1">
                <label htmlFor="email">E-mail</label>
                <input className="bg-white border-0 p-2 text-black font-normal outline-0 w-full lg:w-[80%]" type="email" name="email" id="email" required />
            </div>

            <div className="flex flex-col items-start gap-1">
                <label htmlFor="need">Do que você precisa?</label>
                <textarea className="bg-white border-0 p-2 text-black font-normal outline-0 w-full lg:w-[80%]" name="need" id="need" required />
            </div>

            <button className="flex justify-center border-2 border-white hover:bg-gray-600 w-[50%] px-2 cursor-pointer" type="submit" >Enviar</button>

        </form>
    )

}

// Fluxo de Submit do Formulário

// 1. Envia para HANDLER do Componente
// 2. Envia para HANDLER da API
// 3. Envia a REQUISIÇÃO