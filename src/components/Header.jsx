import React from 'react'
import { FaVoicemail } from 'react-icons/fa'
import { FiPhoneCall, FiClock } from 'react-icons/fi'

const Header = () => {
  return (
    <header className='flex flex-col items-center justify-center gap-2 p-2 py-3 text-sm text-white normal-case border-b md:text-base md:gap-4 border-white/10 bg-tealGreen md:flex-row'>
      <span className='flex items-center gap-2 '>
        <FaVoicemail className='text-lg text-primaryGreen' />{' '}
        info@utilitiessave.com
      </span>
      <span className='flex items-center gap-2 '>
        <FiPhoneCall className='text-lg text-primaryGreen' />
        0207 112 9116
      </span>
      <span className='flex items-center gap-2 '>
        <FiClock className='text-lg text-primaryGreen' />
        Mon-Fri 8:30AM- 5:30PM
      </span>
    </header>
  )
}

export default Header
