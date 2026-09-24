import { getPosts } from "../lib/posts";
import Blog from "../ui/Blog";
import Footer from "../ui/Footer";
import Nav from "../ui/Nav";
import { getServerUserPayload } from "../lib/session";

export default async function Page(){

    // Lido no servidor para a página já sair com (ou sem) os controles de edição,
    // sem "piscar". É só exibição: o backend valida o token em cada operação.
    const userPayload = await getServerUserPayload()
    const isAdmin = userPayload?.userRole === "admin"

    const posts = await getPosts()

    return (
        // flex-1 + main flex-1: ocupa a altura toda do body e empurra o footer para o fim da página
        <div className="flex flex-col flex-1">

            <Nav className="relative" />

            <main className="flex-1">
                <Blog posts={posts} isAdmin={isAdmin} />
            </main>

            <Footer id="#footer" />
        </div>
    )
}
