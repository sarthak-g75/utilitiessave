import React from 'react'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <section className='h-[750px] md:h-[850px] relative text-white overflow-hidden w-full'>
      <img
        src='./landing-image.jpg'
        className='absolute top-0 left-0 object-cover w-full h-full -z-10 brightness-50'
      />
      <div className='flex flex-col items-start justify-center w-full h-full gap-2 p-4 -mt-16 md:gap-4 md:items-center'>
        <div className='flex flex-col items-start text-3xl font-extrabold md:items-center md:text-7xl'>
          <span>Savings is</span>
          <span>
            Just <span className='text-primaryGreen'>One Click</span> Away..
          </span>
        </div>
        <div>
          Start Saving Money with Utilities Save, WF will Save up to 40% on your
          Utilities bill.
        </div>
        <div className='flex gap-2 md:gap-4'>
          <Link className='px-6 py-2 transition-all border rounded-full md:border-2 border-primaryGreen font-m6 md:py-6 h-max md:px-12 bg-primaryGreen hover:text-tealGreen md:text-xl'>
            Contact Us
          </Link>
          <Link className='px-6 py-2 transition-all border rounded-full md:border-2 font-m6 dium md:py-6 h-max md:px-12 hover:bg-white/50 hover:text-tealGreen md:text-xl'>
            About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Landing
