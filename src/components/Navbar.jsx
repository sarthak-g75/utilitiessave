import React, { useRef, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiPlus, FiMenu } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
const Navbar = ({ home }) => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About us' },
    { to: '/electricity', label: 'Electricity' },
    { to: '/gas', label: 'Gas' },
    { to: '/water', label: 'Water' },
    { to: '/new-connection', label: 'New Connection' },
    { to: '/supplier', label: 'Our Supplier' },
  ]

  const location = useLocation()
  const ref = useRef()
  const [height, setheight] = useState(0)

  const [isMobile, setIsMobile] = useState(false)
  const hamburgerMenu = (
    <FiMenu
      className='text-lg'
      color='white'
      onClick={() => {
        setIsMobile(!isMobile)
      }}
    />
  )
  const cancelBtn = (
    <FiPlus
      className='z-20 text-lg rotate-45 text-tealGreen'
      onClick={() => {
        setIsMobile(!isMobile)
      }}
    />
  )
  useEffect(() => {
    setheight(ref.current.getBoundingClientRect().height)
  }, [])

  return (
    <>
      <div
        className={`flex justify-center items-center ${
          !home && 'bg-tealGreen'
        }`}
        ref={ref}
        style={{
          marginBottom: home && `-${height}px`,
        }}
      >
        <div className='flex flex-row gap-4 p-4 justify-between items-center  w-full z-10 max-w-[1440px]'>
          {/* <div className='text-xl font-bold text-primaryGreen'>
            UTILITIES SAVE
          </div> */}
          <img
            src='./logo.png'
            alt=''
            className='w-40 md:w-60'
          />
          <div className='items-center gap-4 ml-auto font-medium capitalize md:flex'>
            {links.map((link, index) => (
              <Link
                className={`hidden lg:block ${
                  location.pathname === link.to
                    ? 'text-primaryGreen'
                    : 'text-white'
                }`}
                key={index}
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
            <Link className='hidden px-6 py-2 ml-auto transition-all rounded-full lg:block bg-primaryGreen hover:text-tealGreen'>
              Contact Us
            </Link>
          </div>
          <button className=' w-fit lg:hidden'>{hamburgerMenu}</button>
          {/* <div className=' w-fit md:hidden'>{cancelBtn}</div> */}
        </div>
      </div>
      <AnimatePresence>
        {isMobile && (
          <div className='flex flex-row'>
            <motion.div
              initial={{ opacity: 0, backdropFilter: 'blur(0)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(24px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0)' }}
              className='fixed top-0 right-0 z-10 flex flex-col items-center justify-center w-full h-full p-2 bg-white/30 backdrop-blur-xl '
            >
              <button className='absolute top-5 right-5'> {cancelBtn}</button>
              {links.map((link, index) => (
                <Link
                  onClick={() => {
                    setIsMobile(!isMobile)
                  }}
                  className={`lg:block font-medium text-xl ${
                    location.pathname === link.to
                      ? 'text-primaryGreen'
                      : 'text-tealGreen'
                  }`}
                  key={index}
                  to={link.to}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                className={`lg:block font-medium text-xl ${
                  location.pathname === '/ContactUs'
                    ? 'text-primaryGreen'
                    : 'text-tealGreen'
                }`}
              >
                {' '}
                Contact Us
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
