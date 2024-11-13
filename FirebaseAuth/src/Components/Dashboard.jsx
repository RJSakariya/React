import { Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../Firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/signin');
      }
    });
  }, [navigate]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const data = await getDoc(doc(db, "user", user.uid));
          if (data) {
            setUserData(data.data());
          } else {
            console.log("No user data found");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchUserData();
  }, [user]);

  const handleSignOut = async () => {
    try {
      navigate('/signin');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" marginTop={5}>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="subtitle1" mt={2}>
        {userData ? `Welcome, ${userData.name} ${userData.surname}` : 'Loading...'}
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleSignOut} sx={{ mt: 2 }}>
        Sign Out
      </Button>
    </Box>
  );
}
