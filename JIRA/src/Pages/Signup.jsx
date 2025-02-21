import { TextField, Button, Box, Typography, Card, CardContent, Alert } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../Features/Slice';
function Signup() {
  const { user } = useSelector((state) => state.slice)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data = useRef(null)
  const [err, setErr] = useState(null)
  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      name: data.current["name"].value,
      email: data.current["email"].value,
      password: data.current["password"].value,
      confirmPassword: data.current["confirmPassword"].value,
    };
    const errors = [];
    if (!userData.name.trim()) errors.push("Name is required.");
    if (!userData.email.trim()) errors.push("Email is required.");
    if (!userData.password.trim()) errors.push("Password is required.");
    if (!userData.confirmPassword.trim()) errors.push("Confirm Password is required.");

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (userData.email && emailRegex.test(userData.email)) {
      errors.push("Invalid email format.");
    }
    if (userData.password && userData.password.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    }
    if (userData.password !== userData.confirmPassword) {
      errors.push("Passwords do not match.");
    }
    if (errors.length > 0) {
      setErr(errors.join("\n"));
      return;
    }
    setErr('')
    dispatch(signUp(userData))
  };
  useEffect(() => {
    console.log(user)
    if (user) {
      navigate('/dashboard/projectlist')
    }
  }, [user])

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
          Sign Up
        </Typography>
        <Box component="form" ref={data} onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
          />
          {err && <Alert severity="error" sx={{ whiteSpace: 'pre-wrap' }}>{err}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Typography variant='body2' sx={{ mt: 2 }}>
            If have you already account? <Link to='/Login'>Login</Link>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Signup;
