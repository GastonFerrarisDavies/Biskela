import { CircleX } from 'lucide-react';
export function ModalCart ( {isOpen, closeModal, pSelected }) {
    if (!isOpen) return null;
    return (
        <>
            <div className={` fixed inset-0 transition-colors ${isOpen ? 'visible bg-black/40' : 'hidden'}`}>
                <div className="flex flex-col justify-center items-center mx-5 my-11 bg-gradient-to-br from-[#ececec] to-[#e6e6e6] rounded-lg shadow-md">
                    <section className="flex">
                        <h4>{pSelected.id}</h4>
                        <button onClick={closeModal}>Cerrar</button>
                    </section>
                </div>
            </div>
        </>
    )
}
