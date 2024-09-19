import "./App.css";
import React, { useState } from "react";
import MealList from "./MealList";
import logo from "./logo1.png";
import Navbar from "./Navbar";

export default function App() {
  const [mealData, setMealData] = useState(null);
  const [ingredients, setIngredients] = useState(null);

  function loadMealData() {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=8f0841d6aec44e99bb26141cc019c1c7&ingredients=${ingredients}&ranking=1&number=5`,
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setIngredients(e.target.value);
  }


  return (
    <div className="App">
      <Navbar/>
      <section>
        <div className = "soufflelogo">
          <img src = {logo} alt="logo" height="90"/>
        </div>
        <h1 className ="header">SOUFFLÉ</h1>
        <h6 className = "under">Meal planning taken to the next level.</h6>
      </section>
      <br></br><br></br>
      <p className="thing">Find recipes based on what you <b>ALREADY</b> have at home!</p><br></br>
      <p className = "desc">Please type ingredients separated by commas and free of spelling errors (e.g: tomatoes, onions, carrots, garlic) </p>
      <section className="controls">
        <input
          type="text"
          placeholder="Enter Ingredients"
          onChange={handleChange}
        />
        <button onClick={loadMealData}>Generate Recipes!</button>
      </section>
      {mealData && <MealList mealData = {mealData}/>}
    </div>
  );
}
