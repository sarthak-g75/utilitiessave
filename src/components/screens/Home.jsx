import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'
import { FiChevronRight, FiClock, FiPhoneCall } from 'react-icons/fi'
import { FaVoicemail } from 'react-icons/fa'
import About from '../About'

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
            <Link className='px-6 py-2 transition-all border rounded-full md:border-2 border-primaryGreen font-m6 md:py-6 h-max md:px-12 bg-primaryGreen hover:text-tealGreen md:text-xl'>
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
          <span className='text-xl font-medium text-slate-200'>
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
      <About />
      {/* 3 cards */}
      <section className='flex flex-col items-center w-full gap-16 py-10 mt-20 text-white bg-tealGreen'>
        <div className='text-4xl font-bold'>Services Provides By Us</div>
        <div className='flex flex-col gap-6 py-10 md:flex-row text-tealGreen'></div>
      </section>
      {/* cards */}
      <section className='flex flex-col gap-10 -mt-20 md:flex-row text-tealGreen'>
        {/* card 1 */}
        <div className='flex flex-col items-center justify-center w-auto gap-6 pb-6 overflow-hidden text-center bg-white shadow-xl rounded-xl'>
          <img
            src='./electricity.jpg'
            alt=' '
            className='object-cover brightness-90 w-[450px] h-80'
          />

          <span className='text-2xl font-bold text-tealGreen'>Electricity</span>
          <span className='px-4 font-medium w-96 text-l text-slate-500'>
            Since the deregulation in the energy market, many changes have taken
            place with the most significant one is the price increases.
          </span>
          <Link className='px-12 py-4 font-medium text-white transition-all rounded-full bg-primaryGreen hover:text-tealGreen'>
            Read More About Electricity
          </Link>
        </div>

        {/* card 2 */}
        <div className='flex flex-col items-center justify-center w-auto gap-6 pb-6 overflow-hidden text-center bg-white shadow-xl rounded-xl'>
          <img
            src='./gas.jpg'
            alt=' '
            className='object-cover brightness-90 w-[450px] h-80 '
          />

          <span className='text-2xl font-bold text-tealGreen'>Gas</span>
          <span className='px-4 font-medium w-96 text-l text-slate-500'>
            Since the deregulation in the energy market, many changes have taken
            place with the most significant one is the price increases.
          </span>
          <Link className='px-12 py-4 font-medium text-white transition-all rounded-full bg-primaryGreen hover:text-tealGreen'>
            Read More About Gas
          </Link>
        </div>

        {/* card 3 */}
        <div className='flex flex-col items-center justify-center w-auto gap-6 pb-6 overflow-hidden text-center bg-white shadow-xl rounded-xl'>
          <img
            src='./water.jpg'
            alt=' '
            className='object-cover w-[450px] brightness-90 h-80 '
          />

          <span className='text-2xl font-bold text-tealGreen'>Water</span>
          <span className='px-4 font-medium text-l w-96 text-slate-500'>
            From April 2017, the laws changed allowing business & charities to
            seek better deals for water.
          </span>
          <Link className='px-12 py-4 font-medium transition-all rounded-full bg-primaryGreen hover:text-tealGreen'>
            Read More About Water
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
