import React, { useRef, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

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

  useEffect(() => {
    setheight(ref.current.getBoundingClientRect().height)
  }, [])

  return (
    <div
      className={`flex justify-center items-center ${!home && 'bg-tealGreen'}`}
      ref={ref}
      style={{
        marginBottom: home && `-${height}px`,
      }}
    >
      <div className='flex gap-2 p-4 justify-between items-center relative w-full z-10 max-w-[1440px]'>
        <div className='text-xl font-bold text-primaryGreen'>
          UTILITIES SAVE
        </div>
        <div className='flex items-center gap-4 font-medium capitalize'>
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
          <Link className='px-6 py-2 transition-all rounded-full bg-primaryGreen hover:text-tealGreen'>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
