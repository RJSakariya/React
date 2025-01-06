import { Box, Button, Card, CardContent, CardMedia, FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../Features/Fetchslice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types
export default function Products({ category, data }) {
  const dispatch = useDispatch()
  // eslint-disable-next-line react/prop-types
  const products = data.filter((el) => el.category === category);
  const cart = useSelector((state) => state.Fetchslice.cart);
  const [sort, setSort] = useState('Relevance')
  const handleChange = (event) => {
    setSort(event.target.value);
  };
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    document.title = `Buy ${category.toUpperCase()} Online - Your Store Name`;
  }, [category]);

  return (
    <Box sx={{
      flexGrow: { xs: 3, md: 1 },
      height: '100%',
      background: '#eeeeee',
      overflowY: 'scroll',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    }}>
      <Box sx={{ position: { xs: 'sticky', md: 'static' }, top: -1, zIndex: 100, height: 45, display: 'flex', justifyContent: 'space-between', px: 2, alignItems: 'center', background: 'white', borderRight: "1px solid #eeeeee" }}>
        <Typography variant="h6" component={'p'} sx={{ textTransform: 'capitalize', fontSize: 16, fontWeight: 600, color: "#5b5b5b" }}>Buy {category} Online</Typography>
        <Box sx={{ display: { xs: 'none', md: "flex",alignItems:'center' } }}>
          <Typography variant="h6" component={'p'} sx={{ textTransform: 'capitalize', fontSize: 13, fontWeight: 500, color: "#5b5b5b" }}>Sort By</Typography>
          <FormControl
            sx={{
              m: 1,
              width: 210,
              height: 30,
              "& .MuiSelect-select": {
                px: 1.5,
                py: 0.5,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#eeeeee",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#cccccc",
              },
              "& .MuiSelect-icon": {
                color: "green",
              },
            }}
          >
            <Select
              value={sort}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                fontSize: 14,
                color: "green",
                boxShadow:'none',
              }}
            >
              <MenuItem value="Relevance">Relevance</MenuItem>
              <MenuItem value="Price (Low to High)">Price (Low to High)</MenuItem>
              <MenuItem value="Price (High to Low)">Price (High to Low)</MenuItem>
              <MenuItem value="Discount (High to Low)">Discount (High to Low)</MenuItem>
              <MenuItem value="Name (A to Z)">Name (A to Z)</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Grid
        container
        sx={{
          flexGrow: 1,
          padding: { xs: 0.5, sm: 1 },
        }}
        spacing={{ xs: 0.5, sm: 1 }}
      >
        {products.map((el, ind) => (
          <Grid item xs={6} sm={3} md={2.4} key={ind}>
            <Card sx={{ minWidth: 100, position: 'relative', border: '1px solid #e8e8e8', boxShadow: 'none', borderRadius: 2 }}>
              <CardMedia
                sx={{
                  minHeight: 80,
                  maxHeight: 180,
                  py: 1,
                  width: "100%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={el.image}
                  alt={el.name}
                  style={{
                    width: "80%",
                    objectFit: "cover",
                  }}
                />
              </CardMedia>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontSize: { xs: 10, md: 13 }, height: { xs: 26, md: 35 }, fontWeight: 600, lineHeight: 1.3, overflowY: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: "vertical", textOverflow: 'ellipsis' }}>
                  {el.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: 10, md: 12 }, letterSpacing: -1, mb: 2 }}>
                  {el.weight}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', minWidth: 70, flexGrow: 1 }}>
                    <Typography variant="body2" sx={{ color: 'black', fontSize: { xs: 10, md: 11 }, mb: 1, mr: 1 }}>
                      ₹{el.price}
                    </Typography>
                    {
                      el.deleteprice &&
                      <Typography variant="body2" component={'del'} sx={{ color: '#828282', fontSize: { xs: 10, md: 11 }, minWidth: 35 }}>
                        ₹{el.deleteprice}
                      </Typography>
                    }
                  </Box>
                  <Box sx={{}}>
                    {
                      cart.find((item) => el.id === item.id) ?
                        <Box sx={{ color: 'white', background: '#3d8321', display: 'flex', minWidth: 65, height: 30, alignItems: 'center', justifyContent: 'space-evenly', borderRadius: 1 }}>
                          <AddIcon sx={{ fontSize: { xs: 12, md: 14 }, cursor: 'pointer' }} onClick={() => dispatch(addCart(el))} />
                          <Typography variant="p" component='h6' sx={{ fontsize: 10, fontWeight: 500 }}>{cart.find((item) => el.id === item.id).count}</Typography>
                          <RemoveIcon sx={{ fontSize: { xs: 12, md: 14 }, cursor: 'pointer' }} onClick={() => dispatch(removeCart(el))} /></Box>
                        :
                        <Button variant="outlined" sx={{ border: '1px solid #3d8321', color: '#3d8321', background: '#f7fff9', fontSize: { xs: 10, md: 12 }, py: 0.4, px: 0.2 }} onClick={() => dispatch(addCart(el))}>Add</Button>
                    }
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
