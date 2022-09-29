import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

import api from "../../apiServises/api";

export const login  = createAsyncThunk(
    'user/login',
    async (data) => {
        const response = await api.post('/login', data);
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data.output.user))
            toast(response.data.message);
            
        }

        return response.data.output.user;
    }
)
export const updateUser  = createAsyncThunk(
    'user/updateUser',
    async ({token, request}) => {
        console.log(request);
        const response = await api.post('/update-profile', request,{headers: { Authorization: `Bearer ${token}`}});
        localStorage.setItem("user", JSON.stringify(response.data.output))

        if(response.data.message) toast("Account Updated Successfully...");
        return response.data.output;
    }
)
export const logout  = createAsyncThunk(
    'user/logout',
    async (token) => {
        // console.log(user)
        // console.log(token)
        // const resp = await api.post(`/logout`, {headers: { Authorization: `Bearer ${token}` },
        // });
        
        localStorage.setItem("user",'')

        return null;
    }
)
export const register  = createAsyncThunk(
    'user/register',
    async (data) => {
        const response = await api.post('/register', data);
        if (response?.data.output.access_token) {
            toast(response.data.message);
            const resp = await api.get('/user', {headers: { Authorization: `Bearer ${response?.data.output.access_token}`}});
            
            let user_data = resp?.data.output;
            // user_data.api_token = response?.data.output.access_token;
            localStorage.setItem("user", JSON.stringify(user_data))
            return user_data;
        }

    }
)
const saved_user=localStorage.getItem("user")
let user = saved_user ? JSON.parse(saved_user) : '';
const initialState = {
    user:user
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       
    },
    extraReducers: {
        [login.pending]: () => {
            console.log("Pending");
          },
          [login.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { user: payload };
          },
          [login.rejected]: () => {
            console.log("Rejected!");
          },
        [register.pending]: () => {
            console.log("Pending");
          },
          [register.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { user: payload };
          },
          [register.rejected]: () => {
            console.log("Rejected!");
        },
        [logout.fulfilled]: (state) => {
            console.log("Fetched Successfully!");
            return { user:''};
        },
        [logout.rejected]: () => {
            console.log(user?.api_token);
        },
        [updateUser.fulfilled]: (state,{ payload }) => {
            console.log("Fetched Successfully!");
            return { user:payload};
        },
        [updateUser.rejected]: () => {
            console.log("updateUser rejected");
        },
        
    }
});
// export const { login } = userSlice.actions;
export const getUser = (state) => state.user.user;
export default userSlice.reducer;