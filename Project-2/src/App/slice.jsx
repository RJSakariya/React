import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const productApi = "http://192.168.168.44:5174/Product"
const userApi = "http://192.168.168.44:5174/Users"

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const response = await axios.get(productApi);
    return response.data;
});

export const toggleLikeAsync = createAsyncThunk("toggleLikeAsync",
    async ({productId,user}) => {
        const currentLiked = user.liked || [];

      const updatedLiked = currentLiked.includes(productId)
        ? currentLiked.filter((id) => id !== productId)
        : [...currentLiked, productId];

      const response = await axios.put(`${userApi}/${user.id}`, {
        ...user,
        liked: updatedLiked,
      });

      return response.data;
    }
  );

export const createUser = createAsyncThunk("createUser", async (user) => {
    const response = await axios.post(userApi, { ...user,liked:[] });
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
  )
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
        signOut:(state)=>{
            state.userData = null
        },
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            }),
            builder.addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.productData = action.payload.map((product) => ({
                    ...product,
                    liked: product.liked || false,
                }));

                const categorySet = []
                action.payload.forEach((el) => {
                    const categoryName = el.category || "Unknown";
                    categorySet.push(categoryName);
                  });
                  
                  state.categories = Array.from(categorySet).map((category) => ({
                    category,
                    path: category.split(" ")[0],
                  }));
                  state.toast = {status:"success",message:"Data Fetch SuccessFully"}
            }),
            builder.addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            }),
            builder.addCase(toggleLikeAsync.fulfilled, (state, action) => {
                state.userData = action.payload
            }),
            builder.addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            }),
            builder.addCase(fetchUserData.fulfilled, (state, action) => {
                state.userData = action.payload;
            }),
            builder.addCase(createUser.fulfilled, (state, action) => {
                state.userData = action.payload;
        }),
        builder.addCase(updateProductAsync.fulfilled, (state, action) => {
            const index = state.productData.findIndex((p) => p.id === action.payload.id);
            if (index !== -1) {
              state.productData[index] = action.payload;
            }
          }),
          builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
            state.productData = state.productData.filter((p) => p.id !== action.payload);
          }),
          builder.addCase(addProductAsync.fulfilled, (state, action) => {
            state.productData.push(action.payload);
          });
    },
});

export const {signOut} = Slice.actions;
export default Slice.reducer;
