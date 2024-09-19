import React from "react";
import Meal from "./Meal";

export default function MealList({ mealData }) {
  //const missedingredients = mealData.missedIngredients;
  return (
    <main>
      <section className="meals">
        {mealData.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
