import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addCart, removeCart } from "../Features/Fetchslice";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// eslint-disable-next-line react/prop-types
export default function Cart({ open, toggleDrawer }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Fetchslice.cart);
  const item = cart.reduce((sum, el) => sum + el.count, 0)
  const total = cart.reduce((sum, el) => sum + el.count * el.price, 0)
  return (
    <Drawer open={open} anchor="right" onClose={() => toggleDrawer(false)}>
      <Box
        sx={{
          width: { xs: "100vw", sm: "400px" },
          minWidth: 320,
          height: "100%",
          background: "#f5f7fd",
        }}
        role="presentation"
      >
        <Box
          sx={{
            height: 60,
            background: "#ffffff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: 'sticky',
            top: 0,
            p: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: { xs: 14, sm: 16 }, fontWeight: 700 }}>
            My Cart
          </Typography>
          <IconButton onClick={() => toggleDrawer(false)}>
            <HighlightOffIcon />
          </IconButton>
        </Box>
        {cart.length > 0 && (
          <Box
            sx={{
              height: "calc(100% - 155px)",
              width: "100%",
              display: "flex",
              flexDirection: 'column',
              p: 2,
              gap: 2,
              overflow: 'scroll',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: 3,
                p: 2,
                gap: 3,
              }}
            >
              <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
                <img
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/assets/eta-icons/15-mins-filled.png"
                  alt="Delivery"
                  style={{ height: 48 }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: { xs: 12, sm: 14 }, fontWeight: 600 }}
                  >
                    Delivery in 8 minutes
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: 10, sm: 12 }, color: "#6c7070" }}
                  >
                    Shipment of {item} items
                  </Typography>
                </Box>
              </Box>
              {cart.map((el, ind) => (
                <Box
                  key={ind}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    py: 1,
                  }}
                >
                  <Box
                    sx={{
                      flexShrink: 0,
                      height: 70,
                      width: 70,
                      border: "1px solid #eeeeee",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={el.image}
                      alt={el.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: 13, fontWeight: 500, lineHeight: 1.3, overflowY: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: "vertical", textOverflow: 'ellipsis' }}
                    >
                      {el.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: 10, sm: 12 },
                        color: "#6c7070",
                        mb: 0.5,
                      }}
                    >
                      {el.weight}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: { xs: 12, sm: 14 }, fontWeight: 700 }}
                    >
                      ₹{el.price}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background: "#3d8321",
                      borderRadius: 1,
                      color: "white",
                      minWidth: 65,
                      justifyContent: "space-evenly",
                      py: 0.6
                    }}
                  >
                    <AddIcon
                      sx={{ fontSize: 14, cursor: "pointer" }}
                      onClick={() => dispatch(addCart(el))}
                    />
                    <Typography variant="body2">{el.count}</Typography>
                    <RemoveIcon
                      sx={{ fontSize: 14, cursor: "pointer" }}
                      onClick={() => dispatch(removeCart(el))}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: 3,
                p: 2,
                gap: 1,
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontSize: 14, fontWeight: 800, mb: 1 }}
              >
                Bill details
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" sx={{ '&::before': { content: "'\\e9bc'", fontFamily: 'wasabicons', mr: 0.5, fontSize: 10 } }}>Items total</Typography>
                <Typography variant="body2">
                  ₹{total}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" sx={{ '&::before': { content: "'\\e801'", fontFamily: 'wasabicons', mr: 0.5, fontSize: 10 } }}>
                  Delivery charge <InfoOutlinedIcon sx={{ fontSize: 12 }} />
                </Typography>
                <Typography variant="body2">₹25</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" sx={{ '&::before': { content: "'\\e8b5'", fontFamily: 'wasabicons', mr: 0.5, fontSize: 10 } }}>
                  Handling charge <InfoOutlinedIcon sx={{ fontSize: 12 }} />
                </Typography>
                <Typography variant="body2">₹4</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  Grand total
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 700 }}>
                  ₹{total + 29}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: 3,
                p: 2,
                mt: 1,
              }}
            >
              <Typography variant="body1" sx={{ fontSize: 14, fontWeight: 800 }}>
                Cancellation Policy
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: 13,
                  color: "#363636",
                  lineHeight: 1.5,
                }}
              >
                Orders cannot be cancelled once packed for delivery. In case of
                unexpected delays, a refund will be provided, if applicable.
              </Typography>
            </Box>
            <Box sx={{ height: 94, width: { xs: "100%", sm: 400 }, background: '#ffffff', position: 'fixed', bottom: 0, right: 0, borderRadius: 3, p: 2 }}>
              <Button variant="contained" sx={{ width: '100%', backgroundColor: '#3d8321', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textTransform: 'none', boxShadow: "none", '&:hover': { boxShadow: "none" } }}>
                <Box>
                  <Typography variant="body2" sx={{ fontSize: 15, fontWeight: 600 }}>
                    ₹{total + 29}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: 12, fontWeight: 400 }}>
                    TOTAL
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Typography variant="body2" sx={{ fontSize: 16, fontWeight: 500 }}>
                    Login to Proceed
                  </Typography>
                  <Typography variant="body2" sx={{
                    fontFamily: 'CustomFont',
                    fontSize: 16,
                    color: 'rgb(255, 255, 255)',
                  }}>
                    f
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Drawer >
  );
}
