import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container,Grid, Card, CardMedia, CardContent, Typography, Button, CircularProgress } from '@mui/material';

function truncateText(text, type, limit = 30) {
  return text.length > limit ? text.substring(0, limit) + '...' : text;
}

export default function Products({ category }) {
  const products = useSelector((state) => state.slice.productData || []);
  const [expandedIndex, setExpandedIndex] = useState({ title: null, description: null });

  const filteredData = products.filter((el) => el.category === category);

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
        filteredData.map((el, ind) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={ind}>
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
                  {expandedIndex.title === ind ? el.title : truncateText(el.title, 'title')}
                </Typography>
                {el.title.length > 30 && expandedIndex.title !== ind && (
                  <Button size="small" color="primary" onClick={() => handleToggleText('title', ind)}>
                    See More
                  </Button>
                )}
                {expandedIndex.title === ind && (
                  <Button size="small" color="primary" onClick={() => handleToggleText('title', ind)}>
                    See Less
                  </Button>
                )}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: expandedIndex.description === ind ? 'unset' : 3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {expandedIndex.description === ind
                    ? el.description
                    : truncateText(el.description, 'description', 100)}
                </Typography>
                {el.description.length > 100 && expandedIndex.description !== ind && (
                  <Button size="small" color="primary" onClick={() => handleToggleText('description', ind)}>
                    See More
                  </Button>
                )}
                {expandedIndex.description === ind && (
                  <Button size="small" color="primary" onClick={() => handleToggleText('description', ind)}>
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
