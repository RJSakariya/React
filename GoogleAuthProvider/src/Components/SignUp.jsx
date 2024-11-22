import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../Firebase';
import { Link, useNavigate } from 'react-router-dom';
export default function SignUp() {
  const navigate = useNavigate()
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createAuth = await createUserWithEmailAndPassword(auth, email, password);
      if (createAuth) {
        await setDoc(doc(db, "user", createAuth.user.uid),{
          uid:createAuth.user.uid,
          surname,
          name,
          email
        })
        navigate('/dashboard');
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" marginTop={5}>
      <Typography variant="h4">Sign Up</Typography>
      <Box component="form" onSubmit={handleSubmit} width="100%" maxWidth="400px" mt={2}>
        <TextField
          fullWidth
          label="Surname"
          type="text"
          margin="normal"
          variant="outlined"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Name"
          type="text"
          margin="normal"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button fullWidth type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Sign Up
        </Button>
      </Box>
      <Box width="100%" maxWidth="400px" mt={2}>
        <Link ink to="/signin" style={{ textDecoration: "none", marginTop: 20, textAlign: 'left' }}>Sign In?</Link>
      </Box>
    </Box>
  );
};