import React from 'react'
import Header from '../common/Header'

import Address from '../components/address/Address'
import Footer from '../common/Footer'
import VillaList from '../components/explore/VillaList'

const HomePage = () => {
  return (
    <>
    <div className="h-screen flex flex-col ">
      <Header />
      <div className="flex flex-col w-full items-center gap-4 flex-auto justify-center">
        <div className="flex flex-col items-center">
          <span className="lg:text-7xl text-2xl font-extrabold text-text">Serene Groove</span>
          <span className="lg:text-7xl text-2xl font-extrabold text-text">Spacious Villas, Natural Luxury</span>
        </div>
        <span className="lg:text-base text-xs w-[90%] lg:w-[60%] text-center">
          Every villa offers three spacious en-suite bedrooms with king-size beds and natural light, a private living and dining area, a study, and a fully equipped kitchen — ideal for extended stays and family getaways. Carefully curated amenities, including a tea and coffee station, sustainable bath and skincare products, and personal essentials, are placed thoughtfully within tastefully furnished interiors. Guests enjoy a welcome drink on arrival, a full breakfast each morning, and crafted food and beverage presentations throughout their stay.
        </span>
      </div>
    </div>
    <VillaList/>
    <Address/>
    <Footer/>
  </>
  )
}

export default HomePage