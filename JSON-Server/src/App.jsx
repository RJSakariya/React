import { useEffect, useState, useRef } from "react";
import { Container, Card, CardContent, Typography, CardMedia, Button, Box, Pagination as MUIButtonPagination } from "@mui/material";
import { Rating } from "@mui/material";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination as SwiperPagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function App() {
  const [cardsData, setCardsData] = useState([]); 
  const [userItem, setUserItem] = useState([]); 
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => setCurrentSlide(swiper.activeIndex);

  const handlePageChange = (event, value) => {
    setCurrentSlide(value - 1);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(value - 1); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const productResponse = await axios.get("http://localhost:5000/products");
      const cartResponse = await axios.get("http://localhost:5000/userItem");
      setCardsData(productResponse.data);
      setUserItem(cartResponse.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const addToCart = async (product) => {
    try {
      const updatedProduct = { ...product, quantityAvailable: product.quantityAvailable - 1 };
      
      await axios.put(`http://localhost:5000/products/${product.id}`, updatedProduct);
      let userProduct = userItem.find((el) => el.id === product.id);
      if (userProduct) {
        userProduct.AddedQuantity = userProduct.AddedQuantity + 1;
        await axios.put(`http://localhost:5000/userItem/${product.id}`, userProduct);
        fetchData()
      } else {
        userProduct = {
          ...product,
          AddedQuantity: 1,
        };
        await axios.post(`http://localhost:5000/userItem`, userProduct);
        fetchData()
      }
      alert(`${product.title} added to cart!`);
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };

  const cancelItem = async (product) => {
    try {
      const CancledProduct = cardsData.find((el) => el.id === product.id);
      const updatedProduct = {...CancledProduct,quantityAvailable:CancledProduct.quantityAvailable + 1}
      await axios.put(`http://localhost:5000/products/${product.id}`, updatedProduct);
      let userProduct = userItem.find((el) => el.id === product.id);
      if (userProduct && userProduct.AddedQuantity > 1) {
        userProduct.AddedQuantity = userProduct.AddedQuantity - 1;
        await axios.put(`http://localhost:5000/userItem/${product.id}`, userProduct);
        fetchData()
      } else {
        await axios.delete(`http://localhost:5000/userItem/${product.id}`);
        fetchData()
      }
      alert(`${product.title} cancle to cart!`);
    } catch (error) {
      console.error("Error removing from cart", error);
    }
  };

  return (
    <Container>
      <Swiper
        ref={swiperRef}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        pagination={{ clickable: true }}
        modules={[Navigation, SwiperPagination]}
        style={{ height: 'fit-content', width: 320,padding:2 }}
      >
        {cardsData && cardsData.map((product, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ width: "100%", boxShadow: 3, borderRadius: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Available: {product.quantityAvailable}
                </Typography>
                <Rating name="product-rating" value={product.rating} precision={0.1} readOnly />
              </CardContent>
              <Box sx={{ padding: 1, textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product)}
                  sx={{ width: "90%" }}
                  disabled={product.quantityAvailable <= 0}
                >
                  {product.quantityAvailable > 0 ? "Add to Cart" : "Out of Stock"}
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <MUIButtonPagination
        count={cardsData.length}
        page={currentSlide + 1}
        onChange={handlePageChange}
        variant="outlined"
        siblingCount={0}
        boundaryCount={1}
        sx={{
          marginTop: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
        hidePrevButton={cardsData.length > 1 && currentSlide > 0 ? false : true}
        hideNextButton={cardsData.length > 1 && currentSlide < cardsData.length - 1 ? false : true}
      />

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Shopping Cart</Typography>
        {userItem.length === 0 ? (
          <Typography variant="body2">Your cart is empty</Typography>
        ) : (
          userItem.map((item, index) => (
            <Box key={index} sx={{ display: "flex", justifyContent: "space-between", padding: 1, borderBottom: "1px solid #ccc" }}>
              <Typography>{item.title} (x{item.AddedQuantity})</Typography>
              <Typography>${item.price * item.AddedQuantity}</Typography>
              <Button variant="contained" color="secondary" onClick={() => cancelItem(item)}>
                Remove One
              </Button>
            </Box>
          ))
        )}
      </Box>
      </Container>
  );
}
