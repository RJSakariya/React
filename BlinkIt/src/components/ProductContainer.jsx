import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Features/Fetchslice";
import Pagination from "./Pagination";
import { Route, Routes } from "react-router-dom";
import Products from "./Products";

export default function ProductContainer() {
  const [categories, setCategories] = useState([])
  const data = useSelector((state) => state.Fetchslice.data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  useEffect(() => {
    if (data.length > 0) {
      const category = categories
      data.filter((el) => {
        const categoryExists = category.find((item) => item.category === el.category);
        !categoryExists && category.push(el)
      });
      setCategories(category)
    }
  }, [data]);
  return (
    <Container
      sx={{
        p: 0,
        height: {xs:'calc(100vh - 86px)',md:'calc(100vh - 137px)'},
        border: '1px solid #eeeeee',
      }}
      disableGutters
    >
      <Box sx={{ display: 'flex', height: '100%', position: 'relative' }}>
        <Pagination categories={categories} />
        <Routes>
          {
            categories && categories.map((el, ind) => <Route path={el.category} element={<Products category={el.category} data={data} />} key={ind} />)
          }
        </Routes>
      </Box>
    </Container>
  )
}
