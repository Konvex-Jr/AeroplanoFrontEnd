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
        <div>

            <Nav className="relative" />

            <Blog posts={posts} isAdmin={isAdmin} />

            <Footer id="#footer" />
        </div>
    )
}
