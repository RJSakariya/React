import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userApi = "http://localhost:5174/users"
const proApi = "http://localhost:5174/projects"

export const setUser = createAsyncThunk('addUser', async (user) => {
    const userData = await axios.get(userApi)
    const singleUser = userData.data.find((data) => data.email === user.email && data.password === user.password)
    if (singleUser) {
        return singleUser
    }
    return null
})
export const signUp = createAsyncThunk('signUp', async (user) => {
    const { name, email, password } = user;
    const usersData = await axios.get(userApi);
    const userExists = usersData.data.some(el => el.name === name || el.email === email);
    if (!userExists) {
        try {
            const response = await axios.post(userApi, { name, password, email });
            return response.data;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to sign up');
        }
    } else {
        throw new Error('User already exists');
    }
});

export const fetchData = createAsyncThunk('fetchData', async (user) => {
    const users = await axios.get(userApi)
    const res = await axios.get(proApi)
    return { users: users.data, projects: res.data.filter((el) => el.admin === user.id || el.developers.includes(user.id)) }
})
export const addNewProject = createAsyncThunk('addNewProject', async (data) => {
    const project = await axios.post(proApi, data)
    return project.data
})

export const Slice = createSlice({
    name: 'Slice',
    initialState: {
        user: null,
        users: [],
        projects: [],
        project: {},
    },
    reducers: {
        fetchUser: (state) => {
            state.user = JSON.parse(localStorage.getItem('user'))
        },
        logout: (state) => {
            state.user = null
            localStorage.setItem('user', JSON.stringify(null))
        },
        setProject: (state, action) => {
            state.project = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload))
            state.user = action.payload
        })
        builder.addCase(setUser.fulfilled, (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload))
            state.user = action.payload
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.users = action.payload.users
            state.projects = action.payload.projects
        })
        builder.addCase(addNewProject.fulfilled, (state, action) => {
            state.projects.push(action.payload)
        })
    }
})

export const { fetchUser, logout, setProject } = Slice.actions;
export default Slice.reducer;