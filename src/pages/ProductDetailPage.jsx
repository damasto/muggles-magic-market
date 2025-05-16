import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import api from "../Api/axios";
import { Card, Divider, CardActions, CardMedia, CardContent, Typography, Button, Box, TextField, Rating, Icon } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { useCart } from "../Context/CartContext";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetailPage() {
    const { addItem } = useCart();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();


    const [commentAuthor, setCommentAuthor] = useState("")
    const [ratingAverage, setRatingAverage] = useState(0)
    const [rating, setRating] = useState(0)
    const [commentText, setCommentText] = useState("")
    const [quantity, setQuantity] = useState(0)

    const { productId } = useParams()
    const imageAPI = "/images/"


    const getProduct = () => {
        api.get(`/products/${productId}`)
            .then((response) => {

                setProduct(response.data)


            }).catch((error) => console.log("Error fetching product: ", error))
    }

    useEffect(() => {
        console.log("fetching products...")
        getProduct()
    }, [])

    const calculateAverage = (array) => {
        let totalSum = 0;
        let divider = 0

        array.forEach((item) => {
            if (item.rating) {
                totalSum += item.rating;
                divider++
            }
        })

        return totalSum / divider
    }

    const updateReviews = (update) => {
        console.log("updating reviews...")
        api.put(`/products/${productId}`, update)
            .then(res => {
                console.log("product successfully updated with new comment:", res.data)
                setProduct(res.data) //ensures re-rendering of page when reviews are updated  
                setRatingAverage(calculateAverage(res.data.reviews))
            })
            .catch(err => console.log("Error updating reviews:", err))

    }

    const handleRatingChange = (e, newValue) => {
        setRating(newValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newId = uuid();
        const trimmedAuthor = commentAuthor.trim(); //trim removes white spaces to assure values containing only white space will not be added
        const trimmedCommentText = commentText.trim()

        if (trimmedAuthor && trimmedCommentText && rating !== 0) {

            const comment = {
                id: newId,
                rating: rating,
                name: trimmedAuthor,
                comment: trimmedCommentText,
            }

            if (comment) {
                const updatedComments = {
                    ...product,
                    reviews: [...product.reviews, comment]
                }

                updateReviews(updatedComments)
                setCommentAuthor("")
                setCommentText("")
                setRating(0)

            }

        }

    };

    const increase = () => {
        setQuantity(prev => prev +1)  
    }

    const decrease = () => {
        setQuantity(prev => prev -1) 
    }

    const addToCart = (product, quantity) => {
        addItem(product, quantity)
        setQuantity(0)
    }



    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="flex-start"
                minHeight="100vh"
                bgcolor="#f9f9f9"
                p={2}
                gap={2}
            >
                <Card sx={{ maxWidth: 800, width: '100%', boxShadow: 6, p: 2 }}>
                    <CardMedia
                        component="img"
                        image={`${imageAPI}/${product.image}`}
                        alt={product.title}
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            {product.title}
                        </Typography>

                        <Typography variant="body1" color="text.secondary" paragraph>
                            {product.description}
                        </Typography>

                        <Box>

                            <CardActions sx={{ justifyContent: 'space-between', padding: '4 16px 8px 16px' }}>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 60 }}>
                                    <Typography sx={{ textAlign: "center", width: "100%", m: 0 }} variant="body1" color="text.secondary" paragraph>
                                        {`Price: €${product.price}`}
                                    </Typography>
                                </Box>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    border={"1px solid black"}
                                    height={60}
                                >

                                    <Button size="small" onClick={decrease}>-</Button>
                                    <TextField
                                        variant="outlined"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        sx={{
                                            width: 50, '& .MuiInputBase-input': {
                                                textAlign: 'center',
                                                padding: '8px 0'
                                            }
                                        }}
                                        size="small"
                                    />
                                    <Button size="small" onClick={increase}>+</Button>
                                    <Button size="small" onClick={() => addToCart(product, quantity)}>Add to Cart</Button>
                                </Box>
                            </CardActions>

                        </Box>

                        <Box>

                            <CardActions sx={{ justifyContent: 'center', padding: '4 16px 8px 16px' }}>
                                <Button
                                    variant="outlined"
                                    onClick={() => navigate(-1)}
                                    sx={{ alignSelf: "flex-start", mb: 2 }}
                                >
                                    Go Back
                                </Button>
                            </CardActions>

                        </Box>

                        <Divider sx={{ my: 3 }} />

                        <Box>
                            <Typography variant="h6" gutterBottom>
                                User opinions
                            </Typography>
                            <Rating name="half-rating-read" value={ratingAverage} precision={0.5} size="large" readOnly />

                        </Box>

                        <Divider sx={{ my: 3 }} />

                        <Typography variant="h6" gutterBottom>
                            Tell us your opinion:
                        </Typography>

                        {/* Input Field */}
                        <form onSubmit={handleSubmit}>

                            <Rating
                                name="user-rating"
                                value={rating}
                                onChange={handleRatingChange}
                                precision={0.5} // Allows whole star increments; use 0.5 for half-stars
                                icon={<StarIcon fontSize="inherit" />}
                                emptyIcon={<StarIcon style={{ opacity: 0.3 }} fontSize="inherit" />}
                            />
                            <p>Your rating: {rating}</p>

                            <TextField
                                label="Please enter your name"
                                fullWidth
                                variant="outlined"
                                value={commentAuthor}
                                onChange={(e) => setCommentAuthor(e.target.value)}
                                sx={{ mb: 2 }}
                            />

                            <TextField
                                label="Write a comment"
                                multiline
                                fullWidth
                                minRows={3}
                                variant="outlined"
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                sx={{ mb: 2 }}
                            />


                            <Button type="submit" variant="contained">
                                Submit
                            </Button>

                        </form>

                        <Divider sx={{ my: 3 }} />

                        <Typography variant="h6" gutterBottom>
                            Comments
                        </Typography>

                        {product?.reviews?.length > 0 ? (
                            product.reviews.map((review, index) => (
                                <Box
                                    sx={{
                                        borderRadius: "10px",
                                        p: 2,
                                        maxWidth: 300,
                                        backgroundImage: "url(/images/backgroundbar.png)",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",

                                    }}
                                    key={index}
                                    mb={2}

                                >
                                    {review.rating &&
                                        <>
                                            <Rating name="half-rating-read" defaultValue={review.rating} precision={0.5} size="small" readOnly />
                                            <Divider sx={{ my: 0 }} />
                                        </>
                                    }


                                    <Typography variant="subtitle2">{review.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {review.comment}
                                    </Typography>
                                </Box>
                            ))
                        ) : (
                            <Typography variant="body2" color="text.secondary">
                                No reviews yet.
                            </Typography>
                        )}
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}