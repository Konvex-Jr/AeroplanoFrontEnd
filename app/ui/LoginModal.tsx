"use client"

import { CgClose } from "react-icons/cg";
import Modal from "./Modal";
import LoginForm from "./LoginForm";

interface LoginModalProps {
    onClose: () => void
    onSuccess: () => void
}

export default function LoginModal({ onClose, onSuccess }: LoginModalProps) {
    return (
        <Modal
            onClose={onClose}
            label="Login"
            panelClassName="max-w-md bg-gradient-to-br from-[#3f5f95] via-[#4d74a8] to-[#5d97a0] border border-white/20 shadow-[0_30px_80px_-20px_rgba(20,40,80,0.6)]"
            zIndex="z-[60]"
        >
            <div className="relative px-4 pt-10 pb-8">

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Fechar"
                    className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                    <CgClose className="h-6 w-6" />
                </button>

                <h1 className="w-full text-center text-2xl font-bold text-white pb-6">Login</h1>

                <LoginForm onSuccess={onSuccess} />

            </div>
        </Modal>
    )
}