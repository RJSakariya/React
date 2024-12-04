import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, CircularProgress, Rating, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { toggleLikeAsync } from '../App/slice';

function truncateText(text, type, limit = 30) {
  return text.length > limit ? text.substring(0, limit) + '...' : text;
}

// eslint-disable-next-line react/prop-types
export default function ProductCard({ category }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.sliceKey.productData || []);
  const [expandedIndex, setExpandedIndex] = useState({ title: null, description: null });

  const filteredData = products.filter((el) => el.category === category);

  const handleLikeToggle = (product,productId, currentLikedState) => {
    dispatch(toggleLikeAsync({ product,productId, currentLikedState }));
  };

  const handleToggleText = (type, index) => {
    setExpandedIndex((prev) => ({
      ...prev,
      [type]: prev[type] === index ? null : index,
    }));
  };

  return (
    <Container>
      <Grid container spacing={3} justifyContent="center">
        {filteredData.length > 0 ? (
          filteredData.map((el, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ maxWidth: 345, minHeight: 600 }}>
                <IconButton
                  onClick={() => handleLikeToggle(el,el.id, el.liked)}
                  color="error"
                  aria-label="like"
                >
                  {el.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <CardMedia
                  component="img"
                  image={el.image}
                  alt={el.title}
                  sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    minHeight: 250,
                    maxHeight: 250,
                    objectFit: 'contain',
                    margin: 'auto',
                  }}
                />
                <CardContent>
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" component="div">
                      {expandedIndex.title === index ? el.title : truncateText(el.title, 'title')}
                    </Typography>
                  </Grid>
                  {el.title.length > 30 && expandedIndex.title !== index && (
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => handleToggleText('title', index)}
                    >
                      See More
                    </Button>
                  )}
                  {expandedIndex.title === index && (
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => handleToggleText('title', index)}
                    >
                      See Less
                    </Button>
                  )}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: expandedIndex.description === index ? 'unset' : 3,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {expandedIndex.description === index
                      ? el.description
                      : truncateText(el.description, 'description')}
                  </Typography>

                  {el.description.length > 100 && expandedIndex.description !== index && (
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => handleToggleText('description', index)}
                    >
                      See More
                    </Button>
                  )}
                  {expandedIndex.description === index && (
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => handleToggleText('description', index)}
                    >
                      See Less
                    </Button>
                  )}

                  <Typography variant="subtitle1" color="text.primary" sx={{ mt: 2 }}>
                    Price: ${el.price.toFixed(2)}
                  </Typography>

                  <Grid container alignItems="center" sx={{ mt: 1 }}>
                    <Rating
                      value={el.rating?.rate || 0}
                      precision={0.1}
                      readOnly
                      size="small"
                    />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      ({el.rating?.count || 0} reviews)
                    </Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12} justifyContent="center" display="flex">
            <CircularProgress />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
