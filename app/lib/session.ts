import { cookies } from "next/headers";
import type { JwtPayload } from "../api/auth";

/**
 * Lê o payload do usuário logado a partir do cookie 'user-payload'.
 * Uso exclusivo em Server Components / Route Handlers (usa next/headers).
 * Para uso no client, veja getUserPayload em app/api/auth.ts.
 */
export async function getServerUserPayload(): Promise<JwtPayload | null> {
    try {

        const cookieStore = await cookies();
        const raw = cookieStore.get('user-payload')?.value;

        if (!raw) return null;
        return JSON.parse(atob(raw));
    } catch {
        return null;
    }
}
