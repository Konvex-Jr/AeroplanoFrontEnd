import { NextRequest, NextResponse } from "next/server";
import { loginUserBodySchema } from "../schemas"

// Handler de Autenticão.

export async function POST(request: NextRequest){

    const parsed = loginUserBodySchema.safeParse(await request.json())

    if(!parsed.success) return NextResponse.json({ res: "Validation Error." }, { status: 422 })

    const { email, password } = parsed.data

    try {
        
        const res: Response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
            credentials: 'include'
        })
    
        const result = await res.json()
        
        if(res.status === 200) return NextResponse.json({ result }, { status: res.status })

        return NextResponse.json({ result }, { status: 200 })

    } catch (error: any) {

        return NextResponse.json({ message: error.message })
    }




}