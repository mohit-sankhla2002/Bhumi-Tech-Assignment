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
import Cart from '../components/Cart/Cart';
import { useSelector } from 'react-redux';
import Modal from '../components/UI/Modal';
function Main() {
  const cartOpen = useSelector(state => state.toggleCart.cartOpen);
  if (cartOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll';
  }

  return (
    <>
      {cartOpen && <Modal> <Cart /> </Modal>}
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