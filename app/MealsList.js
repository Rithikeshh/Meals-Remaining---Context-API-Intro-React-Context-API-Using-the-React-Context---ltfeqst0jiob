'use client'
import React, { useContext } from "react";
import { MealContext } from "./MealsProvider";

const MealsList = () => {
    const {meals, setMealsCounter} = useContext(MealContext)
    return (
        <div>
            <h2>Meals:</h2>
            <ul>
                {meals.map((meal)=>(
                    <li key={meal.id}>
                    <input 
                        type="checkbox"
                        onClick={(e)=>{
                            setMealsCounter(e)
                        }}
                    />
                    {meal.name}
                </li>
                ))}
            </ul>
        </div>
    )
}

export default MealsList;