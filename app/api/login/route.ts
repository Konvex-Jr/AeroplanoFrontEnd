import { NextRequest, NextResponse } from "next/server";
import { loginUserBodySchema } from "../schemas"
import { backendUrl } from "../backend"

// Handler de Autenticão.

// 1. Retornar Response se OK

export async function POST(request: NextRequest) {

    const parsed = loginUserBodySchema.safeParse(await request.json())

    if (!parsed.success) return NextResponse.json({ message: "Validation Error." }, { status: 400 })

    const { email, password } = parsed.data

    try {

        const res: Response = await fetch(backendUrl("/api/auth/login"), {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        })

        // O backend limita as tentativas de login (429). Sem isso, o admin veria
        // "senha incorreta" mesmo digitando a senha certa.
        if (res.status === 429) { return NextResponse.json({ message: "Muitas tentativas. Aguarde alguns minutos e tente novamente." }, { status: 429 }) }

        if (!res.ok) { return NextResponse.json({ message: "Usuário e/ou Senha Incorretos!" }, { status: 401 }) }

        // Repassa a resposta do backend como está: é ela que carrega os Set-Cookie
        // (access-token httpOnly + user-payload) para o browser.
        return res

    } catch (error: any) {

        console.log(error);

        return NextResponse.json({ message: "Ocorreu Algo de Errado." }, { status: 400 })
    }

}
