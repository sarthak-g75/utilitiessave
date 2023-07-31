import React from 'react'
import './Carasoul.css'
const InfiniteCarasoul = () => {
  const images = [
    './suppliers/british-gas.jpg',
    './suppliers/crown-gas-power.jpg',
    './suppliers/d-energy.jpg',
    './suppliers/dong-energy.jpg',
    './suppliers/edf.jpg',
    './suppliers/eon.jpg',
    './suppliers/haven-power.jpg',
    './suppliers/opus-energy.jpg',
    './suppliers/rgent-gas.jpg',
    './suppliers/schotti-power.jpg',
    './suppliers/Smartest.png',
    './suppliers/sse.jpg',
    './suppliers/total.jpg',
    './suppliers/utilitiessave-01.jpg',
    './suppliers/utilitiessave-02.jpg',
    './suppliers/utilitiessave-03.jpg',
    './suppliers/ygp-power.jpg',
    './suppliers/Yu-energy.jpg',
  ]
  const imgs = images.map((img, index) => (
    <img
      key={index}
      className='h-16 mx-4 md:mx-6 lg:h-24 md:h-20 mix-blend-darken'
      src={img}
      alt=''
    />
  ))
  return (
    <div className='flex flex-col items-center justify-center gap-10 py-20'>
      <div className='text-3xl font-bold md:text-5xl text-tealGreen'>
        Our Supplier
      </div>
      <div className=' overflow-hidden logo-main relative w-[80vw] py-16'>
        <div className='flex flex-row overflow-hidden logos w-max '>
          <div className='flex logo-slide'>{imgs}</div>
          <div className='flex logo-slide'>{imgs}</div>
        </div>
      </div>
    </div>
  )
}

export default InfiniteCarasoul
