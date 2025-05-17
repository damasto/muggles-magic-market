import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../Api/axios";
import { Box, Typography, Card, CardMedia, CardActions, Grid, CardContent, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../Context/CartContext";
import NavBar from "../components/NavBar";


export default function CategoryPage() {
    const { addItem } = useCart();
    const [products, setProducts] = useState([])
    const imageAPI = "/images/";
    const { categoryId } = useParams()
    console.log(categoryId)


    const getProductByCat = () => {
        console.log("fetching products...")
        api
            .get("/products")
            .then((response) => {
                const allProducts = response.data
                console.log("allProds:", allProducts)

                const filterByCat = allProducts.filter(p => p.category.includes(categoryId))
                console.log("cat", filterByCat)
                    setProducts(filterByCat)
                
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        if (categoryId) {
            getProductByCat()
            
        }
    }, [categoryId])

    useEffect(() => {
        console.log("filtered products", products)
                products.forEach(p => console.log("img",p.image
                ))
        
    }, [products])

    


    return (
        <>
        <NavBar/> 
            <Box
                sx={{
                    textAlign: "left",
                    backgroundColor: "#fff",
                    pt: 6,
                    ml: 6,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        textShadow: "none",
                    }}
                >
                    Bestsellers
                </Typography>
            </Box>
            <Box
                sx={{
                    backgroundColor: "#122415",
                    py: 4,
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    mt: 3,
                }}
            >
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    sx={{
                        maxWidth: "100%",
                        width: "100%",
                        margin: 0,
                    }}
                >
                    {products.length > 0 && products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>

                            <Card
                                sx={{
                                    width: 250,
                                    height: 350,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",

                                    }}
                                    image={`${imageAPI}${product.image}`}
                                    alt={product.title}
                                />
                                <CardContent
                                    sx={{
                                        flexGrow: 1,
                                        paddingBottom: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold", marginBottom: 0.25 }}
                                    >
                                        {product.title}
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        justifyContent: "space-between",
                                        padding: "4 16px 8px 16px",
                                    }}
                                >
                                    <Link className="link" to={`/product-details/${product.id}`}>
                                        <Button size="small">Details</Button>
                                    </Link>
                                    <Button size="small" onClick={() => addItem(product)}>
                                        <ShoppingCartIcon />
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}