import React from 'react'

import About from '../About'
import WelcomeBoxes from '../WelcomeBoxes'
import ServicesCards from '../ServicesCards'
import Landing from '../Landing'
import InifiniteScroll from '../InifiniteScroll'

const Home = () => {
  return (
    <main className='flex flex-col items-center'>
      {/* landing */}
      <Landing />
      {/* two boxes */}
      <WelcomeBoxes />
      {/* About Us */}
      <About />
      {/* 3 cards */}
      <ServicesCards />
      {/* cards */}
      <InifiniteScroll />
    </main>
  )
}

export default Home
