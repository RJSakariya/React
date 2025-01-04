import { Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
      sx={{
        background: '#ffffff',
        display:{xs:'none',md:'block'},
        top:87,
      }}
    >
      <Container sx={{ p: 0}} disableGutters>
        <Button
          variant="text"
          className="nav-buttons"
        >
          Vegetables & Fruits
        </Button>
        <Button
          variant="text"
          className="nav-buttons"
        >
          Dairy & Breakfast
        </Button>
        <Button
          variant="text"
          className="nav-buttons"
        >
          Munchies
        </Button>
        <Button
          variant="text"
          className="nav-buttons"
        >
          Cold Drinks & Juices
        </Button>
        <Button
          variant="text"
          className="nav-buttons"
        >
          Instant & Frozen Food
        </Button>
        <Button
          variant="text"
          className="nav-buttons"
        >
          More
        </Button>
      </Container>
    </AppBar>
  )
}
