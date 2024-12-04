import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const response = await axios.get("http://localhost:5000/Product");
    return response.data;
});

export const toggleLikeAsync = createAsyncThunk(
    "toggleLike",
    async ({ product,productId, currentLikedState }) => {
        const response = await axios.put(`http://localhost:5000/Product/${productId}`, {
            ...product,
            liked: !currentLikedState,
        });
        return response.data;
    }
);

export const Slice = createSlice({
    name: "slice",
    initialState: {
        loading: true,
        productData: [],
        categories: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.productData = action.payload.map((product) => ({
                ...product,
                liked: product.liked || false,
            }));

            action.payload.forEach((el) => {
                const categoryName = el.category;
                if (!state.categories.find((cat) => cat.category === categoryName)) {
                    state.categories.push({
                        category: categoryName,
                        path: categoryName ? categoryName.split(" ")[0] : "unknown",
                    });
                }
            });
        });
        builder.addCase(toggleLikeAsync.fulfilled, (state, action) => {
            const updatedProduct = action.payload;
            const index = state.productData.findIndex((prod) => prod.id === updatedProduct.id);
            if (index !== -1) {
                state.productData[index] = updatedProduct;
            }
        });
    },
});

export default Slice.reducer;
