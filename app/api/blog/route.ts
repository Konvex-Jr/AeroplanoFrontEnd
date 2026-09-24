import { NextRequest, NextResponse } from "next/server";
import { backendUrl, relay } from "../backend";

// Handler de Posts.

export async function GET(request: NextRequest) {

    const search = request.nextUrl.searchParams.get("search")

    const url = new URL(backendUrl("/api/posts"))
    if (search) url.searchParams.set("search", search)

    try {

        const res: Response = await fetch(url.toString(), {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
            cache: "no-store",
        })

        return relay(res)

    } catch (error: any) {

        console.log(error);

        return NextResponse.json({ message: "Ocorreu Algo de Errado." }, { status: 400 })
    }

}

// Cadastro de Post — admin only (validado no backend via cookie httpOnly 'access-token').
// Body JSON: { title, description, image } onde image é um data URI base64.

export async function POST(request: NextRequest) {

    try {

        const { title, description, image } = await request.json()

        // Repassa o cookie da requisição original para o backend, já que o
        // fetch server-to-server não herda automaticamente os cookies do browser.
        const cookie = request.headers.get('cookie') ?? ''

        const res: Response = await fetch(backendUrl("/api/posts"), {
            method: "POST",
            headers: { 'Content-Type': 'application/json', cookie },
            body: JSON.stringify({ title, description, image }),
        })

        return relay(res)

    } catch (error: any) {

        console.log(error);

        return NextResponse.json({ message: "Ocorreu Algo de Errado." }, { status: 400 })
    }

}
