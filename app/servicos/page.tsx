import Footer from "../ui/Footer";
import Nav from "../ui/Nav";
import Services from "../ui/Services";

export default function Page(){
    return (
        <div>
            
            <Nav className="relative" />

            <Services />

            <Footer id={"contato"} />
            
        </div>
    ) 
}