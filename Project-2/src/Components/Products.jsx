import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";
import AllProductCard from "./AllProductCard";
import { fetchUserData, fetchUsers, fetchProducts } from "../App/slice";
import ProductCard from "./ProductCard";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Liked from "./Liked";
import Dashboard from "./Dashboard";

export default function Products() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.sliceKey.categories);
  const toast = useSelector((state) => state.sliceKey.toast);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (toast && toast.message) {
      setOpen(true);
    }
  }, [toast]);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchProducts());

    const storedUser = localStorage.getItem("user");
    let user = null;

    try {
      user = storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
    }

    if (user) {
      if (user.signIn) {
        dispatch(fetchUserData(user.Uid));
        navigate("/");
      } else {
        navigate("/SignIn");
      }
    } else if (location.pathname !== "/SignIn") {
      navigate("/SignUp");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Liked" element={<Liked />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/" element={<AllProductCard />} />
        {categories.map((item, index) => (
          <Route
            key={index}
            path={`/${item.path}`}
            element={<ProductCard category={item.category} />}
          />
        ))}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleClose}
          severity={toast?.status || "info"}
          sx={{ width: "100%" }}
        >
          {toast?.message}
        </Alert>
      </Snackbar>
    </>
  );
}
