import { CircleX } from 'lucide-react';
import { useState } from 'react';

export function ModalPedidos ( {isOpen, closeModal, pSelected }) {
    const [cantidad, setCantidad] = useState(1);
    const [options, setOptions] = useState('Simple');

    const handleOptions = (e) => {
        setOptions(e.target.value);
    }

    const calcuPrecio = () => {
        if (options === 'Simple') {
            return pSelected.priceSimple * cantidad;
        } else {
            return pSelected.priceDoble * cantidad;
        }
    }

    const restarCantidad = () => {
        if (cantidad >= 1) {
            setCantidad(cantidad - 1);
        }
        else {
            return null;
        }
    }

    if (!isOpen) return null;
    return (
        <>
            <div className={` fixed inset-0 transition-colors ${isOpen ? 'visible bg-black/50' : 'hidden'}`}>
                <div className="flex flex-col justify-center items-center mx-5 my-11 bg-gradient-to-br from-[#ececec] to-[#e6e6e6] rounded-lg shadow-md">
                    <section className="flex flex-col justify-between">
                        <div className="flex flex-row justify-around m-2">
                            <h4 className="text-[2rem] font-extrabold">{pSelected.name}</h4>
                            <button onClick={closeModal}>
                            <CircleX color="#ff6961" size={25}/>
                            </button>
                        </div>

                        <div className="flex flex-col my-5">
                            <h2 className="text-[1.2rem] font-bold">Opciones (Obligatorio)</h2>
                            <div className="flex items-center">
                                <input
                                type="radio"
                                id="simple"
                                name="option"
                                value="Simple"
                                checked={options === 'Simple'}
                                onChange={handleOptions}
                                />
                                <label htmlFor="simple" className="ml-2 text-lg">Simple - ${pSelected.priceSimple}</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                type="radio"
                                id="doble"
                                name="option"
                                value="Doble"
                                checked={options === 'Doble'}
                                onChange={handleOptions}
                                />
                                <label htmlFor="doble" className="ml-2 text-lg">Doble - ${pSelected.priceDoble}</label>
                            </div>
                            <div className="flex flex-col mt-3 items-center justify-center">
                                <p>Comentarios:</p>
                                <input 
                                type="text"
                                name="comment"
                                className="border-solid border-2 border-gray-700 rounded-md min-h-5" />
                            </div>
                            </div>

                        <div className="flex flex-row justify-around items-center gap-5 m-2">
                            <button onClick={restarCantidad} className="bg-[#ff6961] text-white w-[40px] h-[35px] rounded-md hover:bg-[#ff6961] transition-colors text-[1.2rem]">
                                -
                            </button>

                            <span className="font-bold text-[1.2rem]">Cantidad: {cantidad}</span>

                            <button onClick={() => setCantidad(cantidad + 1)} className="bg-gebum-violet text-white w-[40px] h-[35px] rounded-md hover:bg-gebum-violet transition-colors text-[1.4rem]">
                                +
                            </button>
                            
                        </div>
                    </section>
                        <button onClick={closeModal} className="mx-auto my-2 w-[80%] bg-gebum-violet text-white py-2 rounded-md hover:bg-gebum-violet transition-colors">Agregar ${calcuPrecio()}</button>
                </div>
            </div>
        </>
    )
}
