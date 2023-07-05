import React from 'react'
import HeaderTop from './HeaderTop';
import HeaderCategories from './HeaderCategories';
import HeaderMain from './HeaderMain';
const Header = () => {
  return (
    <section>
        <HeaderTop />
        <HeaderMain />
        <HeaderCategories />
    </section>
  )
}

export default Header;