import Footer from "../ui/Footer";
import Nav from "../ui/Nav";
import Services from "../ui/Services";

export default function Page(){
    return (
        <>
            <Nav className="relative" />

            <main id="conteudo">
                <Services />
            </main>

            <Footer id={"contato"} />
        </>
    )
}
