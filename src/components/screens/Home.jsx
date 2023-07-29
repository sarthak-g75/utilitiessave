import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiClock, FiPhoneCall } from 'react-icons/fi'
import { FaVoicemail } from 'react-icons/fa'

const Home = () => {
  return (
    <main className='flex flex-col items-center'>
      {/* landing */}
      <section className='h-[90vh] relative text-white overflow-hidden w-full'>
        <img
          src='./landing-image.jpg'
          className='absolute top-0 left-0 w-full h-full -z-10 brightness-50'
        />
        <Navbar />
        <div className='flex flex-col items-center justify-center w-full h-full gap-4 -mt-16'>
          <div className='flex flex-col items-center font-extrabold text-7xl'>
            <span>Cleaner Energy For A</span>
            <span>Cleaner World</span>
          </div>
          <div>
            Start Saving Money with Utilities Save, WF will Save up to 40% on
            your Utilities bill.
          </div>
          <div className='flex gap-4'>
            <Link className='px-12 py-4 font-medium transition-all rounded-full bg-primaryGreen hover:text-tealGreen'>
              Contact Us
            </Link>
            <Link className='px-12 py-4 font-medium transition-all border-2 rounded-full hover:bg-white/50 hover:text-tealGreen'>
              About Us
            </Link>
          </div>
        </div>
      </section>
      {/* two boxes */}
      <section className='flex gap-4 max-w-[1080px] -mt-16'>
        <div className='bg-primaryGreen shadow-xl rounded-xl p-8 flex flex-col items-center text-center gap-2 min-w-[300px] justify-center'>
          <span className='text-3xl font-bold text-white'>€OO'S</span>
          <span className='text-xl font-medium'>
            Savings Is Just One Click Away.
          </span>
        </div>
        <div className='flex flex-col gap-2 p-8 bg-white shadow-xl rounded-xl'>
          <div className='text-3xl font-bold text-tealGreen'>
            Welcome To Utilities Save
          </div>
          <div>
            Here at utilities save, our aim is to provide you with maximum
            savings and best services your business utilities. We search across
            most of the UK suppliers both small and large and identify what is
            the best possible deal for your business. Our experts aim to find
            you the best possible deal be it electricity or gas. Using our
            industry contacts and experience we aim to provide you with no
            obligation services with highly competitive prices from our
            extensive list of suppliers. The unique feature whereby offer
            cheaper electric & gas bill along with unique energy reduction cost
            services.
          </div>
        </div>
      </section>
      {/* About Us */}
      <section className='flex gap-8 max-w-[1080px] h-min w-full mt-20'>
        <div className='flex flex-col justify-center flex-1 gap-4'>
          <span className='text-lg font-semibold text-primaryGreen'>
            About Us
          </span>
          <span className='text-5xl font-bold text-tealGreen'>
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
      {/* get in touch */}
      <section className='flex flex-col items-center w-full gap-16 p-4 py-20 mt-20 text-white bg-tealGreen'>
        <div className='text-4xl font-bold'>Get In Touch</div>
        <div className='flex gap-6 text-tealGreen'>
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
