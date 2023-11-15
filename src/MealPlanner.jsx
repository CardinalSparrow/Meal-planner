import React from "react";
import "./App.css";
import mealData from "./MealData";

const MealPlanner = () => {
  return (
    <div>
      <h1>Weekly Meal Planner</h1>
      {mealData.map((day) => (
        <div key={day.day}>
          <h2>{day.day}</h2>
          <MealTime
            mealType="Breakfast"
            meal={day.breakfast}
            directions={day.directions.breakfast}
          />
          <MealTime
            mealType="Lunch"
            meal={day.lunch}
            directions={day.directions.lunch}
          />
          <MealTime
            mealType="Dinner"
            meal={day.dinner}
            directions={day.directions.dinner}
          />
        </div>
      ))}
    </div>
  );
};

const MealTime = ({ mealType, meal, directions }) => {
  return (
    <div>
      <h3>{mealType}</h3>
      <p>Meal: {meal}</p>
      <p>Directions: {directions}</p>
    </div>
  );
};

export default MealPlanner;
