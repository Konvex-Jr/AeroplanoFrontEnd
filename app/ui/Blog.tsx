"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaPen, FaTrash } from "react-icons/fa";
import Image from "next/image";
import { Post } from "../lib/posts";
import View from "./View";
import PostForm from "./PostForm";

interface BlogProps {
    posts:   Post[]
    // Só controla o que é EXIBIDO. Quem realmente barra criar/editar/excluir é o backend.
    isAdmin: boolean
}

export default function Blog({ posts, isAdmin }: BlogProps){

    const router = useRouter()

    const [ selectedPost, setSelectedPost ] = useState<Post | null>(null)

    // null = fechado | { post: null } = novo post | { post } = editando esse post
    const [ editor, setEditor ] = useState<{ post: Post | null } | null>(null)

    // Posts já excluídos somem na hora, sem esperar o router.refresh() terminar.
    const [ hiddenIds, setHiddenIds ]   = useState<string[]>([])
    const [ deletingId, setDeletingId ] = useState<string | null>(null)

    const visiblePosts = posts.filter((post) => !hiddenIds.includes(post.id))

    async function deletePost(post: Post){

        if (!window.confirm(`Excluir o post "${post.title}"? Essa ação não pode ser desfeita.`)) return

        setDeletingId(post.id)

        try {

            const res = await fetch(`/api/blog/${post.id}`, { method: "DELETE", credentials: "include" })

            if (res.ok) {
                setHiddenIds((ids) => [ ...ids, post.id ])
                if (selectedPost?.id === post.id) setSelectedPost(null)
                router.refresh()
                return
            }

            if (res.status === 401 || res.status === 403) {
                alert("Sessão expirada ou sem permissão. Entre novamente pelo cadeado no rodapé.")
                return
            }

            const data = await res.json().catch(() => null)
            alert(data?.message ?? "Ocorreu algo de errado.")

        } catch (error) {

            console.log(error)
            alert("Ocorreu algo de errado.")

        } finally {
            setDeletingId(null)
        }
    }

    function onSaved(){
        setEditor(null)
        router.refresh()
    }

    const NewPostButton = isAdmin && (
        <div className="flex justify-end px-6 my-4" >
            <button type="button" onClick={() => setEditor({ post: null })} className="border-2 border-white hover:bg-gray-400 px-4 py-2 transition-colors cursor-pointer" >
                + Novo Post
            </button>
        </div>
    )

    const Editor = editor && <PostForm post={editor.post} onClose={() => setEditor(null)} onSaved={onSaved} />

    if(!visiblePosts.length){
        return (
            <>
                { NewPostButton }
                <div className="flex items-center justify-center px-6 my-6" >
                    <p className="text-gray-500 text-center" >Nenhum post encontrado no momento.</p>
                </div>
                { Editor }
            </>
        )
    }

    return (
        <>
            { NewPostButton }

            {/* Posts Grid */}
            <div className="justify-center items-stretch grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-6 my-6 gap-4" >
                { visiblePosts.map((post: Post) => {

                    const { id, image, title } = post

                    return (
                        <div className={`relative flex flex-col items-stretch w-full h-full rounded-lg hover:shadow hover:scale-101 transition-all duration-150 cursor-pointer ${deletingId === id ? "opacity-50 pointer-events-none" : ""}`} key={id} id={id} onClick={() => setSelectedPost(post) } >

                            { image
                                ? <img className="w-full aspect-video rounded-t-lg object-cover" src={image} alt={`Capa do post ${title}`} />
                                : <div className="w-full aspect-video rounded-t-lg bg-gray-300" />
                            }

                            <h2 className="flex-1 bg-white w-full p-2 text-center rounded-b-lg text-xs lg:text-lg" >{title}</h2>

                            {/* Controles de edição — só para admin */}
                            { isAdmin &&
                                <div className="absolute top-2 right-2 flex gap-2" >
                                    <button
                                        type="button"
                                        aria-label={`Editar post ${title}`}
                                        onClick={(e) => { e.stopPropagation(); setEditor({ post }) }}
                                        className="rounded-full bg-white/90 p-2 text-gray-700 shadow hover:bg-white hover:text-black transition-colors cursor-pointer"
                                    >
                                        <FaPen size={14} />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label={`Excluir post ${title}`}
                                        onClick={(e) => { e.stopPropagation(); deletePost(post) }}
                                        className="rounded-full bg-white/90 p-2 text-red-600 shadow hover:bg-white hover:text-red-800 transition-colors cursor-pointer"
                                    >
                                        <FaTrash size={14} />
                                    </button>
                                </div>
                            }

                        </div>
                    )
                }) }
            </div>

            {/* View Component */}
            { selectedPost && <View post={selectedPost} onClose={() => setSelectedPost(null)} /> }

            { Editor }
        </>

    )

}
