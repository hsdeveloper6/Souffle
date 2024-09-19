import React, {useState, useEffect} from "react";

export default function Meal({meal}){
  const [imageURL, setImageURL] = useState("");
  const [recipeURL, setRecipeURL] = useState("");
  const [servings, setServings] = useState(null);
  const [prepTime, setprepTime] = useState(null);


  useEffect (() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=8f0841d6aec44e99bb26141cc019c1c7&includeNutrition=True`,
    )
    .then((response) => response.json())
    .then((data) => {
      setImageURL(data.image);
      setRecipeURL(data.sourceUrl);
      setServings(data.servings);
      setprepTime(data.readyInMinutes);
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    })
  }, [meal.id]);
  
  return(
    <article>
      <h1>{meal.title}</h1>
      <img src={imageURL} alt="recipe" />
      <ul className = "instructions">
        <li>Prep Time: {prepTime} minutes</li><br></br>
        <li>Servings: {servings}</li><br></br>
        <li>Used Ingredients: {meal.usedIngredientCount}</li><br></br>
        <li>Missed Ingredients: {meal.missedIngredientCount}</li><br></br>
      </ul>

      <a href={recipeURL}>Click for Full Recipe</a>
      
    </article>
  )
}