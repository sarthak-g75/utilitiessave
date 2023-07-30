import React from 'react'

const ComponentPage = (props) => {
  return (
    <div>
      <section className='relative w-full overflow-hidden text-white '>
        <img
          src='./electricityPage.jpg'
          className='absolute md:h-[450px] top-0 left-0 object-cover w-full h-full -z-10 brightness-50'
        />
        <h1 className='px-2 py-40 text-5xl text-center snap-center '>
          ELECTRICITY
        </h1>
      </section>
      <section></section>
    </div>
  )
}

export default ComponentPage
