import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            User Management
          </Typography>
          <Button color="inherit" component={Link} to="/">Users</Button>
          <Button color="inherit" component={Link} to="/create-user">Add User</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
