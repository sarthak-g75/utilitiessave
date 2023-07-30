import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const InifiniteScroll = () => {
  const images = [
    './suppliers/british-gas.jpg',
    './suppliers/crown-gas-power.jpg',
    './suppliers/d-energy.jpg',
    './suppliers/dong-energy.jpg',
    './suppliers/edf.jpg',
    './suppliers/eon.jpg',
    './suppliers/haven-power.jpg',
    './suppliers/opus-energy.jpg',
    './suppliers/rgent-gas.jpg',
    './suppliers/schotti-power.jpg',
    './suppliers/Smartest.png',
    './suppliers/sse.jpg',
    './suppliers/total.jpg',
    './suppliers/utilitiessave-01.jpg',
    './suppliers/utilitiessave-02.jpg',
    './suppliers/utilitiessave-03.jpg',
    './suppliers/ygp-power.jpg',
    './suppliers/Yu-energy.jpg',
  ]

  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className='relative flex flex-col items-center justify-center w-full gap-4 px-4 my-20'>
      <div className='text-3xl font-bold md:text-5xl text-tealGreen'>
        Our Supplier
      </div>
      <motion.div
        ref={carousel}
        className='overflow-hidden max-w-[90%] lg:max-w-[70%] w-full carousel cursor-grab p-8'
      >
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='flex items-center inner-carousel w-max'
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className='item w-[200px] pointer-events-none'
            >
              <img
                className='w-full h-full'
                src={img}
                alt=''
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default InifiniteScroll
