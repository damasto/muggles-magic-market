import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardActions,
  Grid,
  CardContent,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const imageAPI = "http://localhost:5173/src/assets/";

  const fetchAllProducts = () => {
    axios
      .get("http://localhost:5005/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <NavBar />
      <Box sx={{ textAlign: "left", backgroundColor: "#fff", pt: 6, ml: 6 }}>
        <Typography
          variant="h4"
          sx={{
            color: "#000",
            fontWeight: "bold",
            fontSize: "1.5rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          All Products
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
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
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
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                  <Button size="small">
                    <ShoppingCartIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
