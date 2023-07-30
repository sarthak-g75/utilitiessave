import React from 'react'

const ComponentPage = (props) => {
  return (
    <div>
      <section className='relative flex items-center justify-center w-full px-2 py-40 overflow-hidden text-white '>
        <img
          src='./electricityPage.jpg'
          className='absolute md:h-[450px] top-0 left-0 object-cover w-full h-full -z-10 brightness-75'
        />
        <h1 className='text-5xl font-bold tracking-widest text-center '>
          ELECTRICITY
        </h1>
      </section>
      <section className='flex justify-between px-52 items-center   h-[100vh] '>
        <p className='w-1/2 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non similique
          ratione, aut autem alias praesentium quae debitis beatae voluptas
          dicta possimus distinctio quisquam eaque in atque, maxime eveniet fuga
          eius obcaecati quis error molestiae. Optio consequuntur libero unde!
          Quis iste ratione autem nulla ducimus voluptatem quisquam porro
          nostrum temporibus cum, possimus, ipsam recusandae molestiae incidunt
          aperiam expedita natus ex exercitationem sunt? Sit, in. Ullam itaque
          necessitatibus iste, nesciunt quidem, autem sit odit dolores quae
          modi, eum ducimus rem voluptatem minus illum quasi. Dolore aperiam
          beatae excepturi? Dolore, vel corporis. Veritatis reiciendis aut cum,
          a enim sed voluptatem nobis alias repellat?
        </p>
        <img
          className='object-contain w-1/6'
          src='./electricity.png'
          alt=''
        />
      </section>
    </div>
  )
}

export default ComponentPage
