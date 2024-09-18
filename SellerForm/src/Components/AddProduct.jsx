import { Alert, Button, ButtonGroup, Card, FormControl, IconButton, InputLabel, MenuItem, Rating, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Clothing from './Categories/Clothing';
import Eletronic from './Categories/Eletronic';
import Food from './Categories/Food';
import Book from './Categories/Book';
import Medicine from './Categories/Medicine';
import dayjs from 'dayjs';
// eslint-disable-next-line react/prop-types
export default function AddProduct({ detail, setDetail, name, phone, addProduct, setAddProduct }) {
    const defaultExpired = dayjs().add(5, 'day')
    const [visible, setVisible] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [image, setImage] = useState("");
    const [alt, setAlt] = useState("");
    const [rating, setRating] = useState(2);
    const [category, setCategory] = useState("CLOTHING");
    const [size, setSize] = useState('L');
    const [clothCategory, setClothCategory] = useState("MEN'S");
    const [clothMaterial, setClothMaterial] = useState('SILK');
    const [eletronicCategory, setEletronicCategory] = useState('TV');
    const [chargeble, setChargeble] = useState('CHARGEBLE');
    const [warranty, setWarranty] = useState('0');
    const [foodCategory, setFoodCategory] = useState('PIZZA');
    const [vagOrNon, setVagOrNon] = useState('VEG');
    const [foodExpired, setFoodExpired] = useState(defaultExpired);
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookColor, setBookColor] = useState('');
    const [bookPages, setBookPages] = useState('');
    const [medicineCategory, setMedicineCategory] = useState('MOUTH');
    const [medicineExpired, setMedicineExpired] = useState(defaultExpired);
    const [medicineSet, setMedicineSet] = useState('10 TABLETS');
    const [err, setErr] = useState("");
    const [errDisplay, setDisplay] = useState('none');
    const closeAddProduct = () => {
        setAddProduct("none");
    };
    const getCategory = (value) => {
        const fields = {
            CLOTHING: <Clothing size={size} setSize={setSize} clothCategory={clothCategory} setClothCategory={setClothCategory} clothMaterial={clothMaterial} setClothMaterial={setClothMaterial} />,
            ELECTRONICS: <Eletronic eletronicCategory={eletronicCategory} setEletronicCategory={setEletronicCategory} chargeble={chargeble} setChargeble={setChargeble} warranty={warranty} setWarranty={setWarranty} />,
            FOOD: <Food foodCategory={foodCategory} setFoodCategory={setFoodCategory} vagOrNon={vagOrNon} setVagOrNon={setVagOrNon} foodExpired={foodExpired} setFoodExpired={setFoodExpired} />,
            BOOKS: <Book bookAuthor={bookAuthor} setBookAuthor={setBookAuthor} bookColor={bookColor} setBookColor={setBookColor} bookPages={bookPages} setBookPages={setBookPages} />,
            MEDICINES: <Medicine medicineCategory={medicineCategory} setMedicineCategory={setMedicineCategory} medicineExpired={medicineExpired} setMedicineExpired={setMedicineExpired} medicineSet={medicineSet} setMedicineSet={setMedicineSet} />
        };
        return fields[value]
    };
    const checkCatagegoryFields = (category) => {
        if (category === 'CLOTHING') {
            if (!clothCategory || !clothMaterial || !size) {
                setErr('Please fill all clothing fields');
                setDisplay("block");
            }
            else {
                // eslint-disable-next-line react/prop-types
                let updatedDetail = detail.map((d) => {
                    if (d.Name === name && d.Phone === phone) {
                        return {
                            ...d,
                            product: [
                                {
                                    ProductName: productName,
                                    ProductPrice: productPrice,
                                    ProductImg: image,
                                    AltText: alt,
                                    Rating: rating,
                                    Category: category,
                                    Size: size,
                                    ClothCategory: clothCategory,
                                    ClothMaterial: clothMaterial,
                                },
                            ],
                        };
                    }
                    return d;
                });
                setDetail(updatedDetail);
                setAddProduct("none");
            }
        }
        else if (category === 'ELETRONIC') {
            if (!eletronicCategory || !chargeble || !warranty) {
                setErr('Please fill all eletronic fields');
                setDisplay("block");
            }
            else {
                // eslint-disable-next-line react/prop-types
                let updatedDetail = detail.map((d) => {
                    if (d.Name === name && d.Phone === phone) {
                        return {
                            ...d,
                            product: [
                                {
                                    ProductName: productName,
                                    ProductPrice: productPrice,
                                    ProductImg: image,
                                    AltText: alt,
                                    Rating: rating,
                                    Category: category,
                                    Item: eletronicCategory,
                                    Chargeble: chargeble,
                                    Warranty: warranty,
                                },
                            ],
                        };
                    }
                    return d;
                });
                setDetail(updatedDetail);
                setAddProduct("none");
            }
        }
        else if (category === 'FOOD') {
            if (!foodCategory || !vagOrNon || !foodExpired) {
                setErr('Please fill all food fields');
                setDisplay("block");
            }
            else {
                // eslint-disable-next-line react/prop-types
                let updatedDetail = detail.map((d) => {
                    if (d.Name === name && d.Phone === phone) {
                        return {
                            ...d,
                            product: [
                                {
                                    ProductName: productName,
                                    ProductPrice: productPrice,
                                    ProductImg: image,
                                    AltText: alt,
                                    Rating: rating,
                                    Category: category,
                                    Name: foodCategory,
                                    VagOrNon: vagOrNon,
                                    Expiry: foodExpired,
                                },
                            ],
                        };
                    }
                    return d;
                });
                setDetail(updatedDetail);
                setAddProduct("none");
            }
        }
        else if (category === 'BOOK') {
            if (!bookAuthor || !bookColor || !bookPages) {
                setErr('Please fill all Book fields');
                setDisplay("block");
            }
            else {
                // eslint-disable-next-line react/prop-types
                let updatedDetail = detail.map((d) => {
                    if (d.Name === name && d.Phone === phone) {
                        return {
                            ...d,
                            product: [
                                {
                                    ProductName: productName,
                                    ProductPrice: productPrice,
                                    ProductImg: image,
                                    AltText: alt,
                                    Rating: rating,
                                    Category: category,
                                    Author: bookAuthor,
                                    Color: bookColor,
                                    Pages: bookPages,
                                },
                            ],
                        };
                    }
                    return d;
                });
                setDetail(updatedDetail);
                setAddProduct("none");
            }
        }
        else if(category === 'MEDICINE') {
            if (!medicineCategory || !medicineExpired || !medicineSet) {
                setErr('Please fill all medicine fields');
                setDisplay("block");
            }
            else {
                // eslint-disable-next-line react/prop-types
                let updatedDetail = detail.map((d) => {
                    if (d.Name === name && d.Phone === phone) {
                        return {
                            ...d,
                            product: [
                                {
                                    ProductName: productName,
                                    ProductPrice: productPrice,
                                    ProductImg: image,
                                    AltText: alt,
                                    Rating: rating,
                                    Category: category,
                                    Medicine: medicineCategory,
                                    Expiry: medicineExpired,
                                    Set: medicineSet,
                                },
                            ],
                        };
                    }
                    return d;
                });
                setDetail(updatedDetail);
                setAddProduct("none");
            }
        }
    }
    const handleSave = () => {
        if (productName === "") {
            setErr("Please enter product name");
            setDisplay("block");
        }
        else if (productPrice === "") {
            setErr("Please enter product price");
            setDisplay("block");
        }
        else if (image === "") {
            setErr("Please enter product image");
            setDisplay("block");
        }
        else if (alt === "") {
            setErr("Please enter product alt");
            setDisplay("block");
        }
        else if (rating === "") {
            setErr("Please enter product rating");
            setDisplay("block");
        }
        else if (category === "") {
            setErr("Please enter product category");
            setDisplay("block");
        }
        else {
            checkCatagegoryFields(category)
        }

    }
    useEffect(() => {
        if (addProduct === "block") {
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
    }, [addProduct]);
    useEffect(() => {
        if (err) {
            setTimeout(() => {
                setDisplay("none")
                setErr("");
            }, 5000)
        }
    }, [err])
    return (
        <>
            <Card sx={{ paddingX: 2, paddingY: 3, backgroundColor: '#afafaf2f', backdropFilter: 'blur(5px)', position: 'fixed', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)', maxWidth: 300, minWidth: 200, display: visible ? "block" : "none", maxHeight: 500, overflowY: 'auto', zIndex: 1100 }} className={`profile ${animate ? (addProduct === 'block' ? 'block-product' : 'none-product') : ''}`}>
                <IconButton
                    sx={{ position: 'absolute', top: 5, right: 5 }}
                    onClick={() => closeAddProduct()}
                >
                    <CancelRoundedIcon sx={{ fontSize: 20, color: "red" }} />
                </IconButton>
                <TextField variant="standard" sx={{ marginTop: 2, width: '100%' }} value={productName} type="text" label='ENTER PRODUCT NAME' onChange={(e) => setProductName(/^[a-zA-Z,'.\-\s]*$/.test(e.target.value) ? e.target.value.toUpperCase() : e.target.value.slice(0, e.target.value.length - 1))}></TextField>
                <TextField variant="standard" sx={{ marginTop: 2, width: '100%' }} value={productPrice} type="number" label='ENTER PRODUCT PRICE' onChange={(e) => setProductPrice(e.target.value)}></TextField>
                <TextField variant="standard" sx={{ marginTop: 2, width: '100%' }} value={image} type="text" label='ENTER IMAGE URL' onChange={(e) => setImage(e.target.value)}></TextField>
                <TextField variant="standard" sx={{ marginTop: 2, width: '100%' }} value={alt} type="text" label='ENTER IMAGE ALT TEXT' onChange={(e) => setAlt(e.target.value)}></TextField>
                <Typography component='div'>
                    <Rating name="half-rating" sx={{ marginTop: 2 }} defaultValue={rating} precision={0.5} onChange={(event, newValue) => setRating(newValue)} />
                </Typography>
                <FormControl sx={{ minWidth: "100%", marginTop: 2 }}>
                    <InputLabel id="demo-controlled-open-select-label">CATEGORY</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        label="CATEGORY"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        sx={{ width: "100%" }}
                    >
                        <MenuItem value={"CLOTHING"}>CLOTHING</MenuItem>
                        <MenuItem value={"ELECTRONICS"}>ELECTRONICS</MenuItem>
                        <MenuItem value={"FOOD"}>FOOD</MenuItem>
                        <MenuItem value={"BOOKS"}>BOOKS</MenuItem>
                        <MenuItem value={"MEDICINES"}>MEDICINES</MenuItem>
                    </Select>
                </FormControl>
                {
                    getCategory(category)
                }
                <Alert severity="error" variant="outlined" sx={{ marginTop: 2, display: errDisplay }}>
                    {err}
                </Alert>
                <ButtonGroup>
                    <Button variant="contained" color="success" sx={{ marginTop: 2 }} onClick={() => handleSave()}>
                        SAVE
                    </Button>
                    <Button variant="outlined" sx={{ marginTop: 2, marginLeft: 2 }}>
                        PREVIEW
                    </Button>
                    <Button variant="contained" color="error" sx={{ marginTop: 2, marginLeft: 2 }}>
                        RESET
                    </Button>
                </ButtonGroup>
            </Card >
        </>
    )
}
