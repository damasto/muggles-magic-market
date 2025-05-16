import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../Api/axios";
import { useCart } from "../Context/CartContext";

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
import SearchBar from "../components/SearchBar";

export default function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const imageAPI = "/images/";
  const { addItem } = useCart();
  const [query, setQuery] = useState("")
  

  const handleQuery = (input) => {
    setQuery(input)
  }

  useEffect(() => {
console.log(query)
  }, [query])

  const searchProduct = () => {
    api.get(`/products/search?q=${query}`)
      .then((res) => setProducts(res.data))
      .catch(err => console.log(err))
  }

  const fetchAllProducts = () => {
    api
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {

    if (query.trim()) {
      searchProduct()
    } else {
      fetchAllProducts();
    }

  }, [query]);

  return (
    <>
      <SearchBar handleQuery={handleQuery} />
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
