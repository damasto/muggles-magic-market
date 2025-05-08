import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


import { Card, Divider, CardActions, CardMedia, CardContent, Typography, Button, Box, TextField } from "@mui/material";

export default function ProductDetailPage() {

    const [product, setProduct] = useState([]);
    const [commentText, setCommentText] = useState("")
    const [commentAuthor, setCommentAuthor] = useState("")
    const [newComment, setNewComment] = useState({})
    const { productId } = useParams()
    const imageAPI = "http://localhost:5173/src/assets/"

    const getProduct = () => {
        axios.get(`http://localhost:5005/products/${productId}`)
            .then((response) => {
                console.log("this is the response object", response)
                console.log("this is the response data", response.data)

                setProduct(response.data)
            }).catch((error) => console.log(error))
    }

    useEffect(() => {
        console.log("fetching products...")
        getProduct()
    }, [])

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
                        height="400"
                        image={`${imageAPI}/${product.image}`}
                        alt={product.title}
                        sx={{ objectFit: 'cover' }}
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
                                    {`${product.price}€`}
                                </Typography>
                                <Button size="small">Add to Cart</Button>
                            </CardActions>

                        </Box>

                        <Divider sx={{ my: 3 }} />

                        <Typography variant="h6" gutterBottom>
                            Your opinion matters
                        </Typography>

                        {/* Input Field */}

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
                        <Button variant="contained">
                            Submit
                        </Button>

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