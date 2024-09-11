import { useRef, useState } from "react";
import "./App.css"
import { TextField, Avatar, Button, Alert } from '@mui/material';
export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avtar, setAvtar] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const avtarRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName === "" || lastName === "" || avtar === "" || password === "" || confirmPassword === "") {
      setError("Please fill all the fields")
    }
    else if (password !== confirmPassword) {
      setError("Password and Confirm Password should be same")
    }
    else {
      setError("1")
    }
  }
  return (
    <>
      <header className="container header">
        <div className="row">
          <div className="col-md-10 col-lg-8 col-xl-4 card px-3 py-4">
            <Avatar alt="" src={avtar} />
            <h2 className="mt-3">{firstName} {lastName}</h2>
            <p className="mt-3">Password : {password}</p>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <form className="col-md-10 col-lg-8 col-xl-4 card px-3 py-4" onSubmit={(e) => handleSubmit(e)}>
            <Avatar alt="" src={avtar} />
            <TextField id="standard-basic id1" className="mt-3" label="First name" variant="standard" type="text" ref={firstNameRef} onChange={(e) => setFirstName(e.target.value)}/>
            <TextField id="standard-basic id2" className="mt-3" label="Last name" variant="standard" type="text" ref={lastNameRef} onChange={(e) => setLastName(e.target.value)}/>
            <TextField id="standard-basic id3" className="mt-3" label="Avtar URL" variant="standard" type="text" ref={avtarRef} onChange={(e) => setAvtar(e.target.value)} />
            <TextField id="standard-basic id4" className="mt-3" label="Password" variant="standard" type="password" ref={passwordRef} onChange={(e) => setPassword(e.target.value)}/>
            <TextField id="standard-basic id5" className="mt-3" label="Confirm Password" variant="standard" type="password" ref={confirmPasswordRef} onChange={(e) => setConfirmPassword(e.target.value)}/>
            {error === "1" ? <Alert severity="success">
                {"Form Submit Sucessfuly..."}
              </Alert>:
              error === ""? <p></p>:<Alert severity="error">
                {error}
              </Alert>
            }
            <Button variant="contained" className="mt-4" type="submit">Submit</Button>
          </form>
        </div >
      </div >
    </>
  )
}
