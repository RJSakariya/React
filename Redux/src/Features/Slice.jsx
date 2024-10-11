import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        num: 1,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        multi: (state) => {
            state.num *= 2
        }
    },
})
export const { increment, decrement, multi } = counterSlice.actions
export default counterSlice.reducer