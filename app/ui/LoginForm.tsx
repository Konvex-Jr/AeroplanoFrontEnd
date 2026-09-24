"use client"

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserPayload } from "../api/auth";

interface LoginFormProps {
    onSuccess?: () => void
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
    const router = useRouter()
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        setError(null)

        const form = new FormData(event.currentTarget)
        const email = form.get("email") as string
        const password = form.get("password") as string

        setSubmitting(true)

        try {
            const res: Response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ email, password })
            })

            if (res.ok) {
                if (getUserPayload()) {
                    if (onSuccess) {
                        onSuccess()
                    } else {
                        // Sem callback (página /login): leva para a área administrativa.
                        // replace para o "voltar" não cair de novo no login.
                        router.replace("/blog")
                    }
                    return
                }

                setError("Ops! Algo deu errado!")
                return
            }

            if (res.status === 401) {
                setError("Usuário e/ou senha incorretos!")
                return
            }

            const data = await res.json().catch(() => null)
            setError(data?.message ?? "Ops! Algo deu errado!")
        } catch (error) {
            console.log(error)
            setError("Ops! Algo deu errado!")
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="w-full max-w-md rounded-3xl border border-white/20 bg-linear-to-br from-[#5b7db1] via-[#6f93bd] to-[#7fb5b5] px-8 py-10 shadow-[0_25px_60px_-15px_rgba(40,70,120,0.55)]">
            <form
                className="flex flex-col gap-6 text-white text-[3cqw] md:text-lg"
                onSubmit={onSubmit}
            >
                <div className="flex flex-col gap-2 w-full">
                    <label
                        className="font-light uppercase tracking-wider text-white/95"
                        htmlFor="email"
                    >
                        Email
                    </label>

                    <input
                        className="w-full rounded-xl border border-white/30 bg-[#2c4a7c]/40 px-4 py-2.5 text-white outline-none transition-all placeholder:text-white/50 focus:border-white/80 focus:bg-[#2c4a7c]/60 focus:ring-2 focus:ring-white/25"
                        type="email"
                        name="email"
                        id="email"
                        required
                        autoFocus
                    />
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <label
                        className="font-light uppercase tracking-wider text-white/95"
                        htmlFor="password"
                    >
                        Senha
                    </label>

                    <input
                        className="w-full rounded-xl border border-white/30 bg-[#2c4a7c]/40 px-4 py-2.5 text-white outline-none transition-all placeholder:text-white/50 focus:border-white/80 focus:bg-[#2c4a7c]/60 focus:ring-2 focus:ring-white/25"
                        type="password"
                        name="password"
                        id="password"
                        required
                    />
                </div>

                {error && (
                    <p
                        className="rounded-lg border border-red-200/40 bg-red-500/30 px-3 py-2 text-center text-sm text-white md:text-base"
                        role="alert"
                    >
                        {error}
                    </p>
                )}

                <button
                    className="w-full rounded-xl bg-white px-6 py-2.5 font-medium uppercase tracking-wider text-[#2c4a7c] shadow-lg shadow-[#2c4a7c]/30 transition-all hover:bg-white/90 hover:shadow-xl active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
                    type="submit"
                    disabled={submitting}
                >
                    {submitting ? "Entrando..." : "Login"}
                </button>
            </form>
        </div>
    )
}