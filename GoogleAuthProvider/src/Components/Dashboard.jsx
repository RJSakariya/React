import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Tooltip,
  Box,
  Container
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
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
      {
      userData && 
        <>
          <AppBar position="sticky">
            <Container>
              <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">Dashboard</Typography>
                <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Tooltip title={`Welcome, ${userData.name}`} arrow>
                    <Avatar>
                      {userData.name[0]}
                    </Avatar>
                  </Tooltip>
                  <Button variant="contained" color="secondary" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </>
      }
    </>
  );
}
