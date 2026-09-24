"use client"

import { ChangeEvent, FormEvent, useState } from "react";
import { CgClose } from "react-icons/cg";
import Modal from "./Modal";
import { Post } from "../lib/posts";

// Mesmos limites do backend (infra/utils/imageSanitizer.ts).
const MAX_IMAGE_BYTES = 2 * 1024 * 1024
const ACCEPTED_TYPES  = ["image/jpeg", "image/png", "image/webp"]

function readFileAsDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload  = () => resolve(reader.result as string)
        reader.onerror = () => reject(reader.error)
        reader.readAsDataURL(file)
    })
}

interface PostFormProps {
    // null = criando um post novo | Post = editando esse post
    post:    Post | null
    onClose: () => void
    onSaved: () => void
}

const inputClass = "w-full rounded border border-gray-300 bg-white p-2 text-gray-900 font-normal outline-none focus:border-gray-500"

export default function PostForm({ post, onClose, onSaved }: PostFormProps){

    const [ title, setTitle ]             = useState(post?.title ?? "")
    const [ description, setDescription ] = useState(post?.description ?? "")
    const [ newImage, setNewImage ]       = useState<string | null>(null)
    const [ submitting, setSubmitting ]   = useState(false)
    const [ error, setError ]             = useState<string | null>(null)

    // Na edição, a capa atual aparece até o admin escolher outra.
    const preview = newImage ?? (post?.image || null)

    async function onPickImage(event: ChangeEvent<HTMLInputElement>){

        const input = event.target
        const file  = input.files?.[0]

        if (!file) return

        if (!ACCEPTED_TYPES.includes(file.type)) { setError("A capa deve ser JPEG, PNG ou WebP."); input.value = ""; return }
        if (file.size > MAX_IMAGE_BYTES)         { setError("A capa deve ter no máximo 2MB.");     input.value = ""; return }

        try {
            setNewImage(await readFileAsDataUrl(file))
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Não foi possível ler a imagem.")
        }
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>){

        event.preventDefault()
        setError(null)

        const cleanTitle       = title.trim()
        const cleanDescription = description.trim()

        if (!cleanTitle)       { setError("Informe o título.");    return }
        if (!cleanDescription) { setError("Informe a descrição."); return }
        if (!post && !newImage){ setError("Selecione a imagem de capa."); return }

        setSubmitting(true)

        try {

            const res = await fetch(post ? `/api/blog/${post.id}` : "/api/blog", {
                method: post ? "PUT" : "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                // Sem imagem nova (só na edição), o backend mantém a capa atual.
                body: JSON.stringify({ title: cleanTitle, description: cleanDescription, ...(newImage ? { image: newImage } : {}) }),
            })

            if (res.ok) {
                onSaved()
                return
            }

            if (res.status === 401 || res.status === 403) {
                setError("Sessão expirada ou sem permissão. Entre novamente pelo cadeado no rodapé.")
                return
            }

            const data = await res.json().catch(() => null)
            setError(data?.message ?? "Ocorreu algo de errado.")

        } catch (err) {

            console.log(err)
            setError("Ocorreu algo de errado.")

        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Modal onClose={onClose} label={ post ? "Editar post" : "Novo post" } panelClassName="max-w-xl bg-white" >
            <form onSubmit={onSubmit} className="flex flex-col gap-5 p-6 text-gray-800" >

                <div className="flex items-center justify-between border-b pb-4" >
                    <h2 className="text-2xl font-bold text-gray-900" >{ post ? "Editar post" : "Novo post" }</h2>
                    <button type="button" onClick={onClose} aria-label="Fechar" className="text-gray-500 hover:text-gray-800 transition-colors cursor-pointer" >
                        <CgClose className="h-6 w-6" />
                    </button>
                </div>

                <div className="flex flex-col gap-1" >
                    <label htmlFor="post-title" >Título</label>
                    <input id="post-title" type="text" required maxLength={255} value={title} onChange={(e) => setTitle(e.target.value)} className={inputClass} />
                </div>

                <div className="flex flex-col gap-1" >
                    <label htmlFor="post-description" >Descrição</label>
                    <textarea id="post-description" required rows={6} maxLength={10000} value={description} onChange={(e) => setDescription(e.target.value)} className={`${inputClass} resize-y`} />
                </div>

                <div className="flex flex-col gap-2" >
                    <label htmlFor="post-image" >Imagem de capa (JPEG, PNG ou WebP, até 2MB){ post ? " — deixe em branco para manter a atual" : "" }</label>
                    <input id="post-image" type="file" accept="image/png,image/jpeg,image/webp" onChange={onPickImage} className={inputClass} />
                    { preview && <img src={preview} alt="Prévia da capa" className="w-full max-h-56 rounded object-cover" /> }
                </div>

                { error && <p className="text-red-600" role="alert" >{error}</p> }

                <div className="flex justify-end gap-3" >
                    <button type="button" onClick={onClose} className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer" >
                        Cancelar
                    </button>
                    <button type="submit" disabled={submitting} className="px-4 py-2 rounded bg-gray-900 text-white hover:bg-gray-700 disabled:opacity-50 transition-colors cursor-pointer" >
                        { submitting ? "Salvando..." : post ? "Salvar alterações" : "Publicar post" }
                    </button>
                </div>

            </form>
        </Modal>
    )
}
