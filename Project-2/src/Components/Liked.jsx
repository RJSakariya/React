import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button,IconButton} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toggleLikeAsync } from "../App/slice";

const truncateText = (text, limit) =>
  text?.length > limit ? `${text.substring(0, limit)}...` : text;

export default function Liked() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.sliceKey.productData || []);
  const user = useSelector((state) => state.sliceKey.userData);
  const likedProducts = products.filter((el) => user?.liked?.includes(el.id));

  const handleLikeToggle = (productId) => {
    dispatch(toggleLikeAsync({ productId, user }));
  };

  const [expandedIndex, setExpandedIndex] = React.useState({ title: null, description: null });

  const handleToggleText = (type, index) => {
    setExpandedIndex((prev) => ({
      ...prev,
      [type]: prev[type] === index ? null : index,
    }));
  };

  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Liked Products
      </Typography>
      <Grid container spacing={3}>
        {likedProducts.length > 0 ? (
          likedProducts.map((el, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={el.id}>
              <Card sx={{ maxWidth: 345, minHeight: 520, p: 2 }}>
                <IconButton
                  onClick={() => handleLikeToggle(el.id)}
                  color="error"
                  aria-label="unlike"
                >
                  <FavoriteIcon />
                </IconButton>
                <CardMedia
                  component="img"
                  image={el.image}
                  alt={el.title}
                  sx={{
                    maxWidth: "100%",
                    height: "auto",
                    minHeight: 250,
                    maxHeight: 250,
                    objectFit: "contain",
                    margin: "auto",
                  }}
                />
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h6" component="div">
                    {expandedIndex.title === index
                      ? el.title
                      : truncateText(el.title, 30)}
                    {el.title.length > 30 && (
                      <Button
                        size="small"
                        color="secondary"
                        onClick={() => handleToggleText("title", index)}
                      >
                        {expandedIndex.title === index ? "See Less" : "See More"}
                      </Button>
                    )}
                  </Typography>
                  <Typography variant="subtitle1" color="text.primary" sx={{ mt: 0 }}>
                    Price: ${el.price.toFixed(2)}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      WebkitLineClamp: expandedIndex.description === index ? "unset" : 3,
                    }}
                  >
                    {expandedIndex.description === index
                      ? el.description
                      : truncateText(el.description, 70)}
                    {el.description.length > 70 && (
                      <Button
                        size="small"
                        color="secondary"
                        onClick={() => handleToggleText("description", index)}
                      >
                        {expandedIndex.description === index ? "See Less" : "See More"}
                      </Button>
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12} justifyContent="center" display="flex">
            <Typography variant="h6" color="text.secondary">
              No liked products found.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
