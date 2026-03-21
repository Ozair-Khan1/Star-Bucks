import { createContext, useReducer, useContext, useEffect } from "react";


const initialCart = [];

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return[...state, action.payload];
        case 'REMOVE_FROM_CART': {
            const index = state.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                return state.filter((_, i) => i !== index);
            }
            return state;
        }
        case 'CLEAR_CART':
            return[]
        default:
            return state;
    }
}

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        const localData = localStorage.getItem('Cart')
        return localData ? JSON.parse(localData) : []
    });

    useEffect(() => {
        localStorage.setItem('Cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
};

export const UseCart = () => useContext(CartContext);