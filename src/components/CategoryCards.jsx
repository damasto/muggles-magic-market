import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid } from "@mui/material";
import { Link } from 'react-router-dom';

const CategoryCards = () => {
  const displayedCategories = [
  { label: 'Animals', path: '/category/animals', backgroundColor: '#2C4A3F'  },
  { label: 'Food', path: '/category/food' , backgroundColor: '#2E6562'},
  { label: 'Jewelry', path: '/category/jewelry',  backgroundColor: '#556B2F' },
  { label: 'Potions', path: '/category/potions' , backgroundColor: '#3B6064'},
  { label: 'Wands', path: '/category/wands' , backgroundColor: '#8B5E3C' },
  ];

  return (
    <>
      <Box
        sx={{
          textAlign: "left",
          backgroundColor: "#4b3c21",
         pt: 6,
    px: 6,
    width: "100%",
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
                   backgroundColor: category.backgroundColor,
                    alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link to = { category.path } style={{ textDecoration: 'none', width: '100%'}}> 
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                 alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#f3ebd9",  textAlign: "center", marginBottom: 0.25 }}
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
