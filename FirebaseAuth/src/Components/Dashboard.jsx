import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Dashboard () {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/signin');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" marginTop={5}>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="subtitle1" mt={2}>Welcome</Typography>
      <Button variant="contained" color="secondary" onClick={handleSignOut} sx={{ mt: 2 }}>
        Sign Out
      </Button>
    </Box>
  );
};
