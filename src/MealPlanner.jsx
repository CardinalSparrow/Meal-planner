import React, { useEffect, useState } from "react";

const MealPlanner = () => {
  const [menu, setMenu] = useState([]);
  const [directions, setDirections] = useState({
    directions: "Please select a meal!",
  });

  const fetchMenu = () => {
    setMenu(menu); //(data)
    console.log(menu);
  };
  const fetchMealDirections = () => {
    if (menu !== "") {
      const meal = {
        text: menu,
        directions: directions,
      };

      //   meal = { menu };
      setDirections(directions); //(data*);
      console.log(meal.text);
      console.log(meal.directions);
    } else {
      setMenu(["No meal selected"]);
      setDirections({ directions: "Please select a meal!" });
    }
  };

  return (
    <div>
      <h1>Food Planner App</h1>
      <div>
        <h2>Weekly Meal Plan</h2>
        <ul>
          {Object.keys(menu).map((food) => (
            <li key={food}>
              <strong>{food}:</strong> {menu[food]}
              <button onClick={() => fetchMealDirections([food])}>
                Get Directions
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Meal Direction</h2>
        {Object.keys(menu).map((food) => (
          <p key={food}>
            <strong>{food}:</strong> {menu[food]}
          </p>
        ))}
        {Object.keys(directions).map((food) => (
          <p key={directions}>
            <strong>{food}:</strong> {directions[food]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MealPlanner;
