import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='flex justify-center px-6 py-12 lg:px-10 lg:py-20 bg-lightGreen text-tealGreen'>
        <div className='max-w-[1440px] w-full flex flex-col lg:flex-row justify-between gap-4 lg:gap-2 '>
          <div className='flex flex-col items-start gap-4 max-w-[400px]'>
            <img
              src='./logo.png'
              alt=''
              className='w-40 md:w-60'
            />
            <div>
              Here at utilities save. our aim is to provide you with maximum
              savings and best services for your business utilities. we search
              across most of the uk suppliers both small and large and identify
              what is the best possible deal for your business.
            </div>
            <div className='flex flex-col justify-start gap-2 '>
              <img
                className='max-w-[150px] md:max-w-[200px]'
                src='./Ombudsman.webp'
                alt=''
              />
              <span className='text-base tracking-widest text-center text-black opacity-75'>
                ADR Scheme Member
              </span>
            </div>
          </div>
          <div className='flex flex-col items-start gap-4 w-max'>
            <div className='flex flex-col items-start gap-4 w-max'>
              <div className='ml-1 text-xl font-bold'>Help</div>
              <ul className='flex flex-col gap-2'>
                <li>
                  <Link
                    className='flex items-center gap-2 font-medium transition-all group hover:text-primaryGreen'
                    to={'/complaints-procedure'}
                  >
                    <FiChevronRight className='text-xl transition-all text-primaryGreen group-hover:translate-x-1' />{' '}
                    Complaint
                  </Link>
                </li>
              </ul>
            </div>
            <div className='ml-1 text-xl font-bold'>Navigation Links</div>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link
                  className='flex items-center gap-2 font-medium transition-all group hover:text-primaryGreen'
                  to={'/'}
                >
                  <FiChevronRight className='text-xl transition-all text-primaryGreen group-hover:translate-x-1' />{' '}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className='flex items-center gap-2 font-medium transition-all group hover:text-primaryGreen'
                  to={'/electricity'}
                >
                  <FiChevronRight className='text-xl transition-all text-primaryGreen group-hover:translate-x-1' />{' '}
                  Electricity
                </Link>
              </li>
              <li>
                <Link
                  className='flex items-center gap-2 font-medium transition-all group hover:text-primaryGreen'
                  to={'/gas'}
                >
                  <FiChevronRight className='text-xl transition-all text-primaryGreen group-hover:translate-x-1' />{' '}
                  Gas
                </Link>
              </li>
              <li>
                <Link
                  className='flex items-center gap-2 font-medium transition-all group hover:text-primaryGreen'
                  to={'/water'}
                >
                  <FiChevronRight className='text-xl transition-all text-primaryGreen group-hover:translate-x-1' />{' '}
                  Water
                </Link>
              </li>
              <li>
                <Link
                  className='flex items-center gap-2 font-medium transition-all group hover:text-primaryGreen'
                  to={'/new-connection'}
                >
                  <FiChevronRight className='text-xl transition-all text-primaryGreen group-hover:translate-x-1' />{' '}
                  New Connection
                </Link>
              </li>
              <li>
                <Link
                  className='flex items-center gap-2 font-medium transition-all group hover:text-primaryGreen '
                  to={'/about'}
                >
                  <FiChevronRight className='text-xl transition-all text-primaryGreen group-hover:translate-x-1' />{' '}
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-start gap-2 w-max'>
            <div className='flex flex-col'>
              <div className='text-xl font-bold'>Contact Us</div>
              <ul>
                <li>
                  <b>Post: </b>37 Elmbourne Road London, SW17 8JS.
                </li>
                <li>
                  <b>Email: </b>info@utilitiessave.com
                </li>
                <li>
                  <b>Phone: </b> 0207 112 9116
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 py-4 font-medium text-center bg-tealGreen text-lightGreen'>
        Copyright © 2016-2023 utilitiessave.com, All Right Reserved This Website
      </div>
    </>
  )
}

export default Footer
