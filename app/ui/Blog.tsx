"use client"

import { useState } from "react";
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
            <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 xl:grid-cols-3 px-6 my-6 gap-4" >
                { posts.map((post: Post) => {

                    const { id, image, title } = post

                    return (
                        <div key={id} id={id} onClick={() => openModal(post) } >  
                            <div className="flex flex-col items-center w-fit rounded-2xl hover:shadow hover:scale-101 transition-all duration-150 cursor-pointer">
                                <img className="rounded-t-2xl object-cover" src={image} alt="Imagem do Post" />
                                <h1 className="bg-white w-full p-2 text-center rounded-b-2xl text-xs lg:text-lg" >{title}</h1>
                            </div>
                        </div>
                    )
                }) }
            </div>        

            {/* View Component */}
            { selectedPost && <View post={selectedPost} onClose={closeModal} /> }
        </>

    )

}