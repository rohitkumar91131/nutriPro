import React from 'react'
import Hi from './Header/Hi'
import Header from './Header/Header'
import FoodForm from './Form/FoodForm'
import FoodTracker from './Form/FoodTracker'

function HomePage() {
  return (
    <div>
      <Header />
      <FoodForm />
      <FoodTracker />
    </div>
  )
}

export default HomePage
