import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const productApi = "http://192.168.168.44:5174/Product";
const userApi = "http://192.168.168.44:5174/Users";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const response = await axios.get(productApi);
    return response.data;
});

export const toggleLikeAsync = createAsyncThunk("toggleLikeAsync",
    async ({ productId, user }) => {
        const currentLiked = user.liked || [];

        const updatedLiked = currentLiked.includes(productId)
            ? currentLiked.filter((id) => id !== productId)
            : [...currentLiked, productId];

        const response = await axios.put(`${userApi}/${user.id}`, {
            ...user,
            liked: updatedLiked,
        });

        return { updatedUser: response.data, liked: updatedLiked.includes(productId) };
    }
);

export const createUser = createAsyncThunk("createUser", async (user) => {
    const response = await axios.post(userApi, { ...user, liked: [] });
    const userId = response.data.id;
    localStorage.setItem("user", JSON.stringify({ Uid: userId, signIn: true }));
    return response.data;
});

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
    const response = await axios.get(userApi);
    return response.data;
});

export const fetchUserData = createAsyncThunk("fetchUserData", async (id) => {
    const response = await axios.get(`${userApi}/${id}`);
    return response.data;
});

export const updateProductAsync = createAsyncThunk(
    "updateProduct",
    async (product) => {
        const response = await axios.put(`${productApi}/${product.id}`, product);
        return response.data;
    }
);

export const deleteProductAsync = createAsyncThunk(
    "deleteProduct",
    async (productId) => {
        await axios.delete(`${productApi}/${productId}`);
        return productId;
    }
);

export const addProductAsync = createAsyncThunk(
    "addProduct",
    async (product) => {
        const response = await axios.post(productApi, product);
        return response.data;
    }
);

export const Slice = createSlice({
    name: "slice",
    initialState: {
        loading: false,
        productData: [],
        categories: [],
        users: [],
        userData: null,
        toast: null,
    },
    reducers: {
        signOut: (state) => {
            state.userData = null;
            state.toast = { status: "info", message: "Signed out successfully." };
        },
        toast: (state, action) => {
            state.toast = { ...action.payload };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.toast = { status: "info", message: "Fetching products..." };
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.productData = action.payload.map((product) => ({
                ...product,
                liked: product.liked || false,
            }));
            const categorySet = new Set();
            action.payload.forEach((el) => {
                const categoryName = el.category || "Unknown";
                if (!categorySet.has(categoryName)) {
                    categorySet.add(categoryName);
                }
            });
            state.categories = Array.from(categorySet).map((category) => ({
                category,
                path: category.replace(/\s+/g, "-").toLowerCase(),
            }));
            state.toast = { status: "success", message: "Products fetched successfully." };
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.toast = { status: "error", message: "Failed to fetch products." };
        });

        builder.addCase(toggleLikeAsync.fulfilled, (state, action) => {
            state.userData = action.payload.updatedUser;
            state.toast = {
                status: "success",
                message: action.payload.liked ? "Product liked." : "Product unliked."
            };
        });
        builder.addCase(toggleLikeAsync.rejected, (state) => {
            state.toast = { status: "error", message: "Failed to update like status." };
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.toast = { status: "success", message: "Users fetched successfully." };
        });
        builder.addCase(fetchUsers.rejected, (state) => {
            state.toast = { status: "error", message: "Failed to fetch users." };
        });

        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.toast = { status: "success", message: "User data fetched successfully." };
        });
        builder.addCase(fetchUserData.rejected, (state) => {
            state.toast = { status: "error", message: "Failed to fetch user data." };
        });

        builder.addCase(createUser.fulfilled, (state, action) => {
            state.userData = action.payload;
            state.toast = { status: "success", message: "User created successfully." };
        });
        builder.addCase(createUser.rejected, (state) => {
            state.toast = { status: "error", message: "Failed to create user." };
        });

        builder.addCase(updateProductAsync.fulfilled, (state, action) => {
            const index = state.productData.findIndex((p) => p.id === action.payload.id);
            if (index !== -1) {
                state.productData[index] = action.payload;
            }
            state.toast = { status: "success", message: "Product updated successfully." };
        });
        builder.addCase(updateProductAsync.rejected, (state) => {
            state.toast = { status: "error", message: "Failed to update product." };
        });

        builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
            state.productData = state.productData.filter((p) => p.id !== action.payload);
            state.toast = { status: "success", message: "Product deleted successfully." };
        });
        builder.addCase(deleteProductAsync.rejected, (state) => {
            state.toast = { status: "error", message: "Failed to delete product." };
        });

        builder.addCase(addProductAsync.fulfilled, (state, action) => {
            state.productData.push(action.payload);
            state.toast = { status: "success", message: "Product added successfully." };
        });
        builder.addCase(addProductAsync.rejected, (state) => {
            state.toast = { status: "error", message: "Failed to add product." };
        });
    },
});

export const { signOut, toast } = Slice.actions;
export default Slice.reducer;