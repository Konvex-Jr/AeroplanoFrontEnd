import { NextRequest, NextResponse } from "next/server";
import { sendEmailBodySchema } from "../schemas";
import { CreateEmailResponse, Resend } from 'resend';
import { config } from "dotenv";

config()

// Handler da ResendAPI.

export async function POST(request: NextRequest){

    const parsed = sendEmailBodySchema.safeParse(await request.json())

    if(!parsed.success) return NextResponse.json({ message: "Validation Error." }, { status: 422 })

    const { name, email, need  } = parsed.data

    // Configurar Subdomínio para konvex.com.br

    // Enviar para Email da Aeroplano: ''

    // Por enquanto deixa desabilitado!

    return NextResponse.json({ message: "Email enviado com sucesso." }, { status: 200 })

    const emailFrom = 'onboarding@resend.dev'
    const emailToSend = 'email@example.com'

    // Logs da Requisição
    console.log("Name : ", name);
    console.log("Email: ", email);
    console.log("Need : ", need);

    // Realiza uma REQUISIÇÃO para a API da Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    const res: CreateEmailResponse = await resend.emails.send({
        from: emailFrom,
        to: [ emailToSend ],
        subject: `Novo Email de ${name}`,
        html: (`
            <p>Remetente: <strong>${email}</strong></p>
            <p>Necessidade: <strong>${need}</strong></p>
        `)
    });

    if(res.error) return NextResponse.json({ message: "Algo deu errado," }, { status: 500 })

    return NextResponse.json({ message: "Email enviado com sucesso." }, { status: 200 })

}