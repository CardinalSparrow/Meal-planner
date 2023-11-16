import React, { useState } from "react";
import "./MealPlanner.css";
import mealData from "./MealData";

const MealPlanner = () => {
  const [selectedDay, setSelectedDay] = useState(mealData[0]);
  const [visibleDirections, setVisibleDirections] = useState(
    mealData[0].directions
  );
  //   console.log(visibleDirections);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setVisibleDirections("");
    console.log(selectedDay);
    console.log(mealData[0].directions);
  };
  const handleShowDirections = (mealType) => {
    setVisibleDirections(selectedDay.directions[mealType]);
    console.log(selectedDay.directions[mealType]);
    return selectedDay.directions[mealType];
  };

  return (
    <div className="meal-planner">
      <WeeklyMenu mealData={mealData} onDayClick={handleDayClick} />
      <div className="current-day">
        <h1>{selectedDay.day}</h1>
        <MealTime
          mealType="Breakfast"
          meal={selectedDay.breakfast}
          onShowDirections={() => handleShowDirections("breakfast")}
        />
        <MealTime
          mealType="Lunch"
          meal={selectedDay.lunch}
          onShowDirections={() => handleShowDirections("lunch")}
        />
        <MealTime
          mealType="Dinner"
          meal={selectedDay.dinner}
          onShowDirections={() => handleShowDirections("dinner")}
        />
      </div>
    </div>
  );
};

const WeeklyMenu = ({ mealData, onDayClick }) => {
  return (
    <aside className="weekly-menu">
      <h2>Weekly Menu</h2>
      {mealData.map((day) => (
        <button key={day.day} onClick={() => onDayClick(day)}>
          {day.day}
        </button>
      ))}
    </aside>
  );
};
const MealTime = ({ mealType, meal, onShowDirections }) => {
  const [showDirections, setShowDirections] = useState(false);
  console.log(onShowDirections);
  console.log(meal);
  console.log(mealType);
  return (
    <div className="meal-time">
      <h3>{mealType}</h3>
      <p>
        <strong>Meal:</strong> {meal}
      </p>
      <button
        onClick={() => setShowDirections(!showDirections)}
        className={showDirections ? "hide-btn" : "show-btn"}
      >
        {showDirections ? "Hide Directions" : "Show Directions"}
      </button>
      {showDirections && (
        <p>
          <strong>Directions:</strong> {onShowDirections()}
        </p>
      )}
    </div>
  );
};

export default MealPlanner;
