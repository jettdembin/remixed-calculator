import React, { useState } from "react";
import WeightForm from "./GoalCalculation/WeightForm";
import GoalOptions from "./GoalCalculation/GoalOptions";
import GoalMacro from "./GoalCalculation/GoalMacro";
import AdjustMeals from "./GoalCalculation/AdjustMeals";

const GoalCalculation = (props) => {
  const [isAdjusted, setAdjusted] = useState(false);
  const [firstAdjustment, setFirstAdjustment] = useState(false);
  const toggleIsAdjusted = () => {
    setAdjusted(!isAdjusted);
  };
  const toggleIsFirstAdjustment = () => {
    setFirstAdjustment(!firstAdjustment);
  };
  const [percentCarb, setPercentCarb] = useState(0);
  const [percentProtein, setPercentProtein] = useState(0);
  const [percentFat, setPercentFat] = useState(0);
  return (
    <div
      className="GoalCalculation"
      style={{ padding: "2rem", marginTop: "1rem" }}
    >
      <WeightForm {...props} />
      <GoalOptions
        {...props}
        isAdjusted={isAdjusted}
        toggleIsAdjusted={toggleIsAdjusted}
        setAdjusted={setAdjusted}
        toggleIsFirstAdjustment={toggleIsFirstAdjustment}
        firstAdjustment={firstAdjustment}
        percentCarb={percentCarb}
        setPercentCarb={setPercentCarb}
        percentProtein={percentProtein}
        setPercentProtein={setPercentProtein}
        percentFat={percentFat}
        setPercentFat={setPercentFat}
      />
      <GoalMacro
        {...props}
        isAdjusted={isAdjusted}
        toggleIsAdjusted={toggleIsAdjusted}
        setAdjusted={setAdjusted}
        toggleIsFirstAdjustment={toggleIsFirstAdjustment}
        firstAdjustment={firstAdjustment}
        percentCarb={percentCarb}
        setPercentCarb={setPercentCarb}
        percentProtein={percentProtein}
        setPercentProtein={setPercentProtein}
        percentFat={percentFat}
        setPercentFat={setPercentFat}
      />
      <AdjustMeals
        {...props}
        isAdjusted={isAdjusted}
        toggleIsAdjusted={toggleIsAdjusted}
        setAdjusted={setAdjusted}
        toggleIsFirstAdjustment={toggleIsFirstAdjustment}
        firstAdjustment={firstAdjustment}
        percentCarb={percentCarb}
        setPercentCarb={setPercentCarb}
        percentProtein={percentProtein}
        setPercentProtein={setPercentProtein}
        percentFat={percentFat}
        setPercentFat={setPercentFat}
      />
    </div>
  );
};

export default GoalCalculation;
