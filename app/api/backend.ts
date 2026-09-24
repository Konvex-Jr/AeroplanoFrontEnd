import { NextResponse } from "next/server";

// URL base do backend. Mesmo valor usado em app/lib/posts.ts.
export const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:8000";

export function backendUrl(path: string): string {
    return new URL(path, BACKEND_URL).toString();
}

// Repassa status + corpo do backend para o browser sem carregar cabeçalhos
// de transporte (content-length, content-encoding...) da resposta original.
export async function relay(res: Response): Promise<NextResponse> {
    const text = await res.text();

    return new NextResponse(text || null, {
        status: res.status,
        headers: { "Content-Type": res.headers.get("content-type") ?? "application/json" },
    });
}
