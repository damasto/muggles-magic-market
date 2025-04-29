import products from "../data.json"

import {
  Card, CardContent, CardMedia, Typography, CardActions, Button, Box
} from '@mui/material';

import Grid from "@mui/material/Grid";


export default function ProductList() {

    console.log( products )
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
