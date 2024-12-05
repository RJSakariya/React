import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AllProductCard from "./AllProductCard";
import { fetchUserData,fetchUsers } from "../App/slice";
import ProductCard from "./ProductCard";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.sliceKey.categories);

  useEffect(() => {
    dispatch(fetchUsers());
    const user = JSON.parse(localStorage.getItem("user")) || null;

    if (user && user.signIn) {
      dispatch(fetchUserData(user.Uid));
      navigate("/");
    } else if (user) {
      navigate("/SignIn");
    } else {
      navigate("/SignUp");
    }
  }, [dispatch, navigate]);

  return (
    <>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/" element={<AllProductCard />} />
        {categories.length > 0 &&
          categories.map((item, index) => (
            <Route
              key={index}
              path={`/${item.path}`}
              element={<ProductCard category={item.category} />}
            />
          ))}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}
