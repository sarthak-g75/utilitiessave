import React from 'react'

const ComponentPage = (props) => {
  return (
    <div className='flex flex-col items-center gap-2 max-w-[100%]'>
      <section className='relative flex items-center justify-center gap-6 my-10 px-2 py-4 max-w-[1440px] w-full aspect-[16/2] rounded-lg overflow-hidden h-full'>
        <h1 className='text-5xl font-bold tracking-wide text-center text-white'>
          ELECTRICITY
        </h1>
        <img
          src='./electricityPage.jpg'
          className='absolute top-0 left-0 object-cover w-full h-full -z-10 brightness-50'
        />
      </section>
      <section className='flex max-w-[1440px] justify-center gap-4 px-4 items-center h-[100vh]'>
        <p className='flex-[0.5] font-medium text-lg'>
          Since the deregulation in the energy market, many changes have taken
          place with the most significant one is the price increases.
          Electricity costs has increased by over 70% in the past few years
          while natural gas prices has increased by over 50% in the same period.
          Utilities save will provide you with the best prices which will give
          you the maximum savings according to your consumption as it is very
          difficult for the customers to get the best deal in the UK energy
          market due to the many thousands of tariffs and their regularity of
          change. Utilities save will provide you with no obligation service
          with highly competitive prices from our extensive list of suppliers.
        </p>
        <img
          className='object-cover w-full max-h-96 border rounded-xl flex-[0.5]'
          src='https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          alt=''
        />
      </section>
    </div>
  )
}

export default ComponentPage
