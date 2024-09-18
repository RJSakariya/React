import { Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function ProductCard({ data }) {
    return (
        <Card sx={{ paddingX: 2, paddingY: 3, backgroundColor: '#afafaf2f', backdropFilter: 'blur(5px)', maxWidth: 250, minWidth: 200 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    // eslint-disable-next-line react/prop-types
                    image={data.ProductImg}
                    // eslint-disable-next-line react/prop-types
                    alt={data.AltText}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {
                            // eslint-disable-next-line react/prop-types
                            data.ProductName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {
                            // eslint-disable-next-line react/prop-types
                            data.ProductPrice
                        }$
                    </Typography>
                    <Rating name="half-rating-read" defaultValue={
                        // eslint-disable-next-line react/prop-types
                        data.Rating
                    } precision={0.5} readOnly />
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
