import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import api from "../../apiServises/api";
const initialState = {
  cart: "",
};
export const getCartDetails = createAsyncThunk(
  "cart/getCartDetails",
  async (token) => {
    if (token) {
      const resp = await api.get(`/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return resp.data.output.cart[0];
    }
    return null;
  }
);
export const deleteFromCart = createAsyncThunk(
  "cart/deleteFromCart",
  async ({ token, id }) => {
    // console.log(request);
    if (token) {
      const resp = await api.delete(`/cart/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resp.data) {
        const response = await api.get(`/cart`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data.output.cart[0];
      }
    }
  }
);
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ token, request }) => {
    console.log(token);
    if (token) {
      const resp = await api.post(`/cart`, request, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resp.data) {
        const response = await api.get(`/cart`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast("Added to cart successfully...");
        return response.data.output.cart[0];
      }
    }
    else {
        toast("Please Login to add to cart...");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [getCartDetails.pending]: () => {
      console.log("Pending");
    },
    [getCartDetails.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { cart: payload };
    },
    [getCartDetails.rejected]: () => {
      console.log("Rejected!");
    },
    [addToCart.pending]: () => {
      console.log("Pending");
    },
    [addToCart.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { cart: payload };
    },
    [addToCart.rejected]: () => {
      console.log("Rejected!");
    },
    [deleteFromCart.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { cart: payload };
    },
    [deleteFromCart.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const getCart = (state) => state.cart.cart;
export default cartSlice.reducer;
