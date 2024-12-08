import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { deleteProductAsync, updateProductAsync, addProductAsync } from "../App/slice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.sliceKey.productData || []);
  const user = useSelector((state) => state.sliceKey.userData);

  const [editProduct, setEditProduct] = useState(null);
  const [newProduct, setNewProduct] = useState(false);

  const handleEdit = (product) => {
    setEditProduct({ ...product });
  };

  const handleSave = () => {
    if (editProduct) {
      dispatch(updateProductAsync(editProduct));
      setEditProduct(null);
    }
  };

  const handleAddNew = () => {
    setEditProduct({
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      admin: user.userName,
    });
    setNewProduct(true);
  };

  const handleSaveNew = () => {
    if (editProduct) {
      dispatch(addProductAsync(editProduct));
      setEditProduct(null);
      setNewProduct(false);
    }
  };

  const handleDelete = (productId) => {
    dispatch(deleteProductAsync(productId));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageReader = new FileReader()
      imageReader.readAsDataURL(file)
      imageReader.onload=()=>{
        const image = imageReader.result
       setEditProduct({ ...editProduct, image: image });
      }
    }
  };

  const adminProducts = products.filter((el) => el.admin === user.userName);

  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Admin Dashboard
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        onClick={handleAddNew}
        sx={{ mb: 3 }}
      >
        Add New Item
      </Button>
      <Grid container spacing={3}>
        {adminProducts.length > 0 ? (
          adminProducts.map((el, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ maxWidth: 345, minHeight: 520, p: 2, position: "relative" }}>
                <Box sx={{ position: "absolute", top: 10, right: 10 }}>
                  <IconButton color="secondary" onClick={() => handleEdit(el)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(el.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
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
                    {el.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.primary" sx={{ mt: 0 }}>
                    Price: ${el.price.toFixed(2)}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0 }}>
                    {el.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Category: {el.category || "N/A"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12} justifyContent="center" display="flex">
            <Typography>No products managed by this admin.</Typography>
          </Grid>
        )}
      </Grid>

      {editProduct && (
        <Dialog open={true} onClose={() => setEditProduct(null)}>
          <DialogTitle>{newProduct ? "Add New Product" : "Edit Product"}</DialogTitle>
          <DialogContent>
            <TextField
              label="Title"
              value={editProduct.title}
              onChange={(e) =>
                setEditProduct({ ...editProduct, title: e.target.value })
              }
              fullWidth
              margin="dense"
            />
            <TextField
              label="Price"
              type="number"
              value={editProduct.price}
              onChange={(e) =>
                setEditProduct({ ...editProduct, price: parseFloat(e.target.value) })
              }
              fullWidth
              margin="dense"
            />
            <TextField
              label="Description"
              value={editProduct.description}
              onChange={(e) =>
                setEditProduct({ ...editProduct, description: e.target.value })
              }
              fullWidth
              margin="dense"
              multiline
              rows={4}
            />
            <TextField
              label="Category"
              value={editProduct.category || ""}
              onChange={(e) =>
                setEditProduct({ ...editProduct, category: e.target.value })
              }
              fullWidth
              margin="dense"
            />
            <TextField
              label="Image URL"
              value={editProduct.image}
              onChange={(e) =>
                setEditProduct({ ...editProduct, image: e.target.value })
              }
              fullWidth
              margin="dense"
            />
            <Button
              variant="contained"
              component="label"
              color="secondary"
              sx={{ mt: 2 }}
            >
              Upload Local Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Button>
            {editProduct.image && (
              <Box mt={2}>
                <Typography variant="subtitle2">Image Preview:</Typography>
                <img
                  src={editProduct.image}
                  alt="Preview"
                  style={{
                    width: "100%",
                    maxHeight: 200,
                    objectFit: "contain",
                  }}
                />
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditProduct(null)} color="secondary">
              Cancel
            </Button>
            <Button onClick={newProduct ? handleSaveNew : handleSave} variant="contained" color="secondary">
              {newProduct ? "Add" : "Save"}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
}
