import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import homeReducer from "./home/homeSlice"
import cartReducer from "./cart/cartSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        home: homeReducer,
        cart: cartReducer,
    }
})