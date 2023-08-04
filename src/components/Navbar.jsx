import React, { useRef, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiPlus, FiMenu } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
const Navbar = ({ home }) => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/electricity', label: 'Electricity' },
    { to: '/gas', label: 'Gas' },
    { to: '/water', label: 'Water' },
    { to: '/new-connection', label: 'New Connection' },
    { to: '/about', label: 'About us' },
    // { to: '/supplier', label: 'Our Supplier' },
  ]

  const location = useLocation()
  const ref = useRef()
  const [height, setheight] = useState(0)

  const [isMobile, setIsMobile] = useState(false)
  const hamburgerMenu = (
    <FiMenu
      className='text-lg text-tealGreen'
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

  let [activeTab, setActiveTab] = useState(links[0].label)

  const scrollToElement = () => {
    const element = document.getElementById('quote')
    // Alternatively, you can use querySelector if you have a more complex selector:
    // const element = document.querySelector('.scroll-to-me');

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // You can use 'auto' instead for immediate scrolling
        block: 'start', // You can change 'start' to 'center' or 'end' depending on your desired position
        inline: 'nearest', // You can change 'nearest' to 'start' or 'end' if you want to align the element at the start or end of the scroll container
        // Adjust this value as needed for your desired margin
      })
    }
  }

  return (
    <>
      <div
        className={`flex justify-center items-center ${!home && 'bg-white'}`}
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
              <div className='relative'>
                {location.pathname === link.to && (
                  <motion.div
                    layoutId='bar'
                    className='absolute bottom-0 left-0 w-full h-[2px] bg-primaryGreen'
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
                <Link
                  className={`hidden lg:block hover:text-primaryGreen ${
                    location.pathname === link.to
                      ? 'text-primaryGreen'
                      : 'text-tealGreen'
                  }`}
                  key={index}
                  to={link.to}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <div
              onClick={scrollToElement}
              className='hidden px-6 py-2 ml-auto text-white transition-all rounded-full cursor-pointer lg:block bg-primaryGreen hover:text-tealGreen'
            >
              Contact Us
            </div>
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
              {/* <Link
                to='/contactUs'
                className={`lg:block font-medium text-xl ${
                  location.pathname === '/ContactUs'
                    ? 'text-primaryGreen'
                    : 'text-tealGreen'
                }`}
              >
                {' '}
                Contact Us
              </Link> */}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
