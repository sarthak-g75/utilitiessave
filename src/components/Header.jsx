import React from 'react'
import { FaVoicemail } from 'react-icons/fa'
import { FiPhoneCall, FiClock } from 'react-icons/fi'

const Header = () => {
  return (
    <header className='border-b border-white/10 bg-tealGreen text-white flex gap-4 p-2 py-3 items-center justify-center text-sm'>
      <span className='flex gap-2 items-center '>
        <FaVoicemail className='text-primaryGreen text-base' /> info@utilitiessave.com
      </span>
      <span className='flex gap-2 items-center '>
        <FiPhoneCall className='text-primaryGreen text-base' />
        0207 112 9116
      </span>
      <span className='flex gap-2 items-center '>
        <FiClock className='text-primaryGreen text-base' />
        MON-FRI 8:30AM- 5:30PM
      </span>
    </header>
  )
}

export default Header
