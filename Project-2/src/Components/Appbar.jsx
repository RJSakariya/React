import React from "react";
import { AppBar, Box, Toolbar, Typography, Container, IconButton, Tooltip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { signOut } from "../App/slice";

export default function Appbar() {
  const user = useSelector((state) => state.sliceKey.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = () => {
    localStorage.setItem("user", JSON.stringify({ Uid: user.id, signIn: false }));
    dispatch(signOut());
    navigate("/SignIn");
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: <DashboardIcon />,
      path: "/Dashboard",
    },
    {
      title: "Liked",
      icon: <FavoriteIcon />,
      path: "/Liked",
    },
  ];

  return (
    <>
      {user && (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" color="secondary">
            <Container>
              <Toolbar>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Home" onClick={() => navigate("/")}>
                    <IconButton color="inherit">
                      <HomeIcon />
                    </IconButton>
                  </Tooltip>
                </Box>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  E Shop
                </Typography>
                <Box sx={{ display: "flex" }}>
                  {menuItems.map((item, index) => (
                    <Tooltip title={item.title} key={index}>
                      <IconButton
                        color="inherit"
                        onClick={() => navigate(item.path)}
                        sx={{ ml: 1 }}
                      >
                        {item.icon}
                      </IconButton>
                    </Tooltip>
                  ))}
                  <Tooltip title="Sign Out" onClick={handleSignOut}>
                    <IconButton color="inherit" sx={{ ml: 1 }}>
                      <LogoutIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      )}
    </>
  );
}
