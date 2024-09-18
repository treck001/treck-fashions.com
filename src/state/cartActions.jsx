import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart:(state,action) =>{
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },
        clearCart: (state) => {
            state.cart = []
        },
        increaseQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        qty: item.qty + 1
                    }
                }
                return item
            })
        },
        decreaseQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        qty: item.qty - 1
                    }
                }
                return item
            })
        },

        updateEmDesign:(state,action)=> {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        selectedemdesign: action.payload.selectedemdesign
                    }
                }
                return item
            })
        }
    }
})

export default cartSlice.reducer

export const {
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity
} = cartSlice.actions