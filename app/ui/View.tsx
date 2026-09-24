import { CgClose } from "react-icons/cg";
import Modal from "./Modal";
import { Post } from "../lib/posts";

interface ViewProps {
    post:    Post
    onClose: () => void
}

export default function View({ onClose, post }: ViewProps){

    const { id, title, description, image } = post

    return (
        <Modal onClose={onClose} label={title} >
            <div id={id} >

                { image && <img className="w-full max-h-[40vh] object-cover" src={image} alt={`Capa do post ${title}`} /> }

                <div className="p-6" >
                    <div className="flex items-start justify-between gap-4 border-b pb-4" >
                        <h2 className="text-2xl font-bold text-gray-900 break-words" >{title}</h2>
                        <button
                        type="button"
                        onClick={onClose}
                        aria-label="Fechar"
                        className="shrink-0 text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
                        >
                            <CgClose className="h-6 w-6 lg:h-8 lg:w-8" />
                        </button>
                    </div>

                    <p className="mt-4 text-gray-700 whitespace-pre-wrap break-words" >{description}</p>
                </div>

            </div>
        </Modal>
    )

}
