import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center px-6 py-12 lg:px-10 lg:py-20 bg-primaryGreen text-teal-950'>
      <div className='max-w-[1224px] w-full flex flex-col lg:flex-row justify-between gap-4 lg:gap-2 '>
        <div className='flex flex-col items-start gap-4 max-w-[400px]'>
          <img src='./logo.png' />
          <div className=''>
            Here at utilities save. our aim is to provide you with maximum
            savings and best services for your business utilities. we search
            across most of the uk suppliers both small and large and identify
            what is the best possible deal for your business.
          </div>
          <div className='font-medium'>
            Copyright © 2016-2023 utilitiessave.com, All Right Reserved This
            Website
          </div>
        </div>
        <div className='flex flex-col items-start w-max'>
          <div className='text-lg font-bold'>Find Us On Google</div>
          <ul>
            <li>Best Energy Prices UK</li>
            <li>Best Energy Prices UK</li>
            <li>Best Energy Prices UK</li>
            <li>Best Energy Prices UK</li>
            <li>Best Energy Prices UK</li>
          </ul>
        </div>
        <div className='flex flex-col items-start gap-2 w-max'>
          <div className='flex flex-col'>
            <div className='text-lg font-bold'>Contact Us</div>
            <ul>
              <li>
                <b>Post: </b>37 Elmbourne Road London, SW17 8JS.
              </li>
              <li>
                <b>Email: </b>info@utilitiessave.com
              </li>
              <li>
                <b>Phone: </b> 0207 1112 9116
              </li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <div className='text-lg font-bold'>Help</div>
            <ul>
              <li>Complaints Procedure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
