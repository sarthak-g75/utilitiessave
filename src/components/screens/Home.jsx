import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiClock, FiPhoneCall } from 'react-icons/fi'
import { FaVoicemail } from 'react-icons/fa'

const Home = () => {
  return (
    <main className='flex flex-col items-center'>
      {/* landing */}
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
            Start Saving Money with Utilities Save, WF will Save up to 40% on
            your Utilities bill.
          </div>
          <div className='flex gap-2 md:gap-4'>
            <Link className='px-6 py-2 transition-all border rounded-full md:border-2 border-primaryGreen font-m6 dium md:py-6 h-max md:px-12 bg-primaryGreen hover:text-tealGreen md:text-xl'>
              Contact Us
            </Link>
            <Link className='px-6 py-2 transition-all border rounded-full md:border-2 font-m6 dium md:py-6 h-max md:px-12 hover:bg-white/50 hover:text-tealGreen md:text-xl'>
              About Us
            </Link>
          </div>
        </div>
      </section>
      {/* two boxes */}
      <section className='flex flex-col md:flex-row px-8 gap-4 md:gap-8 max-w-[1440px] -mt-16'>
        <div className='bg-primaryGreen shadow-xl rounded-xl p-8 flex flex-col items-center text-center gap-2 min-w-[300px] justify-center'>
          <span className='text-3xl font-bold text-white'>€OO'S</span>
          <span className='text-xl font-medium'>
            Savings Is Just One Click Away.
          </span>
        </div>
        <div className='flex flex-col items-center gap-2 p-8 text-center bg-white shadow-xl md:text-left md:items-start rounded-xl'>
          <div className='text-3xl font-bold text-tealGreen'>
            Welcome To Utilities Save
          </div>
          <div>
            Here at utilities save, our aim is to provide you with maximum
            savings and best services your business utilities. We search across
            most of the UK suppliers both small and large and identify what is
            the best possible deal for your business.
            <span className='hidden md:block'>
              Our experts aim to find you the best possible deal be it
              electricity or gas. Using our industry contacts and experience we
              aim to provide you with no obligation services with highly
              competitive prices from our extensive list of suppliers. The
              unique feature whereby offer cheaper electric & gas bill along
              with unique energy reduction cost services.
            </span>
          </div>
        </div>
      </section>
      {/* About Us */}
      <section className='flex flex-col md:flex-row p-4 gap-8 max-w-[1080px] h-min w-full mt-20 items-center'>
        <div className='flex flex-col items-center justify-center flex-1 gap-4 text-center md:items-start md:text-left'>
          <span className='text-lg font-semibold text-primaryGreen'>
            About Us
          </span>
          <span className='text-3xl font-bold md:text-5xl text-tealGreen'>
            Renewable Energy for a Sustainable World
          </span>
          <span className='text-lg'>
            Empowering businesses since 2016. Maximum savings on gas and
            electricity. Unbeatable deals from top UK suppliers. No-obligation
            service. Unique energy reduction solutions. Join us for
            cost-effective energy management.
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
      {/* 3 cards */}
      <section className='flex flex-col items-center w-full gap-16 p-4 py-20 mt-20 text-white bg-tealGreen'>
        <div className='text-4xl font-bold'>Get In Touch</div>
        <div className='flex flex-col gap-6 md:flex-row text-tealGreen'>
          <div className='flex flex-col items-center justify-center gap-6 p-8 bg-white rounded-md'>
            <span className='p-8 text-4xl rounded-full bg-tealGreen text-primaryGreen'>
              <FiPhoneCall />
            </span>
            <span className='text-xl font-medium'>0207 112 9116</span>
          </div>
          <div className='flex flex-col items-center justify-center gap-6 p-8 bg-white rounded-md'>
            <span className='p-8 text-4xl rounded-full bg-tealGreen text-primaryGreen'>
              <FaVoicemail />
            </span>
            <span className='text-xl font-medium'>info@utilitiessave.com</span>
          </div>
          <div className='flex flex-col items-center justify-center gap-6 p-8 bg-white rounded-md'>
            <span className='p-8 text-4xl rounded-full bg-tealGreen text-primaryGreen'>
              <FiClock />
            </span>
            <Link
              to={'/'}
              className='flex items-center gap-1 text-xl font-medium'
            >
              Get A Quote <FiChevronRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
