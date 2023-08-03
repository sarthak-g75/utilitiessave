import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Landing = () => {
  const [scale, setScale] = useState(0)

  return (
    <section className='h-max pb-40 pt-44 md:p-0 md:h-[850px] relative text-white overflow-hidden w-full'>
      <motion.img
        initial={{}}
        animate={{ scale: [1, 1.5] }}
        transition={{ duration: 10, stiffness: 1 }}
        exit={{ scale: 1.5 }}
        src='./landing-image.jpg'
        className='absolute top-0 left-0 object-cover object-left-bottom w-full h-full -z-10 brightness-75'
      />
      <div className='flex flex-col items-start justify-center w-full h-full gap-2 p-4 -mt-16 md:gap-4 md:items-center text-tealGreen'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          exit={{ opacity: 1, y: 0 }}
          className='flex flex-col items-start text-3xl font-extrabold text-center md:items-center md:text-7xl '
        >
          <span>Savings is</span>
          <span>
            Just <span className='text-white'>One Click</span> Away..
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          exit={{ opacity: 1, y: 0 }}
          className='max-w-md font-medium md:text-center'
        >
          Start Saving Money with Utilities Save, WF will Save up to 40% on your
          Utilities bill.
        </motion.div>
        <div className='flex gap-2 md:gap-4'>
          <Link>
            <motion.div
              className='px-6 py-2 font-medium text-white transition-all border rounded-full md:border-2 border-primaryGreen font-m6 md:py-4 h-max md:px-12 bg-primaryGreen hover:text-tealGreen md:text-xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              exit={{ opacity: 1 }}
            >
              Contact Us
            </motion.div>
          </Link>
          <Link>
            <motion.div
              className='px-6 py-2 font-medium transition-all border-2 rounded-full bg-white/50 md:border-2 md:py-4 h-max md:px-12 hover:bg-white hover:text-tealGreen md:text-xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              exit={{ opacity: 1 }}
            >
              About Us
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Landing
