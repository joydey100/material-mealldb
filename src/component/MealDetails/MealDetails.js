import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const MealDetails = () => {
  const { mealid } = useParams();

  const [meal, setMeal] = useState([]);

  let instructions = [];

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals));
  }, [mealid]);

  //   Destructure

  const { strMeal, strInstructions, strMealThumb } =
    meal[0] !== undefined && meal[0];

  if (meal[0]) {
    for (let i = 1; i <= 20; i++) {
      let ingredient = "strIngredient" + i;

      if (meal[0][ingredient]) {
        let myIngrident = { ingredient: meal[0][ingredient] };
        instructions.push(myIngrident);
      }
    }
  }

  console.log(instructions);

  return (
    <Container>
      <div style={{ marginTop: "70px" }}>
        <Grid container>
          <Grid item>
            {meal.length > 0 && (
              <img
                src={strMealThumb}
                alt="meal"
                style={{
                  width: "50%",
                  height: "350px",
                  objectFit: "cover",
                  marginBottom: "15px",
                }}
              />
            )}
            <Typography variant="h4" gutterBottom>
              {strMeal}
            </Typography>
            <Typography variant="body1" paragraph gutterBottom>
              {strInstructions}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {meal.length > 0 && "Ingredients:"}
            </Typography>
            <ol>
              {instructions.map((instruction) => (
                <li key={instruction.ingredient}>{instruction.ingredient}</li>
              ))}
            </ol>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default MealDetails;
