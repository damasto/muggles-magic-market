import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid } from "@mui/material";
import { Link } from 'react-router-dom';

const CategoryCards = () => {
  const displayedCategories = [
  { label: 'Animals', path: '/category/animals' },
  { label: 'Food', path: '/category/food' },
  { label: 'Jewelry', path: '/category/jewelry' },
  { label: 'Potions', path: '/category/potions' },
  { label: 'Wands', path: '/category/wands' },
  ];

  return (
    <>
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
          categories
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
          {displayedCategories.map((category) => (
            <Grid item xs={12} sm={6} md={2} key={category.id}>
              <Card
                sx={{
                  width: 200,
                  height: 200,
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
                  image={`path_to_images/${category.image}`} 
                  alt={category.label}
                />
                <Link className="link" to = { category.path }> 
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
                    {category.label}
                  </Typography>
                </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CategoryCards;
