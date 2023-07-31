import React from 'react'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <section className='h-max pb-40 pt-44 md:p-0 md:h-[850px] relative text-white overflow-hidden w-full'>
      <img
        src='./landing-image.jpg'
        className='absolute top-0 left-0 object-cover object-left-bottom w-full h-full -z-10 brightness-75'
      />
      <div className='flex flex-col items-start justify-center w-full h-full gap-2 p-4 -mt-16 md:gap-4 md:items-center text-tealGreen'>
        <div className='flex flex-col items-start text-3xl font-extrabold text-center md:items-center md:text-7xl '>
          <span>Savings is</span>
          <span>
            Just{' '}
            <span className='text-white border-b-2 lg:border-b-4'>
              One Click
            </span>{' '}
            Away..
          </span>
        </div>
        <div className='font-medium'>
          Start Saving Money with Utilities Save, WF will Save up to 40% on your
          Utilities bill.
        </div>
        <div className='flex gap-2 md:gap-4'>
          <Link className='px-6 py-2 font-medium text-white transition-all border rounded-full md:border-2 border-primaryGreen font-m6 md:py-4 h-max md:px-12 bg-primaryGreen hover:text-tealGreen md:text-xl'>
            Contact Us
          </Link>
          <Link className='px-6 py-2 font-medium transition-all border-2 rounded-full bg-white/50 md:border-2 md:py-4 h-max md:px-12 hover:bg-white hover:text-tealGreen md:text-xl'>
            About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Landing
