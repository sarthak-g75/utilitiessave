import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

const SiblingPage = ({ title, data, banner }) => {
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    setAnimationKey((key) => key + 1)
  }, [banner, title, data])

  return (
    <div
      key={animationKey}
      className='flex flex-col items-center gap-10 max-w-[100%] pb-10'
    >
      <section className='relative flex items-center justify-center gap-6 px-4 py-16 w-full aspect-[16/2] overflow-hidden h-full'>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className='text-2xl font-bold tracking-wide text-center text-white md:text-5xl'
        >
          {title}
        </motion.h1>
        <motion.img
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          src={banner || './electricityPage.jpg'}
          className='absolute top-0 left-0 object-cover w-full h-full -z-10 brightness-50'
        />
      </section>
      <section className='flex flex-col gap-10 max-w-[1080px] lg:py-20'>
        {data.map((d, index) => (
          <div
            className={`flex lg:max-w-[1080px] flex-col-reverse lg:flex-row justify-center gap-10 px-4 items-center max-w-[500px] ${
              index % 2 === 0 && 'lg:flex-row-reverse'
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 * index + 1 }}
              className='flex-[0.5] font-medium text-base lg:text-lg'
            >
              {d.para}
            </motion.div>
            <motion.img
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 * index + 1 }}
              className='object-cover w-full max-h-72 border rounded-xl flex-[0.5] '
              src={d.image}
              alt=''
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default SiblingPage
