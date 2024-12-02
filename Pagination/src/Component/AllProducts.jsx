import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container,Card, CardContent, Typography, Grid, CircularProgress, CardMedia, Button } from '@mui/material';

export default function AllProducts() {
    const products = useSelector((state) => state.slice.productData);

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
        <Grid container sacing={3} justifyContent="center">
            {products.length > 0 ? (
                products.map((el, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                image={el.image}
                                alt={el.title}
                                sx={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    maxHeight: 250,
                                    objectFit: 'contain',
                                    margin: 'auto',
                                }}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {expandedIndex.title === index ? el.title : truncateText(el.title, 'title')}
                                </Typography>
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
                                    {expandedIndex.description === index ? el.description : truncateText(el.description, 'description')}
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
