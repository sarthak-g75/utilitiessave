import React from 'react'
import { motion } from 'framer-motion'
const NewConnection = () => {
  return (
    <div className='flex flex-col items-center gap-10 max-w-[100%] pb-10'>
      <section className='relative flex items-center justify-center gap-6 px-4 py-16 w-full aspect-[16/2] overflow-hidden h-full'>
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
        <div className='flex lg:max-w-[1080px] flex-col-reverse lg:flex-row justify-between gap-10 px-4 max-w-[500px'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className='flex-[0.5] font-medium text-base lg:text-lg'
          >
            <h1 className='text-xl font-extrabold'>
              Call us for new meter installation now
            </h1>
            <br />
            <br />
            <p className='text-base'>
              Utilities Save have a meter installation team that can deal with
              all aspects of a new connection from arranging a new electricity
              or gas supply into a building, shop or any premises that does not
              currently have any electricity or gas such as a new built to
              working with commercial landlords who wish to alter the existing
              layout and add additional electricity and gas meters.
            </p>
            <br />
            <h2 className='text-lg font-bold text-tealGreen'>
              Standard meters can be installed in as little as 3 -4 working days
              for gas or 10-18 working days for electric, once supplier flows
              are received.
            </h2>
            <br />
            <h3 className='font-semibold underline text-tealGreen'>
              Here is what we can do for you:
            </h3>
            <br />
            <ul className='list-disc'>
              <li>
                Gas & electricity meter installations for commercial premises.
              </li>
              <li>Service upgrades/downgrades</li>
              <li>Alter or relocation of gas and electricity services.</li>
              <li>New gas and electric service connections</li>
            </ul>
            <br />
            <p className='text-base'>
              Our team will support on every level to get the new meter
              installation done hassle free.
            </p>
            <br />
            <p className='text-base'>
              Call us on{' '}
              <span className='text-primaryGreen'>0207 112 9116</span> <br />
              or email site.services@utilitiessave.co.uk
            </p>
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
