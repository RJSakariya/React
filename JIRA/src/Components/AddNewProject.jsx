import { useEffect, useRef, useState } from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Autocomplete,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProject } from '../Features/Slice';

// eslint-disable-next-line react/prop-types
export default function AddNewProject({ open, setOpen }) {
    const dispatch = useDispatch()
    const { users, user } = useSelector((state) => state.slice);
    const form = useRef()

    const [developersList, setDeveloperList] = useState([]);
    useEffect(() => {
        if (users.length > 0) {
            setDeveloperList(
                users
                    .filter((el) => el.id !== user.id)
                    .map((el) => ({ id: el.id, name: el.name }))
            );
        }
    }, [users, user]);

    const handleClose = () => setOpen(false);

    const handleSubmit = () => {
        dispatch(addNewProject({
            admin: user.id,
            name: form.current['name']?.value || "",
            summary: form.current['summary']?.value || "",
            description: form.current['description']?.value || "",
            epicLink: form.current['epicLink']?.value || "",
            developers: form.current['developers'].map((el) => el.id),
            canChanges: form.current['canChanges']?.value || "Admin"
        }))
        handleClose();
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>Add New Project</DialogTitle>
                <DialogContent>
                    <Box component="form" ref={form}>
                        <TextField
                            fullWidth
                            label="Name"
                            name='name'
                            margin="normal"
                        />

                        <TextField
                            fullWidth
                            label="Summary"
                            name="summary"
                            margin="normal"
                        />

                        <TextField
                            fullWidth
                            label="Description"
                            name='description'
                            multiline
                            rows={4}
                            margin="normal"
                        />

                        <TextField
                            fullWidth
                            label="Epic Link"
                            name='epicLink'
                            margin="normal"
                        />

                        <Autocomplete
                            multiple
                            options={developersList}
                            getOptionLabel={(option) => option.name}
                            onChange={(event, value) => {
                                form.current['developers'] = value
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Developers"
                                    margin="normal"
                                    fullWidth
                                />
                            )}
                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Can Changes</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Can Changes"
                                name="canChanges"
                                defaultValue='Admin'
                                defaultChecked='Admin'
                            >
                                <MenuItem value="Admin">Admin</MenuItem>
                                <MenuItem value="All Members">All Members</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleSubmit}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
