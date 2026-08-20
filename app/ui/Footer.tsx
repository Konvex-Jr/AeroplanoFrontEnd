interface FooterProps {
    className: string
}

export default function Footer({ className }: FooterProps){
    return (
        <div className={`${className}`}>
            <div className="text-center border-2 p-4" >
                Hello
            </div>
            <div className="text-center border-2 p-4" >
                Footer
            </div>
        </div>
    )
}