import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
  editId: null,
  inputValue: "",
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    editTodo: (state, action) => {
      const index = state.todoList.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.todoList[index] = action.payload;
      }
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload
    },
    setEditId: (state, action) => {
      state.editId = action.payload
    },
  },
});

export const { addTodo, editTodo, deleteTodo, setEditId, setInputValue } = slice.actions;
export default slice.reducer;
