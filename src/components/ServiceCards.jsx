import React from 'react'
import { Link } from 'react-router-dom'
const ServiceCards = (props) => {
  const image = './' + props.name + '.jpg'
  return (
    <div className='flex flex-col items-center justify-center w-auto gap-6 pb-6 overflow-hidden text-center bg-white shadow-xl rounded-xl'>
      <img
        src={image}
        alt=' '
        className='object-cover brightness-90 w-[450px] h-80'
      />

      <span className='text-2xl font-bold text-tealGreen'>{props.name}</span>
      <span className='px-4 font-medium w-96 text-l text-slate-500'>
        {props.description}
      </span>
      <Link className='px-12 py-4 font-medium text-white transition-all rounded-full bg-primaryGreen hover:text-tealGreen'>
        Read More About {props.name}
      </Link>
    </div>
  )
}

export default ServiceCards
