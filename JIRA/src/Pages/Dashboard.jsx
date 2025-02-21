import { Box, Drawer, List, ListItemIcon, ListItemText, AppBar, Toolbar, Typography, ListItemButton, Button } from '@mui/material';
import { useNavigate, Outlet, useLocation, Routes, Route } from 'react-router-dom';
import TocIcon from '@mui/icons-material/Toc';
import ViewCarouselSharpIcon from '@mui/icons-material/ViewCarouselSharp';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchData, logout } from '../Features/Slice';
import Projects from '../Components/Projects';
import ProjectBoard from '../Components/ProjectBoard';

const drawerWidth = 240;
export default function Dashboard() {
    const { user, projects } = useSelector((state) => state.slice)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();

    const [navigation, setNavigate] = useState([
        {
            segment: 'projectlist',
            title: 'Projects List',
            icon: <TocIcon />,
            disabled: false
        },
        {
            segment: 'board',
            title: 'Board',
            icon: <ViewCarouselSharpIcon />,
            disabled: projects.length > 0 ? false : true
        },
    ])
    useEffect(() => {
        if (!user) {
            navigate('/')
        } else {
            dispatch(fetchData(user))
        }
    }, [navigate, user])
    useEffect(() => {
        setNavigate([
            {
                segment: 'projectlist',
                title: 'Projects List',
                icon: <TocIcon />,
                disabled: false
            },
            {
                segment: 'board',
                title: 'Board',
                icon: <ViewCarouselSharpIcon />,
                disabled: projects.length > 0 ? false : true
            },
        ])
    }, [projects])
    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Toolbar />
                <List sx={{ px: 1 }}>
                    {navigation.map((item, index) => (
                        <ListItemButton
                            key={index}
                            selected={location.pathname === `/dashboard/${item.segment}`}
                            onClick={() => navigate(`/dashboard/${item.segment}`)}
                            disabled={item.disabled}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    ))}

                    <Button variant='contained' color='primary' sx={{ mt: 2, width: "100%" }} onClick={() => dispatch(logout())}>
                        Logout
                    </Button>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                    p: 3,
                }}
            >
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar sx={{ display: 'flex', }}>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar />
                <Outlet />
                <Routes>
                    <Route path='/projectlist' element={<Projects />} />
                    <Route path='/board' element={<ProjectBoard />} />
                </Routes>
            </Box>
        </Box>
    );
}
