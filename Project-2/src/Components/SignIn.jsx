import { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Container
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {Link,useNavigate} from 'react-router-dom';
import {fetchUserData} from '../App/slice'

export default function SignIn() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const users = useSelector((state) => state.sliceKey.users);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData){
     const signIn = users.find((el)=>el.userName === formData.userName)
     if(signIn){
      if(signIn.password === formData.password){
        localStorage.setItem("user", JSON.stringify({ Uid: signIn.id, signIn: true }));
        dispatch(fetchUserData(signIn.id))
        navigate('/')
      }else{
        alert('Password Incorrect')
       }
     }
     else{
      alert('user not exist')
     }
}
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
        Sign In
      </Typography>
      <form onSubmit={handleSubmit} style={{marginBottom:'20px'}}>
        <TextField
          label="User Name"
          name="userName"
          type="text"
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Sign In
        </Button>
      </form>
      <Link to="/SignUp">
        Sign Up?
        </Link>
    </Box>
    </Container>
  );
}
