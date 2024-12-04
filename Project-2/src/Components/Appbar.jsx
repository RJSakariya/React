import { AppBar, Box, Toolbar, Typography,Container } from "@mui/material";

export default function Appbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              E Shop
            </Typography>
          </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  )
}
