import { Alert, Avatar, Button, Card, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function SellerForm({ setLogin, name, setName, phone, setPhone, getColorForLetter, letter, setLetter, detail, setDetail }) {
    const [err, setErr] = useState("");
    const [errDisplay, setDisplay] = useState('none');
    const handleSignup = async () => {
        // eslint-disable-next-line react/prop-types
        const already = detail.filter((data) => data.Name === name && data.Phone === phone)
        if (!name) {
            setErr("Name is Empty.");
            setDisplay("flex")
        }
        else if (!phone) {
            setErr("Phone is Empty.");
            setDisplay("flex")
        }
        // eslint-disable-next-line react/prop-types
        else if (phone.length < 10) {
            setErr("Phone is Invalid.");
            setDisplay("flex")
        }
        else if (already.length > 0) {
            setErr("Seller Already Exist.");
            setDisplay("flex")
        }
        else {
            setErr("")
            setLogin(true);
            setDetail([...detail, { Name: name, Phone: phone, product: [] }]);
        }
    }
    const handleLogin = () => {
        // eslint-disable-next-line react/prop-types
        const already = detail.filter((data) => data.Name === name && data.Phone === phone)
        if (!name) {
            setErr("Name is Empty.");
            setDisplay("flex")
        }
        else if (!phone) {
            setErr("Phone is Empty.");
            setDisplay("flex")
        }
        // eslint-disable-next-line react/prop-types
        else if (phone.length < 10) {
            setErr("Phone is Invalid.");
            setDisplay("flex")
        }
        else if (already.length === 0) {
            setErr("Seller does not Exist.");
            setDisplay("flex")
        }
        else {
            setErr("")
            setLogin(true);
        }
    }
    useEffect(() => {
        if (err) {
            setTimeout(() => {
                setDisplay("none")
                setErr("");
            }, 5000)
        }
        if (name) {
            // eslint-disable-next-line react/prop-types
            setLetter(name.slice(0, 1))
        }
    }, [err, name, setLetter])
    return (
        <Typography component='div' className='body'>
            <Card sx={{ paddingX: 2, paddingY: 3, backgroundColor: '#afafaf2f', backdropFilter: 'blur(5px)', position: 'fixed', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)', maxWidth: 300, minWidth: 200 }}>
                <Avatar alt='' sx={{ backgroundColor: getColorForLetter(letter) }}>
                    {letter}
                </Avatar>
                <TextField variant="standard" sx={{ marginTop: 2, width: '100%' }} value={name} type="text" label='ENTER YOUR NAME' onChange={(e) => setName(/^[a-zA-Z,'.\-\s]*$/.test(e.target.value) ? e.target.value.toUpperCase() : e.target.value.slice(0, e.target.value.length - 1))}></TextField>
                <TextField variant="standard" sx={{ marginTop: 2, width: '100%' }} value={phone} type="number" label='ENTER YOUR PHONE NUMBER' onChange={(e) => setPhone(e.target.value.length > 10 ? e.target.value.slice(0, 10) : e.target.value)}></TextField>
                <Alert severity="error" variant="outlined" sx={{ marginTop: 2, display: errDisplay }}>
                    {err}
                </Alert>
                <Button variant="contained" sx={{ marginTop: 2 }} onClick={() => handleSignup()}>
                    Sign Up
                </Button>
                <Button variant="contained" sx={{ marginTop: 2, marginLeft: 2 }} onClick={() => handleLogin()}>
                    LOG IN
                </Button>
            </Card>
        </Typography>
    )
}