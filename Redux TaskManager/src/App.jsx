import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Container, FormControlLabel, IconButton, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateField } from '@mui/x-date-pickers/DateField';
import { addTask, deleteTask, editTask } from './App/Slice';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';

export default function App() {
  const dispatch = useDispatch()
  const tomorrow = dayjs().add(1, 'day')
  const taskDetail = useSelector((state) => state.sliceKey.taskDetail)
  const [taskName, setTaskName] = useState('')
  const [status, setStatus] = useState('Pending')
  const [date, setDate] = useState(tomorrow)
  const [edit, setEdit] = useState(0)

  const reset = () => {
    setTaskName('')
    setDate(tomorrow)
    setStatus('Pending')
  }
  const handleEdit = (data) => {
    setEdit(data.id)
    setTaskName(data.taskName)
    setStatus(data.status)
    setDate(data.date)
  }
  const handleAdd = () => {
    if (edit > 0) {
      dispatch(editTask({ edit, taskName, date, status }))
      setEdit(0)
    } else {
      dispatch(addTask({ taskName, date, status }))
    }
    reset()
  }
  return (
    <Container sx={{ display: "flex" }}>
      <Box sx={{ maxWidth: 250 }}>
        <TextField type='text' value={taskName} label="Enter TaskName" variant='filled' onChange={(e) => setTaskName(e.target.value)} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateField
            value={date}
            disablePast
            variant="filled"
            label="Date"
            onChange={(newDate) => {
              setDate(newDate);
              console.log(date)
            }}
            sx={{ mt: 2 }}
            format="DD/MM/YYYY"
          />
        </LocalizationProvider>
        <Typography component="p" variant='h6' sx={{ mt: 2 }}>Status</Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Pending"
          name="radio-buttons-group"
        >
          <FormControlLabel checked={status === "Pending" ? true : false} value="Pending" control={<Radio />} label="Pending" onClick={(e) => setStatus(e.target.value)} />
          <FormControlLabel checked={status === "Complete" ? true : false} value="Complete" control={<Radio />} label="Complete" onClick={(e) => setStatus(e.target.value)} />
          <FormControlLabel checked={status === "Uncomplete" ? true : false} value="Uncomplete" control={<Radio />} label="Uncomplete" onClick={(e) => setStatus(e.target.value)} />
        </RadioGroup>
        <Button variant='contained' sx={{ mt: 1 }} onClick={() => handleAdd()}>
          {edit > 0 ? "Update Data" : "Add Data"}
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>TaskName</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {taskDetail.length > 0 ?
              taskDetail.map((data, ind) => {
                return <TableRow key={ind}>
                  <TableCell sx={{ py: 0 }}>
                    {ind + 1}
                  </TableCell>
                  <TableCell sx={{ py: 0 }} >{data.taskName}</TableCell>
                  <TableCell sx={{ py: 0 }}>{data.date.format('DD/MM/YYYY')}</TableCell>
                  <TableCell sx={{ py: 0 }}>{data.status}</TableCell>
                  <TableCell sx={{ py: 0 }}>
                    <IconButton sx={{ color: 'red' }} onClick={() => dispatch(deleteTask(data.id))}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton sx={{ color: 'blue' }} onClick={() => handleEdit(data)}>
                      <EditNoteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              })
              : <TableCell colSpan={5} sx={{ textAlign: 'center' }}>No data Found...</TableCell>
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
