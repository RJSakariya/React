import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../App/Slice";
import { Routes, Route, useNavigate } from "react-router-dom";
import Products from "./Products";
import AllProducts from "./AllProducts";
import { Tabs, Tab, Box } from "@mui/material";

export default function Home() {
  const categories = useSelector((state) => state.slice.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleTabChange = (event, newValue) => {
    if (newValue === 0) {
      navigate("/");
    } else {
      navigate(`/${categories[newValue - 1].path}`);
    }
  };

  return (
    <>
      {categories.length>0 &&<Box sx={{ width: "100%",pb:2 }}>
        <Tabs
          value={false}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All Products" />
          {categories.map((item, index) => (
            <Tab key={index} label={item.category} />
          ))}
        </Tabs>
      </Box>}

      <Routes>
        <Route path="/" element={<AllProducts />} />
        {categories.map((item, index) => (
          <Route
            key={index}
            path={`/${item.path}`}
            element={<Products category={item.category} />}
          />
        ))}
      </Routes>
    </>
  );
}
