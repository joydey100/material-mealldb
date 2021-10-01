import { Avatar, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <Container className="about">
      <Grid container spacing={3} align="center">
        <Grid item>
          <div>
            <Avatar
              alt="Chef"
              src="https://avatars.githubusercontent.com/u/1?v=4"
              sx={{ width: 90, height: 90, objectFit: "cover" }}
            />
            <Typography variant="h3" color="primary" gutterBottom>
              About Us
            </Typography>
            <Typography
              variant="body1"
              paragraph
              gutterBottom
              color="textSecondary"
              className="about-desc"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              omnis, aut optio possimus, hic libero ad adipisci blanditiis
              soluta delectus nesciunt, magni beatae maxime ducimus. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Minus corrupti earum
              exercitationem eos porro architecto laudantium quae. Ut odit illum
              commodi voluptatibus temporibus suscipit. Quis reiciendis eum
              officiis nam ipsum.
            </Typography>
            <Button variant="contained" color="primary">
              Order Now
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
