import { TextField, Button, Box, Typography, Card, CardContent, Alert } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../Features/Slice'

function Login() {
  const { user } = useSelector((state) => state.slice)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data = useRef()
  const [err, setErr] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: data.current["email"].value,
      password: data.current["password"].value,
    }
    const errors = [];
    if (!user.email.trim()) errors.push("Email is required.");
    if (!user.password.trim()) errors.push("Password is required.");

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (user.email && emailRegex.test(user.email)) {
      errors.push("Invalid email format.");
    }
    if (user.password && user.password.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    }
    if (errors.length > 0) {
      setErr(errors.join("\n"));
      return;
    }
    setErr('')
    dispatch(setUser(user))
  };
  useEffect(()=>{
    if(user){
      navigate('/dashboard/projectlist')
    }
  },[user])
  return (
    <Card
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        maxWidth: 360
      }}
    >
      <CardContent>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component='form' ref={data} onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {err && <Alert severity="error" sx={{ whiteSpace: 'pre-wrap' }}>{err}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </Box>
        <Typography variant='body2' sx={{ mt: 2 }}>
          If You are visiting for the first time? <Link to='/'>Sign Up</Link>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Login;
