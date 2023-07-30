import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className='flex flex-col md:flex-row p-4 gap-8 max-w-[1080px]  h-min w-full mt-20 items-center'>
      <div className='flex flex-col items-center justify-center flex-1 gap-4 text-center md:items-start md:text-left'>
        <span className='text-lg font-semibold text-primaryGreen'>
          About Us
        </span>
        <span className='text-3xl font-bold md:hidden lg:block md:text-5xl text-tealGreen'>
          Renewable Energy for a Sustainable World
        </span>
        <span className='text-lg'>
          Empowering businesses since 2016. Maximum savings on gas and
          electricity. Unbeatable deals from top UK suppliers. No-obligation
          service. Unique energy reduction solutions. Join us for cost-effective
          energy management.
        </span>
        <Link className='flex items-center gap-1'>
          Read More About Us <FiChevronRight />
        </Link>
      </div>
      <div className='flex-1'>
        <img
          src='./aboutus.jpg'
          alt=''
          className='rounded-md'
        />
      </div>
    </section>
  )
}

export default About
