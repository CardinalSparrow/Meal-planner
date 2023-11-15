import React, { useEffect, useState } from "react";

const MealPlanner = () => {
  const [menu, setMenu] = useState([]);
  const [directions, setDirections] = useState("");

  const fetchMenu = () => {
    if (menu !== "") {
      setMenu([menu]); //(data)
      console.log(menu);
    } else {
      setMenu(["No meal selected"]);
    }
  };
  const fetchMealDirections = () => {
    if (menu !== "") {
      const meal = {
        directions: menu,
        text: menu,
      };

      //   meal = { menu };
      setDirections(directions); //(data*);
      console.log(meal.directions);
      console.log(meal.text);

      console.log(directions);
    } else {
      //   setMenu(["No meal selected"]);
      setDirections("Please select a meal!");
      console.log(directions);
    }
  };

  return (
    <div>
      <h1>Food Planner App</h1>
      <div>
        <h2>Weekly Meal Plan</h2>
        <button onClick={() => fetchMenu()}>See Menu</button>
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
