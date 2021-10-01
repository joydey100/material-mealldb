import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "../../styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Meal DB
        </Typography>

        <Typography variant="body1">
          <NavLink to="/" className={classes.links}>
            Home
          </NavLink>
        </Typography>
        <Typography variant="body1">
          <NavLink to="/about" className={classes.links}>
            About
          </NavLink>
        </Typography>
        <Typography variant="body1">
          <NavLink to="/meals" className={classes.links}>
            Meals
          </NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
