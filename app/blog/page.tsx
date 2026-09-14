import { posts } from "../api/getPosts";
import Blog from "../ui/Blog";
import Footer from "../ui/Footer";
import Nav from "../ui/Nav";

export default function Page(){
    return (
        <div>

            <Nav className="relative" />

            <Blog posts={posts} />

            <Footer id="#footer" />
        </div>
    )
}