import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../apiServises/api";

export const getHome = createAsyncThunk(
    'home/getHome',
    async () => {
        const response = await api.get('/home');
        return response.data.output;
    }
)

export const getProducts = createAsyncThunk(
    'home/getProducts',
    async () => {
        const response = await api.post('/products');
        return response.data.output;
    }
)

const initialState = {
    home: {},
    products:{},
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [getHome.pending]: () => {
            // console.log("Pending");
          },
          [getHome.fulfilled]: (state, { payload }) => {
            // console.log("Fetched Successfully!");
            return { ...state, home: payload };
          },
          [getHome.rejected]: () => {
            console.log("Rejected!");
          },
        [getProducts.pending]: () => {
            // console.log("Pending");
          },
          [getProducts.fulfilled]: (state, { payload }) => {
            // console.log("Fetched Successfully!");
            return { ...state, products: payload };
          },
          [getProducts.rejected]: () => {
            console.log("Rejected!");
          },
        
    }
    
})
export const getHomeData = (state) => state.home.home;
export const getAllProducts = (state) => state.home.products;
export default homeSlice.reducer;