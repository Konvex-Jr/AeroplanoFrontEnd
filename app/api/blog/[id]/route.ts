import { NextRequest, NextResponse } from "next/server";
import { backendUrl, relay } from "../../backend";

// Handler de um Post específico — edição e exclusão, admin only
// (validado no backend via cookie httpOnly 'access-token').

type Context = { params: Promise<{ id: string }> }

// Edição. Body JSON: { title, description, image? } — sem image, o backend mantém a capa atual.

export async function PUT(request: NextRequest, { params }: Context) {

    try {

        const { id } = await params
        const { title, description, image } = await request.json()

        const cookie = request.headers.get('cookie') ?? ''

        const res: Response = await fetch(backendUrl(`/api/posts/${encodeURIComponent(id)}`), {
            method: "PUT",
            headers: { 'Content-Type': 'application/json', cookie },
            body: JSON.stringify({ title, description, image }),
        })

        return relay(res)

    } catch (error: any) {

        console.log(error);

        return NextResponse.json({ message: "Ocorreu Algo de Errado." }, { status: 400 })
    }

}

// Exclusão.

export async function DELETE(request: NextRequest, { params }: Context) {

    try {

        const { id } = await params

        const cookie = request.headers.get('cookie') ?? ''

        const res: Response = await fetch(backendUrl(`/api/posts/${encodeURIComponent(id)}`), {
            method: "DELETE",
            headers: { cookie },
        })

        return relay(res)

    } catch (error: any) {

        console.log(error);

        return NextResponse.json({ message: "Ocorreu Algo de Errado." }, { status: 400 })
    }

}
