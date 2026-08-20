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
            <Footer className="relative bottom-0 w-full flex items-start justify-center px-8 gap-3 lg:gap-32 py-10" />

        </div>
    )
}
