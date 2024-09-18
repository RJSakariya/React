import { AppBar, Avatar, Box, Container, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import Profile from './Profile';

// eslint-disable-next-line react/prop-types
export default function Appbar({ setLogin, name, setName, phone, setPhone, getColorForLetter, letter }) {
    const [profile, setProfile] = useState("none")
    return (
        <>
            <AppBar sx={{ backgroundColor: '#afafaf2f', backdropFilter: 'blur(5px)', position: 'sticky', top: 0, left: 0 }}>
                <Container>
                    <Toolbar>
                        <Typography variant="h6" component="div" color='primary' fontWeight="700">
                            SELLER ACTIVITY
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: 'right' }}>
                            <Tooltip title="Profile">
                                <IconButton onClick={() => setProfile(profile === "none" ? "block" : "none")}>
                                    <Avatar alt='' sx={{ backgroundColor: getColorForLetter(letter) }}>
                                        {letter}
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                    <Profile profile={profile} setProfile={setProfile} setLogin={setLogin} name={name} setName={setName} phone={phone} setPhone={setPhone} getColorForLetter={getColorForLetter} letter={letter} />
                </Container>
            </AppBar >
        </>
    )
}
