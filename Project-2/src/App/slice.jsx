import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get("http://localhost:5000/Product");
    return response.data;
});

export const toggleLikeAsync = createAsyncThunk(
    "products/toggleLike",
    async ({ product, productId, currentLikedState }) => {
        const response = await axios.put(`http://localhost:5000/Product/${productId}`, {
            ...product,
            liked: !currentLikedState,
        });
        return response.data;
    }
);

export const createUser = createAsyncThunk("users/createUser", async (user) => {
    const response = await axios.post(`http://localhost:5000/Users`, { ...user });
    const userId = response.data.id;
    localStorage.setItem("user", JSON.stringify({ Uid: userId, signIn: true }));
  
    return response.data;
  });
  

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
    const response = await axios.get(`http://localhost:5000/Users`);
    return response.data;
});

export const fetchUserData = createAsyncThunk("fetchUserData", async (id) => {
    const response = await axios.get(`http://localhost:5000/Users/${id}`);
    return response.data;
});

export const Slice = createSlice({
    name: "slice",
    initialState: {
        loading: false,
        productData: [],
        categories: [],
        users: [],
        userData: {},
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.productData = action.payload.map((product) => ({
                    ...product,
                    liked: product.liked || false,
                }));

                const categorySet = new Set();
                action.payload.forEach((el) => {
                    const categoryName = el.category || "Unknown";
                    categorySet.add(categoryName);
                });

                state.categories = Array.from(categorySet).map((category) => ({
                    category,
                    path: category.split(" ")[0],
                }));
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(toggleLikeAsync.fulfilled, (state, action) => {
                const updatedProduct = action.payload;
                const index = state.productData.findIndex((prod) => prod.id === updatedProduct.id);
                if (index !== -1) {
                    state.productData[index] = updatedProduct;
                }
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.userData = action.payload;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.userData = action.payload;
            });
    },
});

export default Slice.reducer;
