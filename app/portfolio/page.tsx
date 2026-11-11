import Nav from "../ui/Nav";
import Footer from "../ui/Footer";
import PortfolioGrid from "./portfolioGrid";

export default function Page() {
  return (
    <>
      <Nav className="relative" />

      <main id="conteudo" className="w-full bg-[#e6eef9] px-4 py-14 sm:py-20">
        <h1 className="sr-only">Portfólio</h1>
        <PortfolioGrid />
      </main>

      <Footer id="#footer" />
    </>
  );
}
