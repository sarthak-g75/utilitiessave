import React from 'react'
import ServiceCards from './ServiceCards'

const ServicesCards = () => {
  return (
    <section className='flex flex-col items-center w-full py-10 mt-20 text-white'>
      <div className='flex justify-center w-full px-4 pt-10 pb-32 text-center md:pt-20 md:pb-40 bg-tealGreen'>
        <div className='text-4xl font-bold'>Services Provides By Us</div>
      </div>
      <div className='flex flex-col justify-center gap-6 -mt-20 md:flex-row md:flex-wrap text-tealGreen'>
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
      </div>
    </section>
  )
}

export default ServicesCards
