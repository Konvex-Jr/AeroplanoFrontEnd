import Nav from "@/app/ui/Nav";
import LogoutForm from "../ui/LogoutForm";

export default function Page(){
    return (
        <div className="flex flex-col items-center" >
            
            <Nav />

            <h1 className="w-full text-center text-2xl lg:text-4xl font-bold pb-8" >Logout</h1>

            <LogoutForm />

        </div>
    )
}