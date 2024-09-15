import {
    Alert,
    Button,
    Card,
    TextField,
    Typography,
    Avatar
} from "@mui/material";
import { useEffect, useState } from "react";

export default function CreatePerson() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState(null);

    const handleCreate = () => {
        if (name === "") {
            setError("name");
        } else if (!/^[a-zA-Z,'.\-\s]*$/.test(name)) {
            setError("nameNotValid");
        } else if (phone === "" || phone.length !== 10) {
            setError("phone");
        } else {
            setError("success");
        }
    };
    useEffect(() => {
        // Automatically clear errors after 3 seconds
        if (error !== null) {
            setTimeout(() => {
                setError(null);
            }, 3000);
        }
    }, [error]);

    return (
        <Card sx={{
            maxWidth: 345,
            minWidth: 300,
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: 2,
            backgroundColor: '#f1f1f19f',
            backdropFilter: 'blur(2px)',
            boxShadow: '0px 2px 5px #cacaca',
            zIndex: 5
        }}
        >

            <Typography gutterBottom variant="h5" sx={{ marginTop: 2 }}>
                CREATE NEW PERSON
            </Typography>

            <Avatar>{name.slice(0, 1)}</Avatar>

            <TextField
                id="name"
                value={name}
                variant="standard"
                label="Name"
                type="text"
                sx={{ width: "100%", marginTop: 2, textTransform: "uppercase" }}
                onChange={(e) => setName(e.target.value.toUpperCase())}
            />

            <TextField
                id="phone"
                value={phone}
                variant="standard"
                label="Mobile Number"
                sx={{ width: "100%", marginTop: 2 }}
                type="number"
                onChange={(e) => setPhone(Math.max(0, parseInt(e.target.value)).toString().slice(0, 10))}
            />
            {error === "success" ?
                <Alert severity="success" sx={{ display: error ? "block" : "none", marginTop: 2 }}>
                    Person created Sucessfully
                </Alert> : <Alert severity="error" sx={{ display: error ? "block" : "none", marginTop: 2 }}>
                    {error === "name" ? "Please Fill Name."
                        : error === "nameNotValid" ? "Name Is Not Valid."
                            : error === "phone" ? "Please Fill Phone properly."
                                : "Please fill date properly."}
                </Alert>}


            <Button
                variant="outlined"
                sx={{ marginTop: 2, textTransform: "uppercase" }}
                onClick={handleCreate}
            >
                CREATE
            </Button>
        </Card>
    );
}