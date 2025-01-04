import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../Features/Fetchslice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// eslint-disable-next-line react/prop-types
export default function Products({ category, data }) {
  const dispatch = useDispatch()
  // eslint-disable-next-line react/prop-types
  const products = data.filter((el) => el.category === category);
  const cart = useSelector((state) => state.Fetchslice.cart)

  return (
    <Box sx={{
      flexGrow: 3,
      height: '100%',
      overflowY: 'scroll',
      background: '#eeeeee',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    }}>
      <Box sx={{ height: 45, display: 'flex', justifyContent: 'space-between', px: 2, alignItems: 'center', background: 'white', borderRight: "1px solid #eeeeee" }}>
        <Typography variant="h6" component={'p'} sx={{ textTransform: 'capitalize', fontSize: 16, fontWeight: 600, color: "#5b5b5b" }}>Buy {category} Online</Typography>
      </Box>
      <Grid
        container
        sx={{
          flexGrow: 1,
          padding: 1,
        }}
        spacing={1}
      >
        {products.map((el, ind) => (
          <Grid item xs={12} sm={4} md={2.4} key={ind}>
            <Card sx={{ height: 340, position: 'relative', border: '1px solid #e8e8e8', boxShadow: 'none', borderRadius: 2 }}>
              <CardMedia
                sx={{
                  height: { sm: 200, md: 175 },
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
                    height: 150,
                    width: "auto",
                    objectFit: "cover",
                  }}
                />
              </CardMedia>
              <CardContent sx={{ p: 1.5 }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: 13, fontWeight: 600, height: 45, overflowY: 'hidden', textOverflow: 'ellipsis' }}>
                  {el.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {el.weight}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', position: 'absolute', bottom: 10 }}>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'black', fontSize: 11 }}>
                      ₹{el.price}
                    </Typography>
                    {
                      el.deleteprice &&
                      <Typography variant="body2" component={'del'} sx={{ color: '#828282', fontSize: 11 }}>
                        ₹{el.deleteprice}
                      </Typography>
                    }
                  </Box>
                  {
                    cart.find((item) => el.id === item.id) ?
                      <Box size="small" sx={{ color: 'white', background: '#4b8719' }}><IconButton onClick={() => dispatch(addCart(el))}><AddIcon sm/></IconButton>{cart.find((item) => el.id === item.id).count}<IconButton onClick={() => dispatch(removeCart(el))} ><RemoveIcon/></IconButton></Box>
                      :
                      <Button variant="outlined" size="small" sx={{ border: '1px solid #4b8719', color: '#4b8719', background: '#f7fff9' }} onClick={() => dispatch(addCart(el))}>Add</Button>
                  }
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
