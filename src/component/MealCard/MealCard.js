import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import useStyles from "../../styles";

const MealCard = (props) => {
  const classes = useStyles();

  // Destructuring
  const { strMeal, strMealThumb, strCategory, idMeal, strArea } = props.meal;

  return (
    <Card>
      <CardMedia component="img" height="200" image={strMealThumb} alt="meal" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {strMeal}
        </Typography>
        <Typography gutterBottom variant="body2" paragraph component="div">
          Category: {strCategory}
        </Typography>
        <Typography gutterBottom variant="body2" paragraph component="div">
          Origin: {strArea}
        </Typography>
      </CardContent>
      <CardActions>
        <NavLink to={`/meals/${idMeal}`} className={classes.btn}>
          Details
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default MealCard;
