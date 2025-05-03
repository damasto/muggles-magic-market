import axios from "axios";
import { useState, useEffect } from "react";

import {
  Card, CardContent, CardMedia, Typography, CardActions, Button, Box
} from '@mui/material';

import Grid from "@mui/material/Grid";


export default function ProductList() {

const [products, setProducts] = useState([]);

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

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: "90%" }}
      >
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card >
              <CardMedia
                component="img"
                height="180"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.category}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Details</Button>
                <Button size="small">Add to Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

  );
}
