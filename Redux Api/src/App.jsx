import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './App/Slice';
import { Card, CardContent, CardMedia, Typography, Grid, Rating, Box, CircularProgress, Alert, Container, Tooltip } from '@mui/material';

export default function App() {
  const { data, loading, error } = useSelector((state) => state.sliceKey);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress />
    </Box>;
  }

  if (error) {
    return <Container>
      <Alert severity="error">Failed to fetch data: {error}</Alert>
    </Container>;
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {data.length > 0 && data.map((product, ind) => (
          <Grid item xs={12} sm={6} md={4} key={ind}>
            <Card sx={{ maxWidth: 345, margin: 2}}>
              <Box sx={{
                  height: 200,
                  width: "100%",
                  display:"grid",
                 placeItems:'center'
                }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{
                  maxHeight: 200,
                  maxWidth: 300,
                  width:"fit-content",
                }}
              />
              </Box>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description.length > 100 ? `${product.description.slice(0, 100)}...` : product.description}
                </Typography>
                <Typography variant="h6" color="primary" mt={1}>
                  ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Category: {product.category}
                </Typography>
                <Box display="flex" alignItems="center">
                  <Tooltip title={product.rating.rate}>
                    <Rating value={product.rating.rate} precision={0.1} readOnly />
                  </Tooltip>
                  <Typography variant="body2" ml={1}>
                    ({product.rating.count})
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
