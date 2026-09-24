import Link from "next/link";
import Nav from "../../ui/Nav";
import Footer from "../../ui/Footer";
import CreatePostForm from "../../ui/CreatePostForm";
import { getServerUserPayload } from "../../lib/session";

export default async function Page() {

    const userPayload = await getServerUserPayload()
    const isAdmin = userPayload?.userRole === "admin"

    return (
        <div className="flex flex-col min-h-screen">

            <Nav className="relative" />

            <div className="flex-1 flex flex-col items-center px-6 my-10">

                <h1 className="w-full text-center text-2xl lg:text-4xl font-bold pb-8">Novo Post</h1>

                { isAdmin
                    ? <CreatePostForm />
                    : (
                        <div className="text-center">
                            <p className="mb-4">Acesso restrito ao administrador. Faça login com uma conta de administrador para cadastrar posts.</p>
                            <Link className="underline" href="/login">Fazer login</Link>
                        </div>
                    )
                }

            </div>

            <Footer id="#footer" />
        </div>
    )
}
