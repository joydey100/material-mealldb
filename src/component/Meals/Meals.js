import { Container, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import MealCard from "../MealCard/MealCard";
import "./Meals.css";
const Meals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);

  //   load Data
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      <Grid container className="input-field">
        <TextField
          id="standard-basic"
          label="Search Meal"
          variant="standard"
          fullWidth
          onChange={handleSearch}
        />
      </Grid>
      <div className="meals-container">
        <Grid container spacing={4}>
          {meals !== null &&
            meals.map((meal) => {
              return (
                <Grid item md={4} key={meal.idMeal}>
                  <MealCard meal={meal} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </Container>
  );
};

export default Meals;
