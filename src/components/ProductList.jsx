import axios from "axios";
import { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import api from "../Api/axios";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const imageAPI = "http://localhost:5173/src/assets/";
  const {addItem} = useCart()



  const getProducts = () => {
    api
      .get("/products")
      .then(res => setProducts(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log("fetching products...");
    getProducts();
  }, []);

  const displayedProducts = products.slice(0, 4);

  return (
    <>
      <Box
        sx={{
          textAlign: "left",
          backgroundColor: "#4b3c21",
          pt: 6,
          width: "100%",
          px: 6,
         
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#f3ebd9",
            fontWeight: "bold",
            fontSize: "1.5rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "none",
               mb: 3,
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
          {displayedProducts.map((product) => (
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
  );
}
