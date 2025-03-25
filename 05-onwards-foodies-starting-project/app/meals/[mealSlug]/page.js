import React from "react";

function Meal({ params }) {
  console.log("param", params);
  return (
    <div>
      <h1>Meal Detail</h1>
      <p>{params.mealSlug}</p>
    </div>
  );
}

export default Meal;
