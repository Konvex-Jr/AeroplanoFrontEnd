import LoginForm from "@/app/ui/LoginForm";
import Nav from "@/app/ui/Nav";

export default function Page(){
    return (
        <div className="flex flex-col items-center" >
            
            <Nav />

            <h1 className="w-full text-center text-2xl lg:text-4xl font-bold pb-8" >Login</h1>

            <LoginForm />

        </div>
    )
}