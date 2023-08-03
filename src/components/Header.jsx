import React from 'react'
import { FaVoicemail } from 'react-icons/fa'
import { FiPhoneCall, FiClock } from 'react-icons/fi'

const Header = () => {
  return (
    <header className='flex flex-col items-center justify-center gap-2 p-2 py-3 text-xs text-white normal-case border-b md:text-sm md:gap-4 border-white/10 bg-tealGreen md:flex-row'>
      <span className='flex items-center gap-2 '>
        <FaVoicemail className='text-base text-primaryGreen' />{' '}
        info@utilitiessave.com
      </span>
      <span className='flex items-center gap-2 '>
        <FiPhoneCall className='text-base text-primaryGreen' />
        0207 112 9116
      </span>
      <span className='flex items-center gap-2 '>
        <FiClock className='text-base text-primaryGreen' />
        mon-fri 8:30AM- 5:30PM
      </span>
    </header>
  )
}

export default Header
