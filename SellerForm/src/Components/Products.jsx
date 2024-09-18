import { Card, Container, IconButton, Typography } from "@mui/material";
import AddProduct from "./AddProduct";
import { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// eslint-disable-next-line react/prop-types
export default function Products({ detail, setDetail, name, phone }) {
    const [addProduct, setAddProduct] = useState("none");
    return (
        <>
            <Container>
                <Typography component='div' variant="div" sx={{ display: "grid", gap: 10, gridTemplateColumns: "auto", marginTop: 3 }}>
                    <Card sx={{ paddingX: 2, paddingY: 3, backgroundColor: '#afafaf2f', backdropFilter: 'blur(5px)', maxWidth: 300, minWidth: 200, display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                        <IconButton onClick={()=>setAddProduct("block")}>
                            <AddCircleOutlineIcon sx={{ fontSize: 30,color:'white'}} />
                        </IconButton>
                    </Card>
                </Typography>
            </Container>
            <AddProduct name={name} phone={phone} detail={detail} setDetail={setDetail} addProduct={addProduct} setAddProduct={setAddProduct} />
        </>
    )
}