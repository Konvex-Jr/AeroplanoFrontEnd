import { MouseEventHandler } from "react"
import { CgClose } from "react-icons/cg";

interface ViewProps {
    post:    { id: string, title: string, content: string }
    onClose: MouseEventHandler
}

export default function View({ onClose, post }: ViewProps){

    if(!post) return
        
    const { id, title, content } = post

    return (
        // Overlay
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>

            {/* View */}
            <div id={id} className="relative top-0 w-full max-w-4xl h-[80%] overflow-hidden rounded-lg bg-white shadow-xl" onClick={(e) => e.stopPropagation() } >

                <div className="p-6">
                    <div className="flex items-center justify-between border-b pb-4">
                        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                        <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
                        >
                            <CgClose className="h-6 w-6 lg:h-8 lg:w-8" />
                        </button>
                    </div>
                    
                    <div className="mt-4 max-h-[60vh] overflow-y-auto">
                        <p className="text-gray-700 whitespace-pre-wrap">{content}</p>
                    </div>
                </div>

            </div>

        </div>
    )

}