import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { v4 as uuid } from "uuid";


import { Card, Divider, CardActions, CardMedia, CardContent, Typography, Button, Box, TextField, Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';


export default function ProductDetailPage() {

    const [product, setProduct] = useState([]);
    const [commentAuthor, setCommentAuthor] = useState("")
    const [ratingAverage, setRatingAverage] = useState(0)
    const [rating, setRating] = useState(0)
    const [commentText, setCommentText] = useState("")

    const { productId } = useParams()
    const imageAPI = "http://localhost:5173/src/assets/"


    const getProduct = () => {
        axios.get(`http://localhost:5005/products/${productId}`)
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
        axios.put(`http://localhost:5005/products/${productId}`, update)
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



    return (
        <>
            <NavBar />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="flex-start"
                minHeight="100vh"
                bgcolor="#f9f9f9"
                p={2}
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
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    {`Price: ${product.price}€`}
                                </Typography>
                                <Button size="small">Add to Cart</Button>
                            </CardActions>

                        </Box>

                        <Divider sx={{ my: 3 }} />

                        <Box>
                        <Typography variant="h6" gutterBottom>
                            User opinions
                        </Typography>
                        <Rating name="half-rating-read"  value={ratingAverage} precision={0.5} size="large" readOnly />

                        </Box>

                        <Typography variant="h6" gutterBottom>
                            Your opinion matters
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

                            {/* Submit Button */}
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
                                    sx={{ border: '1px solid black', p: 2, maxWidth: 300 }}
                                    key={index}
                                    mb={2}
                                    bgcolor="yellow"
                                >
                                    {review.rating &&
                                        <>
                                            <Rating name="half-rating-read"  defaultValue={review.rating} precision={0.5} size="small" readOnly />
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
            <Footer />
        </>
    )
}