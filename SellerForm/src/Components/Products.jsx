import { Card, Container, IconButton, Typography } from "@mui/material";
import AddProduct from "./AddProduct";
import { useEffect, useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ProductCard from "./ProductCard";

// eslint-disable-next-line react/prop-types
export default function Products({ detail, setDetail, name, phone }) {
    const [addProduct, setAddProduct] = useState("none");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const newProducts = [];
        // eslint-disable-next-line react/prop-types
        detail.forEach((d) => {
            if (d.Name === name && d.Phone === phone) {
                newProducts.push(...d.product);
            }
        });
        setProducts(newProducts);
    }, [detail, name, phone]);

    return (
        <>
            <Container>
                <Typography 
                    component='div' 
                    variant="div" 
                    sx={{ display: "grid", gap: 2, gridTemplateColumns: 'repeat(4, 1fr)', marginTop: 3 }}>
                    {
                        products.map((data, id) => (
                            <ProductCard key={id} data={data} />
                        ))
                    }
                    <Card sx={{ paddingX: 2, paddingY: 3, backgroundColor: '#afafaf2f', backdropFilter: 'blur(5px)', maxWidth: 250, minWidth: 200, display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                        <IconButton onClick={() => setAddProduct("block")}>
                            <AddCircleOutlineIcon sx={{ fontSize: 30, color: 'white' }} />
                        </IconButton>
                    </Card>
                </Typography>
            </Container>
            <AddProduct name={name} phone={phone} detail={detail} setDetail={setDetail} addProduct={addProduct} setAddProduct={setAddProduct} />
        </>
    )
}
