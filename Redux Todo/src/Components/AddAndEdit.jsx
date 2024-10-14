import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, setEditId, setInputValue } from '../Features/Slice';
import { TextField, Button, Box } from '@mui/material';

export default function AddAndEdit() {
    const todoData = useSelector((state) => state.slice.todoList);
    const editId = useSelector((state) => state.slice.editId);
    const inputValue = useSelector((state) => state.slice.inputValue);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            if (editId) {
                dispatch(editTodo({ id: editId, text: inputValue }));
                dispatch(setEditId(null));
            } else {
                dispatch(addTodo({ id: todoData.length + 1, text: inputValue }));
            }
            dispatch(setInputValue(''));
        }
    };
    return (
        <>
            <Box sx={{ maxWidth:250 }}>
                <TextField
                    label="New Todo"
                    value={inputValue}
                    onChange={(e) => dispatch(setInputValue(e.target.value))}
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                />
                <Button variant="contained" color="primary" onClick={handleAddTodo}>
                    {editId ? 'Update Todo' : 'Add Todo'}
                </Button>
            </Box>
        </>
    )
}
