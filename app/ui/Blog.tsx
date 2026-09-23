"use client"

import { useState } from "react";
import Image from "next/image";
import { Post } from "../lib/posts";
import View from "./View";

interface BlogProps {
    posts: Post[]
}

export default function Blog({ posts }: BlogProps){

    const [ selectedPost, setSelectedPost ] = useState<Post | null>(null)

    const openModal = (post: Post) => setSelectedPost(post)
    const closeModal = ()          => setSelectedPost(null)

    return (
        <>  
            {/* Posts Grid */}
            <div className="justify-center items-stretch grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-6 my-6 gap-4" >
                { posts.map((post: Post) => {

                    const { id, image, title } = post

                    return (
                        <div
                        className="flex flex-col items-stretch w-full h-full rounded-lg hover:shadow hover:scale-101 transition-all duration-150 cursor-pointer"
                        key={id}
                        id={id}
                        onClick={() => openModal(post)}
                        >
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-lg">
                            <Image
                                src={image}
                                alt="Imagem do Post"
                                fill
                                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <h1 className="flex-1 bg-white w-full p-2 text-center rounded-b-lg text-xs lg:text-lg">
                            {title}
                        </h1>
                        </div>
                    )
                }) }
            </div>        

            {/* View Component */}
            { selectedPost && <View post={selectedPost} onClose={closeModal} /> }
        </>

    )

}