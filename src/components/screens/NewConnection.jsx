import React from 'react'
import { motion } from 'framer-motion'
const NewConnection = () => {
  return (
    <div className='flex flex-col items-center gap-10 max-w-[100%] pb-10'>
      <section className='relative flex items-center justify-center gap-6 md:mt-8 px-4 py-16 w-full aspect-[16/2] overflow-hidden h-full'>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className='text-2xl font-bold tracking-wide text-center text-white md:text-5xl'
        >
          New Connection
        </motion.h1>
        <motion.img
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          src={'./electricityPage.jpg'}
          className='absolute top-0 left-0 object-cover w-full h-full -z-10 brightness-50'
        />
      </section>
      <section className='flex flex-col gap-10 max-w-[1080px] lg:py-20'>
        <div className='flex lg:max-w-[1080px] flex-col-reverse lg:flex-row justify-between gap-10 px-4 items-center max-w-[500px'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className='flex-[0.5] font-medium text-base lg:text-lg'
          >
            <div className='flex flex-col '>
              <h1 className='font-bold'>
                Call us for new meter installation now
                <br />
              </h1>
              <p>
                Utilities Save have a meter installation team that can deal with
                all aspects of a new connection from arranging a new electricity
                or gas supply into a building, shop or any premises that does
                not currently have any electricity or gas such as a new built to
                working with commercial landlords who wish to alter the existing
                layout and add additional electricity and gas meters.
              </p>
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className='object-cover w-full max-h-72 border rounded-xl flex-[0.5] '
            src={'./gasScreen.png'}
            alt=''
          />
        </div>
      </section>
    </div>
  )
}

export default NewConnection
