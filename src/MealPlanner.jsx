import React, { useState } from "react";
import "./App.css";
import mealData from "./MealData";

const MealPlanner = () => {
  const [selectedDay, setSelectedDay] = useState(mealData[0]);
  const [visibleDirections, setVisibleDirections] = useState(
    mealData[0].directions
  );
  const handleDayClick = (day) => {
    setSelectedDay(day);
    setVisibleDirections("");
    console.log(selectedDay.directions);
    console.log(mealData[0].directions);
  };
  const handleShowDirections = (mealType) => {
    setVisibleDirections(selectedDay.directions[mealType]);
    console.log(selectedDay.directions[mealType]);
  };

  return (
    <div className="meal-planner">
      <WeeklyMenu mealData={mealData} onDayClick={handleDayClick} />
      <div className="current-day">
        <h1>{selectedDay.day}</h1>
        <h1>{visibleDirections.day}</h1>
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
  return (
    <div className="meal-time">
      <h3>{mealType}</h3>
      <p>Meal: {meal}</p>
      <button onClick={() => setShowDirections(!showDirections)}>
        {showDirections ? "Hide Directions" : "Show Directions"}
      </button>
      {showDirections && <p>Directions:{onShowDirections}</p>}
    </div>
  );
};

// const MealDirections = ({ dinner }) => {
//   return (
//     <aside className="meal-directions">
//       <h2>Directions</h2>
//       <p>({dinner})</p>
//     </aside>
//   );
// };

export default MealPlanner;
