import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import { amber, blue, brown, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow } from '@mui/material/colors';
import { useEffect, useState } from 'react';

export default function App() {
  const [letter, setLetter] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState([])
  const [login, setLogin] = useState(false)
  const getColorForLetter = (letter) => {
    const colors = {
      A: deepOrange[500], B: deepPurple[500], C: blue[500], D: green[500],
      E: red[500], F: pink[500], G: yellow[500], H: cyan[500], I: teal[500],
      J: indigo[500], K: lime[500], L: amber[500], M: brown[500], N: grey[500],
      O: lightBlue[500], P: lightGreen[500], Q: purple[500], R: orange[500],
      S: deepOrange[700], T: deepPurple[700], U: blue[700], V: green[700],
      W: red[700], X: pink[700], Y: yellow[700], Z: cyan[700],
      default: grey[500]
    };
    return colors[letter.toUpperCase()] || colors.default;
  };
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('TaskManager')) || [];
    setData(storedData);
  }, []);
  
  useEffect(() => {
    if (data.length > 0) {
      const loginOrNot = data.find((el) => el.login);
      if (loginOrNot) {
        setLetter(loginOrNot.name?.slice(0, 1) || "");
        setName(loginOrNot.name);
        setPassword(loginOrNot.password);
        setLogin(true);
      }
    }
  }, [data]);

  useEffect(() => {
    setLetter(name.slice(0, 1))
  }, [name])
  useEffect(() => {
    if (!login) {
      setName('');
      setPassword('');
    }
  }, [login])
  return (
    <>
      {!login ?
        <Login letter={letter} getColorForLetter={getColorForLetter} name={name} setName={setName} password={password} setPassword={setPassword} data={data} setData={setData} setLogin={setLogin} /> :
        <Home letter={letter} getColorForLetter={getColorForLetter} name={name} data={data} setLogin={setLogin}/>
      }
    </>
  )
}
