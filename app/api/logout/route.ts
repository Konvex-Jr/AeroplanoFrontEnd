import { NextResponse } from "next/server";

// Handler de Logout.
// O cookie 'access-token' é httpOnly (o browser não consegue apagá-lo sozinho),
// então a remoção precisa vir do servidor.

export async function POST() {

    const res = NextResponse.json({ message: "Logout realizado com sucesso." })

    res.cookies.delete("access-token")
    res.cookies.delete("user-payload")

    return res
}
