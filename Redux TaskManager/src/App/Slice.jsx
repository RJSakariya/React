import { createSlice } from '@reduxjs/toolkit'
export const slice = createSlice({
    name: "slice",
    initialState: {
        taskDetail: []
    },
    reducers: {
        addTask: (state, action) => {
            state.taskDetail = [...state.taskDetail, { id: state.taskDetail.length > 0 ? state.taskDetail[state.taskDetail.length - 1].id + 1 : 1, taskName: action.payload.taskName, date: action.payload.date, status: action.payload.status }]
        },
        deleteTask: (state, action) => {
            state.taskDetail = state.taskDetail.filter((el) => el.id !== action.payload)
        },
        editTask: (state, action) => {
            const updateData = state.taskDetail.find((el) => el.id === action.payload.edit)
            updateData.id = action.payload.edit
            updateData.taskName = action.payload.taskName
            updateData.date = action.payload.date
            updateData.status = action.payload.status
        }
    }
})
export const { addTask, deleteTask, editTask } = slice.actions
export default slice.reducer