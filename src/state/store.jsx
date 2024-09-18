import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartActions";

export default configureStore({
    reducer: {
        // reducer
        cart: cartSlice
    }
})  