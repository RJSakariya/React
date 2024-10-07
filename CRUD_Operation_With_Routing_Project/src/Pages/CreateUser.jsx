import { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const CreateUser = ({ setUsers, users }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // eslint-disable-next-line react/prop-types
    const newUser = [...users,{ id: users.length > 0 ? users[users.length - 1].id + 1 : 1, name, email }];
    setUsers(newUser);
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
        Add User
      </Button>
    </Container>
  );
};

export default CreateUser;
