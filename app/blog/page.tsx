import { cookies } from "next/headers"
import { posts } from "../api/getPosts";
import Blog from "../ui/Blog";
import Footer from "../ui/Footer";
import Nav from "../ui/Nav";

export default async function Page(){
    
    const cookieStore = await cookies()

    const token = cookieStore.get('access-token')

    console.log(token ?? 'Não há token!');
    
    return (
        <div>

            <Nav className="relative" />
        
            {/* Sem Integração por Enquanto. */}

            <Blog posts={posts} />

            <Footer id="#footer" />
        </div>
    )
}