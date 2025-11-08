import React from 'react'
import Calender from '../components/ananlyser/Calender'
import NutritionPieChart from '../components/ananlyser/Charts'
import AnalysisCard from '../components/ananlyser/AnalysisComponent'
import NutrientChart from '../components/ananlyser/MicroNutrientComponent'
import ChatApp from '../components/ananlyser/DailyMealAi'

function Calenderpage() {
  return (
    <div className='h-[100dvh] w-[90dvw] grid grid-cols-1 sm:grid-cols-2 overflow-y-auto gap-4 p-4'>
      {/* <Calender/> */}
      <NutritionPieChart/>
      <AnalysisCard/>
      <NutrientChart/>
      <ChatApp/>
    </div>
  )
}

export default Calenderpage
