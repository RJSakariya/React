import { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate,useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const EditUser = ({users}) => {
  const { state } = useLocation();
  const id = state?.id
  const [name, setName] = useState(state?.name || '');
  const [email, setEmail] = useState(state?.email || '');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // eslint-disable-next-line react/prop-types
    const updatedUser = users.find((data)=>data.id === id);
    updatedUser.id = id;
    updatedUser.name = name;
    updatedUser.email = email
    navigate('/');
  };

  return (
    <Container>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Update User
      </Button>
    </Container>
  );
};

export default EditUser;
