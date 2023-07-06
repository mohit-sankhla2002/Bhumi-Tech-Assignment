import React from 'react'
import Header from './components/Sections/Header';
import Hero from './components/Sections/Hero';
import BestDeals from './components/Sections/BestDeals';
import ClassifiedProducts from './components/Sections/ClassifiedProducts';
import Recommended from './components/Sections/Recommended';
import FlashSale from './components/Sections/FlashSale';
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <BestDeals />
      <ClassifiedProducts />
      <Recommended />
      <FlashSale />
    </>
  )
}

export default App;