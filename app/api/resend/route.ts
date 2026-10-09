import { NextRequest, NextResponse } from "next/server";
import { sendEmailBodySchema } from "../schemas";
import { CreateEmailResponse, Resend } from 'resend';
import { config } from "dotenv";
import { resend } from "@/app/lib/resend";

config()

// Handler da ResendAPI.

export async function POST(request: NextRequest){

    const parsed = sendEmailBodySchema.safeParse(await request.json())

    if(!parsed.success) return NextResponse.json({ message: "Validation Error." }, { status: 422 })

    const { name, email, need  } = parsed.data

    if(!process.env.EMAIL_FROM || !process.env.EMAIL_TO) return
    
    // Realiza uma REQUISIÇÃO para a API da Resend
    const res: CreateEmailResponse = await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: [ process.env.EMAIL_TO ],
        subject: `Novo Contato de ${name}`,
        html: (`
            <div>
                <p>Remetente: <strong>${email}</strong></p>
                <p>Necessidade: <strong>${need}</strong></p>
            </div>
        `)
    });

    if(res.error) return NextResponse.json({ message: "Algo deu errado," }, { status: 500 })

    return NextResponse.json({ message: "Email enviado com sucesso." }, { status: 200 })

}