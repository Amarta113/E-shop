import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import {createAction} from "@reduxjs/toolkit";
import {server} from '../../src/server.js'

export const clearErrors = createAction("user/clearErrors");
export const loadUser = createAsyncThunk("user/load", async (_, thunkAPI) => {
    try{
        const {data} = await axios.get(`${server}/user/get-user`,{
            withCredentials: true,
        })
        return data.user;
    }catch(error){
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message || "Failed to load user");
    }
});