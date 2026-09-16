import { SubmitEvent } from "react";

export default function Form(){

    async function onSubmit(event: SubmitEvent<HTMLElement>){

        event.preventDefault()
        
        const form = new FormData(event.target)
        
        const name   = form.get('name') as string
        const email  = form.get('email') as string
        const need   = form.get('need') as string
        
        // Reset the Form
        event.target.reset()        

        // Enviar Requisição para Handler da API
        const res: Response = await fetch("api/resend", {
            method: "POST",
            body: JSON.stringify({ name, email, need })
        })

        const data = JSON.stringify(await res.json())

        console.log(data);

        if(res.ok) alert("Email enviado com sucesso.") // Só por enquanto!
    }

    return (
        <form className="flex flex-col gap-8 text-[3cqw] md:text-lg" onSubmit={(e) => { onSubmit(e) }} >

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
