'use client'
import React, { useContext } from "react";
import { MealContext } from "./MealsProvider";

const Counter = () => {
    const {mealsCounter} = useContext(MealContext)
    return (
        <div>
            <h3>Meals Remaining: {mealsCounter}</h3>
        </div>
    )
}

export default Counter;