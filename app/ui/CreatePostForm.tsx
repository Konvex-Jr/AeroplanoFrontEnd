"use client"

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function readFileAsDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload  = () => resolve(reader.result as string)
        reader.onerror = () => reject(reader.error)
        reader.readAsDataURL(file)
    })
}

type Feedback = { type: "error" | "success", text: string } | null

export default function CreatePostForm() {

    const router = useRouter()

    const [ submitting, setSubmitting ] = useState(false)
    const [ feedback, setFeedback ]     = useState<Feedback>(null)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {

        event.preventDefault()
        setFeedback(null)

        const form     = event.currentTarget
        const formData = new FormData(form)

        const title       = (formData.get("title") as string ?? "").trim()
        const description = (formData.get("description") as string ?? "").trim()
        const imageFile    = formData.get("image") as File | null
        const pdfFile       = formData.get("pdf") as File | null

        if (!title)       { setFeedback({ type: "error", text: "Informe o título." }); return }
        if (!description) { setFeedback({ type: "error", text: "Informe a descrição." }); return }
        if (!pdfFile || pdfFile.size === 0) { setFeedback({ type: "error", text: "Selecione um arquivo PDF." }); return }

        setSubmitting(true)

        try {

            const body = new FormData()
            body.append("title", title)
            body.append("description", description)
            body.append("pdf", pdfFile)

            // A imagem precisa ir como base64 (data URI), não como arquivo binário.
            if (imageFile && imageFile.size > 0) {
                const dataUrl = await readFileAsDataUrl(imageFile)
                body.append("image", dataUrl)
            }

            const res = await fetch("/api/blog", {
                method: "POST",
                credentials: "include",
                body,
            })

            if (res.status === 201) {
                setFeedback({ type: "success", text: "Post cadastrado com sucesso!" })
                form.reset()
                router.refresh()
                return
            }

            if (res.status === 403 || res.status === 401) {
                setFeedback({ type: "error", text: "Acesso restrito ao administrador. Faça login novamente." })
                return
            }

            const data = await res.json().catch(() => null)
            setFeedback({ type: "error", text: data?.message ?? "Ocorreu algo de errado." })

        } catch (error) {

            console.log(error)
            setFeedback({ type: "error", text: "Ocorreu algo de errado." })

        } finally {
            setSubmitting(false)
        }
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full max-w-xl border-2 rounded-2xl p-6 lg:p-8" >

            <div className="flex flex-col gap-1">
                <label htmlFor="title">Título</label>
                <input
                    id="title" name="title" type="text" required maxLength={255}
                    className="bg-white border-0 p-2 text-black font-normal outline-0 w-full"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="description">Descrição</label>
                <textarea
                    id="description" name="description" required rows={5} maxLength={10000}
                    className="bg-white border-0 p-2 text-black font-normal outline-0 w-full resize-y"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="image">Imagem de capa (JPEG, PNG ou WebP, até 2MB)</label>
                <input
                    id="image" name="image" type="file" accept="image/png,image/jpeg,image/webp"
                    className="bg-white border-0 p-2 text-black font-normal outline-0 w-full"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="pdf">Arquivo PDF do post</label>
                <input
                    id="pdf" name="pdf" type="file" accept="application/pdf" required
                    className="bg-white border-0 p-2 text-black font-normal outline-0 w-full"
                />
            </div>

            { feedback &&
                <p className={feedback.type === "error" ? "text-red-500" : "text-green-600"} >
                    {feedback.text}
                </p>
            }

            <button
                type="submit" disabled={submitting}
                className="flex justify-center border-2 border-white hover:bg-gray-400 disabled:opacity-50 px-4 py-2 cursor-pointer"
            >
                { submitting ? "Enviando..." : "Cadastrar Post" }
            </button>

        </form>
    )
}
