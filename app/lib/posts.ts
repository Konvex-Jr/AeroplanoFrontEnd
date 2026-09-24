// URL base da API do backend. Mesmo valor usado em app/api/backend.ts.
const API_URL = process.env.BACKEND_URL ?? "http://localhost:8000";

// Um post tem apenas: capa (data URI base64), título e descrição.
export interface Post {
    id: string
    title: string
    description: string
    image: string
}

interface GetAllPostsResponse {
    data: Post[]
}

/**
 * Busca os posts do blog diretamente no backend.
 * Usado em Server Components (ex: app/blog/page.tsx).
 *
 * @param search - Data opcional no formato YYYY-MM-DD para filtrar os posts.
 */
export async function getPosts(search?: string): Promise<Post[]> {

    const url = new URL("/api/posts", API_URL)
    if (search) url.searchParams.set("search", search)

    try {

        const res = await fetch(url.toString(), {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: "no-store"
        })

        // O backend retorna 422 (com AppError) quando não há posts cadastrados.
        if (!res.ok) return []

        const body: GetAllPostsResponse = await res.json()

        return body?.data ?? []

    } catch (error: any) {

        console.log(error);

        return []
    }
}
