import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import AllProductCard from "./AllProductCard";
import {Container, Tabs, Tab, Box, Typography } from "@mui/material";
import { fetchProducts } from "../App/slice";
import ProductCard from "./ProductCard";

export default function Products() {
  const categories = useSelector((state) => state.sliceKey.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab(0);
    } else {
      const categoryIndex = categories.findIndex(
        (item) => `/${item.path}` === location.pathname
      );
      setActiveTab(categoryIndex + 1);
    }
  }, [location, categories]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    if (newValue === 0) {
      navigate("/");
    } else {
      navigate(`/${categories[newValue - 1].path}`);
    }
  };

  return (
    <>
      {categories.length > 0 && (
        <Container>
          <Typography variant="h6">
            Products
          </Typography>
        <Box sx={{ width: "100%", pb: 2 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            sx={{
              '& .MuiTab-root': {
                fontWeight: "bold",
                textTransform: "none",
              },
              '& .Mui-selected': {
                color: "primary.main",
              },
            }}
          >
            <Tab label="All Products" />
            {categories.map((item, index) => (
              <Tab key={index} label={item.category} />
            ))}
          </Tabs>
        </Box>
        </Container>
      )}

      <Routes>
        <Route path="/" element={<AllProductCard />} />
        {categories.map((item, index) => (
          <Route
            key={index}
            path={`/${item.path}`}
            element={<ProductCard category={item.category} />}
          />
        ))}
      </Routes>
    </>
  );
}
