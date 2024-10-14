import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Edit, Delete } from '@mui/icons-material';
import { deleteTodo, setEditId, setInputValue } from "../Features/Slice";
import { useDispatch, useSelector } from "react-redux";

export default function Read() {
    const dispatch = useDispatch();
    const todoData = useSelector((state) => state.slice.todoList);
    const editId = useSelector((state) => state.slice.editId);
    const handleEdit = (todo) => {
        dispatch(setInputValue(todo.text));
        dispatch(setEditId(todo.id));
    };
    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
        if (id === editId) {
            dispatch(setInputValue(''));
            dispatch(setEditId(null));
        }
    };
    return (
        <>
            <TableContainer component={Paper} sx={{ mt: 4 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>INDEX</TableCell>
                            <TableCell>Todo</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todoData && todoData.map((todo, ind) => (
                            <TableRow key={ind}>
                                <TableCell>{ind + 1}</TableCell>
                                <TableCell>{todo.text}</TableCell>
                                <TableCell align="center">
                                    <IconButton color="primary" onClick={() => handleEdit(todo)}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="secondary" onClick={() => handleDelete(todo.id)}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
