import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
export const fetchData = createAsyncThunk(
    "fetchData", async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        return res.data
    })

export const slice = createSlice({
    name: 'slice',
    initialState: {
        data: [],
        loading:true,
        error:''
    },
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading=true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading=false
        })
        builder.addCase(fetchData.rejected, (state) => {
            state.loading=false
            state.error = "there was some error"
        })
    })
})
export default slice.reducer