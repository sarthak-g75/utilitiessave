import React from 'react'

const MainComponents = ({ children }) => {
  return (
    <div className='flex flex-col items-center gap-10 max-w-[100%] pb-10'>
      {children}
    </div>
  )
}

const Banner = ({ children }) => {
  return (
    <section className='relative flex items-center justify-center gap-6 px-2 w-full aspect-[16/2] overflow-hidden h-full'>
      {children}
    </section>
  )
}

const SectionComponent = ({ children }) => {
  return (
    <section className='flex max-w-[1080px] justify-center gap-10 px-4 items-center'>
      {children}
    </section>
  )
}

export { MainComponents, Banner, SectionComponent }
