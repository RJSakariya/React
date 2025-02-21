import { configureStore } from "@reduxjs/toolkit";
import Slice from "../Features/Slice";
const Store = configureStore({
    reducer: { slice: Slice, }
})
export default Store