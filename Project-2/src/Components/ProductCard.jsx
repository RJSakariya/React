import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,Grid,Card,CardMedia,CardContent,Typography,Button,CircularProgress,Rating,IconButton,Box,Tabs, Tab,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { toggleLikeAsync } from "../App/slice";
import { useNavigate, useLocation } from "react-router-dom";

const truncateText = (text, limit) =>
  text?.length > limit ? `${text.substring(0, limit)}...` : text;

export default function ProductCard({ category }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState({ title: null, description: null });
  const products = useSelector((state) => state.sliceKey.productData || []);
  const categories = useSelector((state) => state.sliceKey.categories || []);

  useEffect(() => {
    const categoryIndex =
      location.pathname === "/"
        ? 0
        : categories.findIndex((item) => `/${item.path}` === location.pathname) + 1;
    setActiveTab(categoryIndex);
  }, [location.pathname, categories]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    navigate(newValue === 0 ? "/" : `/${categories[newValue - 1].path}`);
  };

  const handleLikeToggle = (product, productId, currentLikedState) => {
    dispatch(toggleLikeAsync({ product, productId, currentLikedState }));
  };

  const handleToggleText = (type, index) => {
    setExpandedIndex((prev) => ({
      ...prev,
      [type]: prev[type] === index ? null : index,
    }));
  };

  const filteredData = useMemo(
    () => products.filter((el) => el.category === category),
    [products, category]
  );

  return (
    <>
      {categories.length > 0 && (
        <Container sx={{ mt: 10 }}>
          <Typography variant="h6">Products</Typography>
          <Box sx={{ width: "100%", pb: 2 }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              sx={{
                overflowX: "auto",
                "& .MuiTab-root": {
                  fontWeight: "bold",
                  textTransform: "none",
                },
                "& .Mui-selected": {
                  color: "primary.main",
                },
              }}
            >
              <Tab label="ALL PRODUCTS" />
              {categories.map((item, index) => (
                <Tab key={item.path} label={item.category.toUpperCase()} />
              ))}
            </Tabs>
          </Box>
        </Container>
      )}
      <Container>
        <Grid container spacing={3}>
          {filteredData.length > 0 ? (
            filteredData.map((el, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={el.id}>
                <Card sx={{ maxWidth: 345, minHeight: 520, p: 2 }}>
                  <IconButton
                    onClick={() => handleLikeToggle(el, el.id, el.liked)}
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
                          color="primary"
                          onClick={() => handleToggleText("title", index)}
                        >
                          {expandedIndex.title === index ? "See Less" : "See More"}
                        </Button>
                      )}
                    </Typography>
                    <Typography variant="subtitle1" color="text.primary" sx={{ mt: 0 }}>
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
                          color="primary"
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
              <CircularProgress />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}
