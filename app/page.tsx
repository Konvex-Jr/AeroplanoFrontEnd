import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Nav from "./ui/Nav";

export default function Home() {
    return (
        <div className="flex flex-col h-full">

            {/* Hero Section: Nav + Header */}
            <Nav />
            <Header />

            {/* Footer Section */}
            <Footer className="relative bottom-0 w-full flex flex-col md:flex-row justify-center gap-12 px-12 py-10" />

        </div>
    )
}
