import React from 'react'
import Map from './Map'

const Address = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full px-[50px] lg:px-[222px] mt-[60px] lg:mt-[30px] gap-8 xl:gap-20 lg:gap-10 ">

      <div className='flex flex-col lg:gap-4 gap-0 '>
        <span className='font-semibold text-4xl lg:text-5xl text-text'>Come find us at </span>
        <span className='font-medium text-xl lg:text-4xl mt-2 lg:mt-0'>Rabbarkunnu Rd</span>
        <span className='font-medium text-xl lg:text-4xl'> Kolichal, wayanad, Kerala 673576, India</span>
      </div>
      <div className='flex h-[300px] w-[300px] lg:h-[458px] lg:w-[658px] '>

       <Map/>
      </div>
    </div>
  )
}

export default Address