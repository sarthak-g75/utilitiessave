import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Whatsapp = () => {
  return (
    <a
      className='fixed z-50 p-3 text-2xl text-green-100 bg-green-500 rounded-full cursor-pointer md:p-4 md:text-4xl md:right-8 md:bottom-8 right-4 bottom-4 w-max'
      href='https://wa.me/447385159648'
      target='_blank'
      rel='noreferrer'
    >
      <FaWhatsapp />
    </a>
  )
}

export default Whatsapp
