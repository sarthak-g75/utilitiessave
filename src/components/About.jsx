import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function About() {
  return (
    <section className='flex flex-col md:flex-row p-4 gap-8 max-w-[1080px]  h-min w-full mt-20 items-center'>
      <div className='flex flex-col items-center justify-center flex-1 gap-4 text-center md:items-start md:text-left'>
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          exit={{ opacity: 1, x: 0 }}
          className='px-3 py-1.5 text-lg font-semibold rounded-full text-primaryGreen bg-primaryGreen/20'
          viewport={{ once: true }}
        >
          About Us
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          exit={{ opacity: 1, x: 0 }}
          className='text-2xl font-bold md:hidden lg:block md:text-4xl text-tealGreen'
          viewport={{ once: true }}
        >
          Utilities Save: Maximizing Business Savings in the Energy Market
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          exit={{ opacity: 1, x: 0 }}
          className='text-lg'
          viewport={{ once: true }}
        >
          Empowering businesses since 2016. Maximum savings on gas and
          electricity. Competitive deals from UK top energy suppliers.
          No-obligation service. Unique energy reduction solutions. Join us for
          cost-effective energy management.
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            className='flex items-center gap-1 px-3 py-1.5 rounded-full text-primaryGreen bg-primaryGreen/10'
            to={'/about'}
          >
            Read More About Us <FiChevronRight />
          </Link>
        </motion.span>
      </div>
      <div className='flex-1'>
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          exit={{ opacity: 1, x: 0 }}
          src='./aboutus.jpg'
          alt=''
          className='rounded-md'
          viewport={{ once: true }}
        />
      </div>
    </section>
  )
}

export default About
