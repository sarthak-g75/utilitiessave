import React from 'react'

const Electricity = ({ title, data, banner }) => {
  return (
    <div className='flex flex-col items-center gap-10 max-w-[100%] pb-10'>
      <section className='relative flex items-center justify-center gap-6 md:mt-8 px-4 py-16 w-full aspect-[16/2] overflow-hidden h-full'>
        <h1 className='text-2xl font-bold tracking-wide text-center text-white md:text-5xl'>
          {title}
        </h1>
        <img
          src={banner || './electricityPage.jpg'}
          className='absolute top-0 left-0 object-cover w-full h-full -z-10 brightness-50'
        />
      </section>
      {data.map((d, index) => (
        <section
          className={`flex max-w-[1080px] flex-col-reverse lg:flex-row justify-center gap-10 px-4 items-center ${
            index % 2 == 0 && 'lg:flex-row-reverse'
          }`}
        >
          {d.para}
          <img
            className='object-cover w-full max-h-72 border rounded-xl flex-[0.5]'
            src={d.image}
            alt=''
          />
        </section>
      ))}
    </div>
  )
}

export default Electricity
