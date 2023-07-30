import React from 'react'
import { Link } from 'react-router-dom'
const ServiceCards = (props) => {
  const image = './' + props.name + '.jpg'
  return (
    <div className='flex flex-col items-center justify-between overflow-hidden text-center bg-white shadow-xl rounded-xl max-w-[350px]'>
      <img
        src={image}
        alt=' '
        className='object-cover brightness-90 w-[350px] h-60'
      />
      <div className='flex flex-col items-center w-full gap-4 pt-4 pb-8 border border-gray-300 rounded-b-xl '>
        <span className='mb-auto text-2xl font-bold text-tealGreen'>
          {props.name}
        </span>
        <span className='w-full px-4 font-medium text-l text-slate-500 text-ellipsis line-clamp-3'>
          {props.description}
        </span>
        <Link className='px-6 py-2 mt-auto font-medium text-white transition-all rounded-full bg-primaryGreen hover:text-tealGreen'>
          Read More About {props.name}
        </Link>
      </div>
    </div>
  )
}

export default ServiceCards
