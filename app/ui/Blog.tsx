import { convertToBuffer } from "@/app/lib/convertToBuffer";
import BlogCard, { Post } from "./BlogCard";

const img001 = await convertToBuffer("public/projetos/Carr_Actigrafo_imagem.png")
const img002 = await convertToBuffer("public/projetos/Carr_Cervejeira_imagem.png")

export const posts: Post[] = [
    { 
        id: "id00",
        title: "Num mundo visual é preciso dar vida aos sonhos",
        image: img001,
        content: "content"
    },
        { 
        id: "id01",
        title: "Atratividade: Como o design constrói este valor no produto",
        image: img002,
        content: "content"
    }
]

export default function Blog(){

    return (
        <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 px-6 my-6 gap-2" >
            { posts.map(({ id, title, image, content }: Post) => {
                return <BlogCard key={id} id={id} content={content} image={image} title={title} />
            }) }
        </div>
    )

}