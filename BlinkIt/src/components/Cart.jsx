import { Box, Drawer, IconButton, Typography } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch, useSelector } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { addCart, removeCart } from "../Features/Fetchslice";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// eslint-disable-next-line react/prop-types
export default function Cart({ open, toggleDrawer }) {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.Fetchslice.cart)
    return (
        <Drawer open={open} anchor="right" onClose={() => toggleDrawer(false)}>
            <Box sx={{ width: 400, height: '100%', background: "#f5f7fd" }} role="presentation">
                <Box sx={{ height: 60, background: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                    <Typography variant="p" component='h5' sx={{ fontSize: 16 }}>
                        My Cart
                    </Typography>
                    <IconButton onClick={() => toggleDrawer(false)}>
                        <HighlightOffIcon />
                    </IconButton>
                </Box>
                {cart.length > 0 &&
                    <Box sx={{ height: 'calc(100% -155px)', width: '100%', display: 'grid', p: 2, gap: 2 }} >
                        <Box sx={{ height: 'fit-content', backgroundColor: '#ffffff', borderRadius: 3, p: 2, gap: 3 }}>
                            <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/assets/eta-icons/15-mins-filled.png" alt="" style={{ height: 48 }} />
                                <Box>
                                    <Typography variant="h6" component='p' sx={{ fontSize: 14, fontWeight: 600 }}>
                                        Delivery in 8 minutes
                                    </Typography>
                                    <Typography variant="h6" component='p' sx={{ fontSize: 12, color: '#6c7070' }}>
                                        Shipment of {cart.reduce((sum, el) => sum + el.count, 0)} items
                                    </Typography>
                                </Box>
                            </Box>
                            {
                                cart.map((el, ind) => {
                                    return <Box key={ind} sx={{ display: 'flex', alignItems: 'center', height: 96, gap: 2, py: 1 }}>
                                        <Box sx={{ height: 70, minWidth: 70, maxWidth: 70, border: '1px solid #eeeeee', flexGrow: 1, borderRadius: 2, overflow: 'hidden' }}>
                                            <img src={el.image} alt="" style={{ width: "100%", aspectRatio: "1/1", objectFit: 'cover' }} />
                                        </Box>
                                        <Box sx={{ height: '100%', flexGrow: 1 }}>
                                            <Typography variant='p' component='h6' sx={{ fontSize: 12, fontWeight: 500, height: 30, mb: 1, overflow: 'hidden' }}>
                                                {el.name}
                                            </Typography>
                                            <Typography variant='p' component='h6' sx={{ fontSize: 12, fontWeight: 400, mb: 1, overflow: 'hidden', color: '#6c7070' }}>
                                                {el.weight}
                                            </Typography>
                                            <Typography variant='p' component='h6' sx={{ fontSize: 12, fontWeight: 700, overflow: 'hidden' }}>
                                                ₹{el.price}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ color: 'white', background: '#4b8719', display: 'flex', minWidth: 65, height: 30, alignItems: 'center', justifyContent: 'space-evenly', borderRadius: 1 }}>
                                            <AddIcon sx={{ fontSize: 15, cursor: 'pointer' }} onClick={() => dispatch(addCart(el))} />
                                            <Typography variant="p" component='h6' sx={{ fontFamily: 10 }}>{el.count}</Typography>
                                            <RemoveIcon sx={{ fontSize: 15, cursor: 'pointer' }} onClick={() => dispatch(removeCart(el))} />
                                        </Box>
                                    </Box>
                                })
                            }
                        </Box>
                        <Box sx={{ height: 'fit-content', backgroundColor: '#ffffff', borderRadius: 3, p: 2, gap: 1 }}>
                            <Typography variant='p' component='h6' sx={{ fontSize: 14, fontWeight: 800, mb: 1, overflow: 'hidden', color: '#363636' }}>
                                Bill details
                            </Typography>
                            <Box sx={{ display: 'flex', mb: 0.5 }}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontSize: 13, fontWeight: 500, overflow: 'hidden', color: '#363636', flexGrow: 3 }}>
                                    Items total
                                </Typography>

                                <Typography variant='p' component='h6' sx={{ fontSize: 13, fontWeight: 500, overflow: 'hidden', color: '#363636', flexGrow: 3, textAlign: "right" }}>
                                    ₹{cart.reduce((sum, el) => sum + (el.count * el.price), 0)}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mb: 0.5 }}>
                                <Typography variant='p' component='h6' sx={{ fontSize: 13, fontWeight: 500, overflow: 'hidden', color: '#363636', flexGrow: 3 }}>
                                    Delivery charge <InfoOutlinedIcon sx={{ fontSize: 12 }} />
                                </Typography>
                                <Typography variant='p' component='h6' sx={{ fontSize: 13, fontWeight: 500, overflow: 'hidden', color: '#363636', flexGrow: 3, textAlign: "right" }}>
                                    ₹25
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <Typography variant='p' component='h6' sx={{ fontSize: 13, fontWeight: 500, overflow: 'hidden', color: '#363636', flexGrow: 3 }}>
                                    Handling charge <InfoOutlinedIcon sx={{ fontSize: 12 }} />
                                </Typography>
                                <Typography variant='p' component='h6' sx={{ fontSize: 13, fontWeight: 500, overflow: 'hidden', color: '#363636', flexGrow: 3, textAlign: "right" }}>
                                    ₹4
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', mt: 1 }}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontSize: 13, fontWeight: 700, overflow: 'hidden', color: '#363636', flexGrow: 3 }}>
                                    Grand total
                                </Typography>

                                <Typography variant='p' component='h6' sx={{ fontSize: 13, fontWeight: 700, overflow: 'hidden', color: '#363636', flexGrow: 3, textAlign: "right" }}>
                                    ₹{cart.reduce((sum, el) => sum + (el.count * el.price), 29)}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ height: 'fit-content', backgroundColor: '#ffffff', borderRadius: 3, p: 2 }}>
                            <Typography variant='p' component='h6' sx={{ fontSize: 14, fontWeight: 800, mb: 1, overflow: 'hidden', color: '#363636' }}>
                                Cancellation Policy
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ fontSize: 13, fontWeight: 500, overflow: 'hidden', color: '#363636', lineHeight: 1 }}>
                                Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.
                            </Typography>
                        </Box>
                    </Box>
                }
            </Box>
        </Drawer >
    )
}
