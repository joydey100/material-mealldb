import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Banner from "./component/Banner/Banner";
import Header from "./component/Header/Header";
import MealDetails from "./component/MealDetails/MealDetails";
import Meals from "./component/Meals/Meals";
import NotFound from "./component/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Banner />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/meals">
          <Meals />
        </Route>
        <Route exact path="/meals/:mealid">
          <MealDetails />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
