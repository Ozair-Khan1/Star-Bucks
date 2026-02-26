import { createContext, useReducer, useContext } from "react";


const initialCart = [];

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return[...state, action.payload];
        case 'REMOVE_FROM_CART': {
            const index = state.findIndex((item) => item.id === action.payload);
            
            // If the item exists in the cart
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
    const [cart, dispatch] = useReducer(cartReducer, initialCart);

    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
};

export const UseCart = () => useContext(CartContext);