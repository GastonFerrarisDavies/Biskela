import { useState, createContext } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevState => [...prevState, product])
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId))
    }

    const value = { cart, addToCart, removeFromCart };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


