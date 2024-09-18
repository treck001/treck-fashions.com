import React from 'react'
import Slider from '../Components/Carosual/Slider'
import Latest_Products from '../Components/Latest_Products'
import Offer from '../Components/Offer'
import Aboutus from '../Components/Aboutus'
import Category from '../Components/Category'
import BestsellingProducts from '../Components/BestsellingProducts'

const HomePage = () => {
  return (
    <>
        <Slider/>
        <Category/>
        <Latest_Products/>
        <BestsellingProducts/>
        {/* <Offer/> */}
        {/* <Aboutus/>   */}
    </>
  )
}

export default HomePage