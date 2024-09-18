import { useEffect, useState } from 'react';
import './App.css';
import SellerForm from './Components/SellerForm';
import Home from './Components/Home';
import { amber, blue, brown, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow } from '@mui/material/colors';
export default function App() {
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
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [letter, setLetter] = useState("")
  const [detail, setDetail] = useState([])

  useEffect(()=>{
    if(detail){
      console.log(detail);
    }
  },[detail])
  return (
    <>
      {
        !login ?
          < SellerForm setLogin={setLogin} name={name} setName={setName} phone={phone} setPhone={setPhone} getColorForLetter={getColorForLetter} letter={letter} setLetter={setLetter} detail={detail} setDetail={setDetail} />
          :
          <Home setLogin={setLogin} name={name} setName={setName} phone={phone} setPhone={setPhone} getColorForLetter={getColorForLetter} letter={letter} detail={detail} setDetail={setDetail}/>
      }
    </>
  )
}
