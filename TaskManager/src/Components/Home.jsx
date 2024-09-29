import { Alert, AppBar, Avatar, Box, Button, Card, CardContent, Container, Dialog, DialogActions, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, Select, Toolbar, Tooltip, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import PoolIcon from '@mui/icons-material/Pool';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SleddingIcon from '@mui/icons-material/Sledding';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { blue, cyan, deepPurple, lightBlue, red, yellow } from "@mui/material/colors";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// eslint-disable-next-line react/prop-types
export default function Home({ name, getColorForLetter, letter, data, setLogin }) {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState('Reading');
  const [errorMessage, setErrorMessage] = useState('');
  const [editId, setEditId] = useState(null);
  // eslint-disable-next-line react/prop-types
  const userData = data.find((el) => el.name === name);
  const getIcon = (text) => {
    const icons = {
      Running: { icon: <DirectionsRunIcon sx={{ fontSize: 50 }} />, color: red[700] },
      Reading: { icon: <AutoStoriesIcon sx={{ fontSize: 50 }} />, color: deepPurple[500] },
      Writing: { icon: <NoteAltIcon sx={{ fontSize: 50 }} />, color: yellow[700] },
      Swimming: { icon: <PoolIcon sx={{ fontSize: 50 }} />, color: lightBlue[500] },
      Sledding: { icon: <SleddingIcon sx={{ fontSize: 50 }} />, color: cyan[700] },
      Driving: { icon: <DriveEtaIcon sx={{ fontSize: 50 }} />, color: blue[900] }
    };
    return icons[text]
  };
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleClickOpen = () => {
    if (editId) {
      const singleData = userData.tasks.find((el) => el.id === editId)
      setTask(singleData.task)
    }
    setOpen(true)
  };
  const handleClose = () => {
    setOpen(false);
    setEditId(null)
  };
  const addTask = () => {
    if (editId) {
      const singleData = userData.tasks.find((el) => el.id === editId)
      singleData.task = task
      localStorage.setItem('TaskManager', JSON.stringify(data))
    } else {
      userData.tasks = [...userData.tasks, { id: Date.now(), task, status: 'pending' }]
      localStorage.setItem('TaskManager', JSON.stringify(data))
      setErrorMessage('Add Task Successfully..');
    }
    handleClose()
  }
  const changeStatus = (id) => {
    const singleData = userData.tasks.find((el) => el.id === id)
    singleData.status = 'complate'
    localStorage.setItem('TaskManager', JSON.stringify(data))
    setErrorMessage('Status Change Successfully..');
  }
  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage('');
      }, 3000)
    }
  }, [errorMessage])
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container>
            <Toolbar variant="dense" sx={{ display: "flex" }}>
              <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                TASK MANAGER
              </Typography>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={() => {
                  // eslint-disable-next-line react/prop-types
                  const logOut = data.find((el) => el.name === name);
                  if (logOut) {
                    logOut.login = false;
                    setLogin(false);
                    localStorage.setItem('TaskManager', JSON.stringify(data));
                  } else {
                    console.log('User not found');
                  }
                }}
              >
                <Tooltip title="Log Out">
                  <Avatar sx={{ backgroundColor: getColorForLetter(letter) }}>
                    {letter}
                  </Avatar>
                </Tooltip>
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Container>
        <Typography component='div' sx={{ marginTop: 2, minWidth: 320, display: 'flex', flexWrap: 'wrap',justifyContent:'center' }}>
          {
            userData.tasks.length > 0 && userData.tasks.map((el, ind) => {
              return <Card key={ind} sx={{ minWidth: 200, maxWidth: 240, padding: 2, margin: 1, display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>
                <IconButton sx={{ position: "absolute", top: 10, right: 10 }} color='error' onClick={() => {
                  const setDeleteData = userData.tasks.filter((task) => {
                    return task.id !== el.id
                  })
                  userData.tasks = setDeleteData
                  localStorage.setItem('TaskManager', JSON.stringify(data))
                  setErrorMessage('Delete Task Successfully..');
                }}>
                  <DeleteIcon />
                </IconButton>
                <IconButton sx={{ position: "absolute", top: 10, right: 50 }} color='primary' onClick={() => {
                  setEditId(el.id)
                  handleClickOpen()
                }}>
                  <EditNoteIcon />
                </IconButton>
                <Avatar sx={{ height: 100, width: 100, background: getIcon(el.task).color }}>{getIcon(el.task).icon}</Avatar>
                <CardContent sx={{ padding: 0, marginTop: 2 }}>
                  <Typography variant="h5" component="div">
                    {el.task}
                  </Typography>
                </CardContent>
                <Typography color={el.status === 'pending' ? 'warning' : 'success'} sx={{ textTransform: 'uppercase', cursor: el.status === 'pending' && 'pointer' }} onClick={() => {
                  el.status === 'pending' && changeStatus(el.id)
                }}>{el.status === 'pending' ? <AccessTimeIcon sx={{ fontSize: 15 }} /> : <TaskAltIcon sx={{ fontSize: 15 }} />} {el.status}</Typography>
              </Card>
            })
          }
          <Card sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', minWidth: 200, maxWidth: 240, padding: 2, margin: 1, flexGrow: 1,minHeight:170 }} onClick={() => handleClickOpen()}>
            <AddIcon />
          </Card>
        </Typography>
      </Container>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ADD TASK
        </DialogTitle>
        <FormControl sx={{ margin: '0px 10px', minWidth: 280 }}>
          <InputLabel id="demo-simple-select-label">Task</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={task}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value='Running'><DirectionsRunIcon /> Running</MenuItem>
            <MenuItem value='Reading'><AutoStoriesIcon /> Reading</MenuItem>
            <MenuItem value='Writing'><NoteAltIcon /> Writing</MenuItem>
            <MenuItem value='Swimming'><PoolIcon /> Swimming</MenuItem>
            <MenuItem value='Sledding'><SleddingIcon /> Sledding</MenuItem>
            <MenuItem value='Driving'><DriveEtaIcon /> Driving</MenuItem>
          </Select>
        </FormControl>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">Cancle</Button>
          <Button onClick={() => addTask()} variant="contained">
            {editId ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
      {errorMessage && <Alert severity="success" variant="standard" sx={{ position: "fixed", top: 100, left: '50%', transform: "translateX(-50%)" }}>{errorMessage}</Alert>}
    </>
  )
}
