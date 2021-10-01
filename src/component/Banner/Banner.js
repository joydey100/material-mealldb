import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <Container className="banner">
      <Grid container spacing={3} className="banner-info">
        <Grid item md={6}>
          <div>
            <Typography variant="h3" color="primary" gutterBottom>
              Taste our Tasty Food
            </Typography>
            <Typography
              variant="body1"
              paragraph
              gutterBottom
              color="textSecondary"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              omnis, aut optio possimus, hic libero ad adipisci blanditiis
              soluta delectus nesciunt, magni beatae maxime ducimus.
            </Typography>
            <Button variant="contained" color="primary">
              Order Now
            </Button>
          </div>
        </Grid>
        <Grid item md={6}>
          <img
            src="https://cdn.dribbble.com/users/1012997/screenshots/14073001/media/4994fedc83e967607f1e3b3e17525831.png?compress=1"
            alt="food"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
