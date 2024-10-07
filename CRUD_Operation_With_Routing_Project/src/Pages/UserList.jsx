import { Table, TableBody, TableCell, TableHead, TableRow, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const UserList = ({ setUsers, users }) => {
  const navigate = useNavigate()
  const handleDelete = (id) => {
    // eslint-disable-next-line react/prop-types
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            // eslint-disable-next-line react/prop-types
            users?.map(user => (
              <TableRow key={user.id}>
                <TableCell sx={{ p: 1 }}>{user.name}</TableCell>
                <TableCell sx={{ p: 1 }}>{user.email}</TableCell>
                <TableCell sx={{ p: 1 }}>
                  <Button variant="contained" color="primary" onClick={() => {
                    navigate('/edit-user', { state: { id: user.id, name: user.name, email: user.email } })
                  }}>Edit</Button>
                  <Button onClick={() => handleDelete(user.id)} variant="contained" color="secondary">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default UserList;
