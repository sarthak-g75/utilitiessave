import React from 'react'
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';

const Header = () => {
  return (
    
    <header>
        <span> <HiOutlineMailOpen color='green'/> info@utilitiessave.com</span>
        <span> <BsFillTelephoneFill color='green'/>0207 112 9116</span>
        <span> <BiTime color='green'/>MON-FRI 8:30AM- 5:30PM</span>
    </header>
  )
}

export default Header