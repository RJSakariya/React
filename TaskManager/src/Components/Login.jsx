import { Alert, Avatar, Button, Card, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// eslint-disable-next-line react/prop-types
export default function Login({ letter, getColorForLetter, name, setName, password, setPassword, data, setData, setLogin }) {
  const [loginOrSignUp, setLoginOrSignUp] = useState('SignUp')
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowNewPassword = () => {
    setShowNewPassword((show) => !show)
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((show) => !show)
  };
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const handleSignUp = () => {
    const minPasswordLength = 8;
    if (name === "") {
      setErrorMessage("Please Fill Name.");
    }
    // eslint-disable-next-line react/prop-types
    else if (password.length < minPasswordLength) {
      setErrorMessage(`Password must be at least ${minPasswordLength} characters long.`);
    }
    else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
    }
    else {
      // eslint-disable-next-line react/prop-types
      const alreadySignUp = data.filter((el) => el.name === name)
      if (alreadySignUp.length > 0) {
        setErrorMessage('This User is already Sign In.');
      } else {
        const newData = [...data, { id: Date.now(), name, password, login: true, tasks: [] }]
        setData(newData)
        localStorage.setItem('TaskManager', JSON.stringify(newData))
        setErrorMessage('');
      }
    }
  }
  const handleLogIn = () => {
    // eslint-disable-next-line react/prop-types
    const loginOrNot = data.find((el) => el.name === name)
    if (name === "") {
      setErrorMessage("Please Fill Name.");
    }
    else if (!loginOrNot) {
      setErrorMessage('This User is Not Exist.');
    }
    else if (password === "") {
      setErrorMessage(`Please Fill password`);
    }
    else {
      if (loginOrNot.password !== password) {
        setErrorMessage('Password do not match.')
      }
      else {
        loginOrNot.login = true
        localStorage.setItem('TaskManager', JSON.stringify(data))
        setLogin(true)
      }
    }
  }
  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage('');
      }, 5000)
    }
  }, [errorMessage])
  return (
    <Typography component='div' sx={{
      height: '100vh', width: '100%', minWidth: 320, background: 'url(https://static.vecteezy.com/system/resources/previews/007/692/128/original/people-concept-illustration-of-events-task-management-team-management-for-graphic-and-web-design-business-presentation-and-marketing-material-vector.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {loginOrSignUp == 'SignUp' ? <Card sx={{ position: "fixed", top: '50%', left: '50%', transform: "translate(-50%,-50%)", backgroundColor: '#eeeeee55', backdropFilter: 'blur(3px)', padding: 3, minWidth: 280, maxWidth: 280 }} className="SignUp">
        <Button sx={{ position: 'absolute', right: 0, marginRight: 3 }} variant="text" onClick={() => setLoginOrSignUp('LogIn')}>Log In</Button>
        <Avatar sx={{ backgroundColor: getColorForLetter(letter) }}>
          {letter}
        </Avatar>
        <TextField variant="outlined" label="Enter Your Name" sx={{ marginTop: 3, width: '100%' }} value={name} onChange={(e) => setName(/^[a-zA-Z,'.\-\s]*$/.test(e.target.value) ? e.target.value.toUpperCase() : e.target.value.slice(0, e.target.value.length - 1))} />
        <FormControl sx={{ marginTop: 2, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="newPassword">Enter Password</InputLabel>
          <OutlinedInput
            id="newPassword"
            type={showNewPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowNewPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showNewPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </FormControl>
        <FormControl sx={{ marginTop: 2, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="confirmPassword">Enter Confirm Password</InputLabel>
          <OutlinedInput
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Enter Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormControl>
        {errorMessage && <Alert severity="error" variant="outlined" sx={{ marginTop: 2 }}>{errorMessage}</Alert>}
        <Button sx={{ marginTop: 2 }} variant="contained" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Card> : <Card sx={{ position: "fixed", top: '50%', left: '50%', transform: "translate(-50%,-50%)", backgroundColor: '#eeeeee55', backdropFilter: 'blur(3px)', padding: 3, minWidth: 280, maxWidth: 280 }} className="LogIn">
        <Button sx={{ position: 'absolute', right: 0, marginRight: 3 }} variant="text" onClick={() => setLoginOrSignUp('SignUp')}>Sign Up</Button>
        <Avatar sx={{ backgroundColor: getColorForLetter(letter) }}>
          {letter}
        </Avatar>
        <TextField variant="outlined" label="Enter Your Name" sx={{ marginTop: 3, width: '100%' }} value={name} onChange={(e) => setName(/^[a-zA-Z,'.\-\s]*$/.test(e.target.value) ? e.target.value.toUpperCase() : e.target.value.slice(0, e.target.value.length - 1))} />
        <FormControl sx={{ marginTop: 2, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="Password">Enter Password</InputLabel>
          <OutlinedInput
            id="Password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </FormControl>
        {errorMessage && <Alert severity="error" variant="outlined" sx={{ marginTop: 2 }}>{errorMessage}</Alert>}
        <Button sx={{ marginTop: 2 }} variant="contained" onClick={handleLogIn}>
          Log In
        </Button>
      </Card>
      }
    </Typography >
  )

}