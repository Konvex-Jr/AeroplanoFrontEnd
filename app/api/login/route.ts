import { NextRequest, NextResponse } from "next/server";
import { loginUserBodySchema } from "../schemas"

// Handler de Autenticão.

// 1. Retornar Response se OK

export async function POST(request: NextRequest){

    const parsed = loginUserBodySchema.safeParse(await request.json())

    if(!parsed.success) return NextResponse.json({ message: "Validation Error." }, { status: 400 })

    const { email, password } = parsed.data

    try {
        
        const res: Response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        })

        if(!res.ok){ return NextResponse.json({ message: "Usuário e/ou Senha Incorretos!" }, { status: 401 }) }

        return res

    } catch (error: any) {

        console.log(error);

        return NextResponse.json({ message: "Ocorreu Algo de Errado." }, { status: 400 })
    }




}