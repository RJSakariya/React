import { configureStore } from "@reduxjs/toolkit";
import { Fetchslice } from "../Features/Fetchslice";

export const Store = configureStore({
    reducer:{ 
        Fetchslice :Fetchslice.reducer,
    }
})