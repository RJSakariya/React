import { Avatar, Button, Card, CardActions, Typography } from "@mui/material";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Profile({ setLogin, name, setName, phone, setPhone, getColorForLetter, letter, profile, setProfile }) {
    const [visible, setVisible] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (profile === "block") {
            setVisible(true);
            setAnimate(true);
            setTimeout(() => {
                setAnimate(false);
            }, 500);
        } else {
            setAnimate(true);
            setTimeout(() => {
                setVisible(false);
                setAnimate(false);
            }, 500);
        }
    }, [profile]);
    return (
        <Card
            className={`profile ${animate ? (profile === 'block' ? 'block-profile' : 'none-profile') : ''}`}
            sx={{
                display: visible ? "block" : "none",
                maxWidth: 345,
                minWidth: 300,
                paddingY: 4,
                backgroundColor: 'rgba(241, 241, 241, 0.8)',
                backdropFilter: 'blur(2px)',
                boxShadow: '0px 2px 5px #cacaca',
                position: "fixed",
                right: { xs: 10, sm: 25, md: 30 },
                zIndex: 10
            }}
        >

            <Typography sx={{ display: 'flex', justifyContent: 'center' }} component="div">
                <Avatar
                    alt=""
                    sx={{ width: 100, height: 100, backgroundColor: getColorForLetter(letter) }}>
                    {letter}
                </Avatar>
            </Typography>
            <Typography component='h5' variant="h6" sx={{ textAlign: "center", marginTop: 2 }}>{name}</Typography>
            <Typography component='p' variant="p" sx={{ textAlign: "center" }}>{phone}</Typography>
            <CardActions>
                <Button size="small" color="primary" sx={{ position: "absolute", right: 10, bottom: 10 }} onClick={() => {
                    setName("");
                    setPhone("");
                    setLogin(false);
                    setProfile("none");
                }}>Sign Out</Button>
            </CardActions>
        </Card>
    )
}
