import React from 'react'

import About from '../About'
import WelcomeBoxes from '../WelcomeBoxes'
import ServiceCards from '../ServiceCards'
import Landing from '../Landing'
import InifiniteScroll from '../InifiniteScroll'

const Home = () => {
  return (
    <main className='flex flex-col items-center'>
      {/* landing */}
      <Landing />
      {/* two boxes */}
      <WelcomeBoxes />
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
        <ServiceCards
          name='Electricity'
          description=' Since the deregulation in the energy market, many changes have taken
            place with the most significant one is the price increases.'
        />

        {/* card 2 */}
        <ServiceCards
          name='Gas'
          description=' Since the deregulation in the energy market, many changes have taken
            place with the most significant one is the price increases.'
        />

        {/* card 3 */}
        <ServiceCards
          name='Water'
          description='  From April 2017, the laws changed allowing business & charities to
          seek better deals for water.'
        />
      </section>
      <InifiniteScroll />
    </main>
  )
}

export default Home
