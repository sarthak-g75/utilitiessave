import React from 'react'

import { motion } from 'framer-motion'

const WelcomeBoxes = () => {
  return (
    <motion.section className='flex flex-col md:flex-row px-8 gap-4 md:gap-8 max-w-[1440px] -mt-16'>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        exit={{ opacity: 1, x: 0 }}
        className='bg-primaryGreen shadow-xl rounded-xl p-8 flex flex-col items-center text-center gap-2 min-w-[300px] justify-center'
      >
        <span className='text-3xl font-bold text-white'>€OO'S</span>
        <span className='text-xl font-medium text-slate-200'>
          Savings Is Just One Click Away.
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        exit={{ opacity: 1, x: 0 }}
        className='flex flex-col items-center gap-2 p-8 text-center bg-white shadow-xl md:text-left md:items-start rounded-xl'
      >
        <div className='pb-2 text-3xl font-bold border-b-4 border-tealGreen text-tealGreen'>
          Welcome To Utilities Save
        </div>
        <div>
          Here at utilities save, our aim is to provide you with maximum savings
          and best services your business utilities. We search across most of
          the UK suppliers both small and large and identify what is the best
          possible deal for your business.
          <span className='hidden md:block'>
            Our experts aim to find you the best possible deal be it electricity
            or gas. Using our industry contacts and experience we aim to provide
            you with no obligation services with highly competitive prices from
            our extensive list of suppliers. The unique feature whereby offer
            cheaper electric & gas bill along with unique energy reduction cost
            services.
          </span>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default WelcomeBoxes
