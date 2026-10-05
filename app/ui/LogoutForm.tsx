"use client"

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";


export default function LogoutForm() {
    
    const router = useRouter()
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        
        event.preventDefault()

        setError(null)

        setSubmitting(true)

        try {

            const res = await fetch("/api/logout", { method: "POST", credentials: "include" })

            if (res.ok) {
                router.replace('/blog')
            
                return
            }

            setError("Ops! Algo deu Errado!")

            return

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex px-2 w-full justify-center">
            <div className="w-full max-w-md h-48 rounded-3xl border border-white/20 bg-linear-to-br from-[#5b7db1] via-[#6f93bd] to-[#7fb5b5] px-8 mx-6 py-10 shadow-[0_25px_60px_-15px_rgba(40,70,120,0.55)]">
                <form
                    className="flex flex-col gap-6 text-white text-[3cqw] md:text-lg"
                    onSubmit={onSubmit}
                >
            
                    {error && (
                        <p
                            className="rounded-lg border border-red-200/40 bg-red-500/30 px-3 py-2 text-center text-sm text-white md:text-base"
                            role="alert"
                        >
                            {error}
                        </p>
                    )}
                    <button
                        className="w-full cursor-pointer rounded-xl bg-white px-6 py-2.5 font-medium uppercase tracking-wider text-[#2c4a7c] shadow-lg shadow-[#2c4a7c]/30 transition-all hover:bg-white/90 hover:shadow-xl active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
                        type="submit"
                        disabled={submitting}
                    >
                        {submitting ? "Saindo..." : "Sair"}
                    </button>
                </form>
            </div>
        </div>
    )
}