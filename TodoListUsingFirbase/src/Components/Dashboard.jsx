import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Tooltip,
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../Firebase';
import { doc, getDoc, getDocs, collection, deleteDoc, addDoc, updateDoc } from 'firebase/firestore';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState();
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/signin');
      }
    });
  }, [navigate]);
  const fetchUserData = async () => {
    if (user) {
      try {
        const data = await getDoc(doc(db, "user", user.uid));
        if (data.exists()) {
          setUserData(data.data());
        } else {
          console.log("No user data found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };
  useEffect(() => {
    fetchUserData();
  }, [user]);

  const fetchTodos = async () => {
    if (userData) {
      setLoading(true);
      try {
        const list = await getDocs(collection(db, 'Todos'));
        const filtered = list.docs
          .filter((data) => data.data().userUid === userData.uid)
          .map((doc) => ({ ...doc.data(), uid: doc.id }));
        setTodoList(filtered);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [userData]);

  const handleAddTask = async () => {
    if (task.trim()) {
      if (editId) {
        try {
          await updateDoc(doc(db, 'Todos', editId), {
            task,
            priority
          })
          setTask('');
          setPriority('Medium');
          setEditId(null);
          fetchTodos();
        } catch (error) {
          console.error("Error adding task:", error);
        }
      } else {
        const taskDetails = {
          userUid: user.uid,
          task,
          priority,
          status: 'Not Started'
        };
        try {
          await addDoc(collection(db, "Todos"), { ...taskDetails });
          setTask('');
          setPriority('Medium');
          fetchTodos();
        } catch (error) {
          console.error("Error adding task:", error);
        }
      }
    }
  };

  const handleDelete = async (uid) => {
    try {
      await deleteDoc(doc(db, 'Todos', uid));
      setTodoList((prev) => prev.filter((todo) => todo.uid !== uid));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      {userData ? (
        <>
          <AppBar position="sticky">
            <Container>
              <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">Dashboard</Typography>
                <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Tooltip title={`Welcome, ${userData.name} ${userData.surname}`} arrow>
                    <Avatar>
                      {userData.name[0]}{userData.surname[0]}
                    </Avatar>
                  </Tooltip>
                  <Button variant="contained" color="secondary" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>

          <Container sx={{ mt: 4 }}>
            <Typography variant='h6' component='h6'>Add a New Task</Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2, mb: 4 }}>
              <TextField
                label="Task"
                variant="outlined"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                fullWidth
              />
              <FormControl fullWidth>
                <InputLabel>Priority</InputLabel>
                <Select
                  label="Priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  fullWidth
                >
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                </Select>
              </FormControl>
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddTask}
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  {editId ? "Update Task" : "Add Task"}
                </Button>
              </Box>
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Task</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={4} align="center">
                        Loading...
                      </TableCell>
                    </TableRow>
                  ) : todoList.length > 0 ? (
                    todoList.map((todo) => (
                      <TableRow key={todo.uid}>
                        <TableCell>{todo.task}</TableCell>
                        <TableCell>{todo.priority}</TableCell>
                        <TableCell>{todo.status}</TableCell>
                        <TableCell>
                          <Button variant="contained" onClick={() => {
                            setTask(todo.task)
                            setPriority(todo.priority)
                            setEditId(todo.uid)
                          }}>
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            sx={{ ml: 2 }}
                            onClick={() => handleDelete(todo.uid)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} align="center">
                        No tasks available.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </>
      ) : (
        <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Typography variant="subtitle1">Loading...</Typography>
        </Container>
      )}
    </>
  );
}
