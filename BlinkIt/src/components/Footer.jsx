import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Container sx={{ p: 0, mt: 4, display: { xs: 'none', md: 'block' } }} disableGutters>
            <Grid container>
                <Grid item md={5}>
                    <Typography variant="body2" component={'h6'} sx={{ fontSize: 18, fontWeight: 600 }}>
                        Useful Links
                    </Typography>
                    <Grid container sx={{ pt: 2 }}>
                        {
                            ["About", "Careers", "Blog", "Press", "Lead", "Value", "Privacy", "Terms", "FAQs", "Security", "Mobile", "Contact", "Partner", "Franchise", "Seller", "Warehouse", "Deliver", "Resources"].map((el, ind) => (
                                <Grid item md={4} sx={{ fontSize: 14, fontWeight: 400, mb: 1, cursor: 'pointer', color: '#66686b' }} key={ind}>
                                    {el}
                                </Grid>))
                        }
                    </Grid>
                </Grid>
                <Grid item md={7}>
                    <Typography variant="body2" component={'h6'} sx={{ fontSize: 18, fontWeight: 600 }}>
                        Categories <span style={{ fontSize: 16, fontWeight: 400, marginLeft: 10, color: "#3d8321" }}>see all</span>
                    </Typography>
                    <Grid container sx={{ pt: 2 }}>
                        {
                            ["Vegetables & Fruits", "Dairy & Breakfast", 'Munchies', 'Cold Drinks & Juices', 'Instant & Frozen Food', 'Tea', 'Coffee & Health Drinks', 'Bakery & Biscuits', 'Sweet Tooth', 'Atta', 'Rice & Dal', 'Dry Fruits', 'Masala & Oil,Sauces & Spreads', 'Chicken', "Meat & Fish,Paan Corner", 'Organic & Premium', 'Baby Care', 'Pharma & Wellness', 'Cleaning Essentials', 'Home & Office', 'Ice Creams & Frozen Desserts', 'Personal Care', 'Pet Care', 'Beauty & Cosmetics', 'Magazines', 'Fashion & Accessories', 'Electronics & Electricals', 'Stationery Needs', 'Books', 'Toys & Games,Print Store', 'Navratri Specials'].map((el, ind) => (
                                <Grid item md={4} sx={{ fontSize: 14, fontWeight: 400, mb: 1, cursor: 'pointer', color: '#66686b' }} key={ind}>
                                    {el}
                                </Grid>))
                        }
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{ background: '#fcfcfc', placeContent: 'center', mt: 4 }}>
                <Grid item md={10}>
                    <Grid container sx={{ py: 2, px: 0 }}>
                        <Grid item md={4} sx={{ display: 'flex', alignItems: 'center', color: '#666666' }}>
                            <Typography variant="body2">
                                © Blink Commerce Private Limited, 2016-2025
                            </Typography>
                        </Grid>
                        <Grid item md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ flexShrink: 1, flexGrow: 1, color: '#666666', fontWeight: 600, fontSize: 14 }}>
                                Download App
                            </Box>
                            <Box sx={{ flexShrink: 1, flexGrow: 2, display: 'flex', gap: 1, alignItems: 'center' }}>
                                <img src="https://blinkit.com/d61019073b700ca49d22.png" alt="" style={{ height: 30, aspectRatio: '3/1' }} />
                                <img src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="" style={{ height: 30, aspectRatio: '3/1' }} />
                            </Box>
                        </Grid>
                        <Grid item md={4} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#666666' }}>
                            <Box>
                                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="white"></rect><path fillRule="evenodd" clipRule="evenodd" d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2V77.2ZM50 100C22.3867 100 0 77.6133 0 50C0 22.385 22.3867 0 50 0C77.6133 0 100 22.385 100 50C100 77.6133 77.6133 100 50 100Z" fill="#1F1F1F"></path></svg>
                            </Box>
                            <Box>
                                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="#1F1F1F"></rect><path d="M75 34.6178C73.4015 35.5058 71.4479 36.0386 69.6718 36.2162C71.6255 34.973 73.0463 33.0193 73.7568 30.7104C71.9807 31.7761 70.027 32.6641 67.7181 33.1969C65.9421 31.2432 63.6332 30 60.9691 30C55.8185 30 51.556 34.4402 51.556 40.1236C51.556 40.834 51.556 41.722 51.7336 42.4324C43.9189 42.0772 36.9923 37.9923 32.3745 31.9537C31.4865 33.3745 31.1313 35.1506 31.1313 37.1042C31.1313 40.6564 32.7297 43.6757 35.2162 45.4517C33.6178 45.4517 32.1969 44.9189 30.9537 44.2085V44.3861C30.9537 49.1815 34.1506 53.2664 38.4131 54.332C37.7027 54.5097 36.8147 54.6873 35.9266 54.6873C35.3938 54.6873 34.6834 54.6873 34.1506 54.5097C35.3938 58.5946 38.7683 61.4363 42.8533 61.4363C39.6564 64.1004 35.5714 65.6988 31.3089 65.6988C30.5985 65.6988 29.888 65.6988 29 65.5212C33.0849 68.3629 38.0579 70.139 43.3861 70.139C60.6139 70.139 70.027 54.8649 70.027 41.5444C70.027 41.1892 70.027 40.6564 70.027 40.3012C72.1583 38.5251 73.7568 36.749 75 34.6178Z" fill="white"></path></svg>
                            </Box>
                            <Box>
                                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_6973_248115)"><rect width="100" height="100" rx="50" fill="white"></rect><path d="M49.5935 59.3496C54.5326 59.3496 58.5366 55.3456 58.5366 50.4065C58.5366 45.4674 54.5326 41.4634 49.5935 41.4634C44.6544 41.4634 40.6504 45.4674 40.6504 50.4065C40.6504 55.3456 44.6544 59.3496 49.5935 59.3496Z" fill="#1F1F1F"></path><path d="M60.7724 28.4553H38.4146C35.1626 28.4553 32.3171 29.4716 30.4878 31.3008C28.6585 33.1301 27.6423 35.9756 27.6423 39.2276V61.5854C27.6423 64.8374 28.6585 67.6829 30.6911 69.7155C32.7236 71.5447 35.3659 72.561 38.6179 72.561H60.7724C64.0244 72.561 66.8699 71.5447 68.6992 69.7155C70.7317 67.8862 71.748 65.0407 71.748 61.7886V39.4309C71.748 36.1789 70.7317 33.5366 68.9024 31.5041C66.8699 29.4716 64.2276 28.4553 60.7724 28.4553ZM49.5935 64.2276C41.8699 64.2276 35.7724 57.9268 35.7724 50.4065C35.7724 42.6829 42.0732 36.5854 49.5935 36.5854C57.1138 36.5854 63.6179 42.6829 63.6179 50.4065C63.6179 58.1301 57.3171 64.2276 49.5935 64.2276ZM64.0244 39.2276C62.1951 39.2276 60.7724 37.8049 60.7724 35.9756C60.7724 34.1463 62.1951 32.7236 64.0244 32.7236C65.8537 32.7236 67.2764 34.1463 67.2764 35.9756C67.2764 37.8049 65.8537 39.2276 64.0244 39.2276Z" fill="#1F1F1F"></path><path d="M50 0C22.3577 0 0 22.3577 0 50C0 77.6423 22.3577 100 50 100C77.6423 100 100 77.6423 100 50C100.203 22.3577 77.6423 0 50 0ZM76.626 61.7886C76.626 66.4634 75 70.5285 72.1545 73.374C69.3089 76.2195 65.2439 77.6423 60.7724 77.6423H38.6179C34.1463 77.6423 30.0813 76.2195 27.2358 73.374C24.187 70.5285 22.7642 66.4634 22.7642 61.7886V39.4309C22.7642 30.0813 29.065 23.5772 38.6179 23.5772H60.9756C65.6504 23.5772 69.5122 25.2033 72.3577 28.0488C75.2032 30.8943 76.626 34.7561 76.626 39.4309V61.7886V61.7886Z" fill="#1F1F1F"></path></g><defs><clipPath id="clip0_6973_248115"><rect width="100" height="100" rx="50" fill="white"></rect></clipPath></defs></svg>
                            </Box>
                            <Box>
                                <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="50" fill="#1F1F1F"></rect><path d="M38.5 37.5H28V72H38.5V37.5Z" fill="white"></path><path d="M64.0045 37.5C58 37.5 56.335 39.468 55 42V37.5H44.5V72H55V52.5C55 49.5 55 46.5 60.25 46.5C65.5 46.5 65.5 49.5 65.5 52.5V72H76V52.5C76 43.5 74.5 37.5 64.0045 37.5Z" fill="white"></path><path d="M33.25 34.5C36.1495 34.5 38.5 32.1495 38.5 29.25C38.5 26.3505 36.1495 24 33.25 24C30.3505 24 28 26.3505 28 29.25C28 32.1495 30.3505 34.5 33.25 34.5Z" fill="white"></path></svg>
                            </Box>
                            <Box>
                                <img src="https://blinkit.com/f01e50d66f4eddb1a1da.svg" style={{ width: 40, height: 40, borderRadius: '50%', }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Typography variant="body2" sx={{ color: '#666666', mt: 2, mb: 1, px: 1, fontSize: 14 }}>
                {'“Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.'}
            </Typography>
        </Container>
    )
}
