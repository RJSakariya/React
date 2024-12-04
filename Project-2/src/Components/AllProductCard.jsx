import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Container, Card, CardContent, Typography, Grid, CircularProgress, CardMedia, Button, Rating, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function AllProductCard() {
    const products = useSelector((state) => state.sliceKey.productData);
    
  const dispatch = useDispatch();
  const handleLikeToggle = (product,productId, currentLikedState) => {
    dispatch(toggleLikeAsync({ product,productId, currentLikedState }));
  };

    const [expandedIndex, setExpandedIndex] = useState({
        title: null,
        description: null,
    });

    const handleToggleText = (type, index) => {
        setExpandedIndex((prevState) => ({
            ...prevState,
            [type]: prevState[type] === index ? null : index,
        }));
    };

    const truncateText = (text, type) => {
        if (!text) return '';
        if (type === 'description') {
            return text.length > 100 ? `${text.substring(0, 100)}...` : text;
        }
        return text.length > 30 ? `${text.substring(0, 30)}...` : text;
    };

    return (
        <Container>
            <Grid container spacing={3} justifyContent="center">
                {products.length > 0 ? (
                    products.map((el, index) => (
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
