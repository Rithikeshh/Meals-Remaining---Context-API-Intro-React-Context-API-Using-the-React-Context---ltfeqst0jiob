'use client'
import React, { createContext, useState } from "react";

const todaysMeals = [
    { id: 1, name: 'Baked Beans' },
    { id: 2, name: 'Baked Sweet Potatoes' },
    { id: 3, name: 'Baked Potatoes' },
]
export const MealContext = createContext({
    meals : [],
    setMealsCounter: ()=>{}
})
const MealsProvider = ({children}) => {
    const [mealsCounter, setMealsCounter] = useState(3);

    const tickMeal = (e) => {
        if(e.target.checked){
            setMealsCounter((oldValue)=>oldValue-1)
        }
        else{
            setMealsCounter((oldValue)=>oldValue+1)
        }
    }

    return (
        <MealContext.Provider value={{meals : todaysMeals, mealsCounter: mealsCounter, setMealsCounter : tickMeal}}>
            <div>
                {children}
            </div>
        </MealContext.Provider>
    )
};

export default MealsProvider;