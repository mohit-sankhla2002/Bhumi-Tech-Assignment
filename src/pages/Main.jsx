import React from 'react'
import Header from '../components/Sections/Header';
import Hero from '../components/Sections/Hero';
import BestDeals from '../components/Sections/BestDeals';
import ClassifiedProducts from '../components/Sections/ClassifiedProducts';
import Recommended from '../components/Sections/Recommended';
import FlashSale from '../components/Sections/FlashSale';
import HotSale from '../components/Sections/HotSale';
import InfoCards from '../components/Sections/InfoCards';
import RecentlyViewed from '../components/Sections/RecentlyViewed';
import BackToTop from '../components/Sections/BackToTop';
import Newsletter from '../components/Sections/Newsletter';
import Footer from '../components/Sections/Footer';


function Main() {
  return (
    <>
        <a id='header'>
            <Header />
        </a>
        <Hero />
        <BestDeals />
        <ClassifiedProducts />
        <Recommended />
        <FlashSale />
        <HotSale />
        <InfoCards />
        <RecentlyViewed />
        <BackToTop />
        <Newsletter />
        <Footer />
    </>
  )
}

export default Main;