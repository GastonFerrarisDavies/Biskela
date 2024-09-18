import { ShoppingCart } from 'lucide-react';
export function CartTab () {
    return (
        <>
        <div className="fixed bottom-5 right-3">
            <button className="p-4 rounded-[50%] bg-gradient-to-br from-[#414141] to-[#242424]">
                <ShoppingCart className="" color="white" size={30} />
            </button>
        </div>
        </>
    )
}