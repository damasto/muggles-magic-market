import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import {
  Card, CardContent, CardMedia, Typography, CardActions, Button, Box
} from '@mui/material';

import Grid from "@mui/material/Grid";


export default function ProductList() {
const [products, setProducts] = useState([]);
const imageAPI = "http://localhost:5173/src/assets/"

const getProducts = () => {
  axios.get("http://localhost:5005/products")
  .then((response) => {
    console.log("this is the response object", response)
    console.log("this is the response data", response.data)
  
    setProducts(response.data)
  }).catch((error) => console.log(error))
}

useEffect(() => {
  console.log("fetching products...")
  getProducts()
}, [])

  
console.log("our products: ", products )
const displayedProducts = products.slice(0, 4);

  return (
    <>
    <Box sx={{
        textAlign: 'left',
        backgroundColor: '#fff', 
        pt: 6, 
        ml: 6, 
      }}>
        <Typography variant="h4" sx={{
          color: '#000', 
          fontWeight: 'bold',
          fontSize: '1.5rem',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          textShadow: 'none',
        }}>
          Bestsellers
        </Typography>
      </Box>
    <Box 
    sx={{
      backgroundColor: '#1b4d3e',
      py: 4, 
      display: 'flex',  width: '100%', justifyContent: 'center',
      mt: 3 }}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          maxWidth: '100%',  
          width: '100%',
          margin: 0, }}>
        {displayedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Link to={`/product-details/${product.id}`}>
            <Card sx={{ width: 250, height: 350, display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                sx={{
                  width: '100%',
                  height: '100%',  
                  objectFit: 'cover',  
                }}
                image={`${imageAPI}${product.image}`}
                alt={product.title}
              />
              <CardContent  sx={{ flexGrow: 1, paddingBottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 0.25 }}>
                {product.title}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', padding: '4 16px 8px 16px' }}>
                <Button size="small">Details</Button>
                <Button size="small">Add to Cart</Button>
              </CardActions>
            </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
</>
  );
}
