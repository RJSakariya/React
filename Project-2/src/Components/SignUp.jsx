import { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import { createUser } from "../App/slice";
import {Link} from 'react-router-dom';
export default function SignUp() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const users = useSelector((state) => state.sliceKey.users);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const already = users.find((el)=>el.userName === formData.userName)
    if(already){
      alert("User Already Exist.");
      return;
    }
    const id = Date.now().toString();
    const user = { ...formData, id };
    dispatch(createUser(user));
    alert("User signed up successfully!");
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "grid",
        placeContent: "center",
        pt: 10,
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          mx: "auto",
          p: 3,
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit} style={{marginBottom:'20px'}}>
          <TextField
            label="Username"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={showPassword}
                onChange={handleTogglePasswordVisibility}
                name="showPassword"
              />
            }
            label="Show Password"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </form>
        <Link to="/SignIn">
        Sign In?
        </Link>
      </Box>
    </Container>
  );
}
