import { CartContext } from '../context/Cart.jsx';
import { useContext, useState } from 'react';
import { CartProvider } from '../context/Cart';

export default function FinPedido() {
    const { cart } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    const calcuTotal = () => {
        let totalCalcu = 0;
        cart.forEach(product => {
            totalCalcu += product.price * product.quantity;
        });
        setTotal(total);
    }

    return (
        <CartProvider>
            <>
                <div className="flex flex-col items-center justify-center h-screen"></div>
            </>
        </CartProvider>
    )
}