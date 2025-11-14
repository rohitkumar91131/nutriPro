"use client"

import React, { useEffect } from 'react'
import Hi from './Header/Hi'
import Header from './Header/Header'
import FoodForm from './Form/FoodForm'
import DailyFoodTable from './foods/DailyFoodTable'

function HomePage() {
  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch('/api/foods/me');
        const data = await response.json();
        //alert("Fetched data from /api/foods: " + JSON.stringify(data));
        console.log("Data from /api/foods:", data);
      } catch (error) {
        console.error("Error fetching /api/foods:", error);
      }   
    }
    fetchData();
  } , [])
  return (
    <div>
      <Header />
      <FoodForm />
      <DailyFoodTable/>
    </div>
  )
}

export default HomePage
