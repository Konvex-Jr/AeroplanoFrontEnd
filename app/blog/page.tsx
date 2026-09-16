import { cookies } from "next/headers"
import { posts } from "../lib/posts";
import Blog from "../ui/Blog";
import Footer from "../ui/Footer";
import Nav from "../ui/Nav";
import { getUserPayload } from "../api/auth";

export default async function Page(){
    
    // [ ] Implementar Componentes no Blog!
    const userPayload = getUserPayload()

    return (
        <div>

            <Nav className="relative" />
        
            <Blog posts={posts} />

            <Footer id="#footer" />
        </div>
    )
}