import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import { FiChevronRight } from 'react-icons/fi'

const QuoteForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section className='flex flex-col items-center justify-center w-full py-10 pb-16 mt-32 border-b border-tealGreen/10 bg-tealGreen'>
      <div className='flex flex-col items-center text-center lg:text-left lg:items-start px-5 gap-6 lg:gap-4 lg:flex-row justify-center lg:max-w-[1240px] w-full max-w-[700px]'>
        <div className='flex-[0.5] min-w-[350px] flex flex-col gap-6 text-lightGreen'>
          <h2 className='text-4xl font-bold '>Request a Quote</h2>
          <div className=''>
            Discover unbeatable savings for your business utilities at Utilities
            Save. Our experts find the best deals from a wide range of
            suppliers. Get a personalized quote now and reduce your electric and
            gas bills. Save big with us!
          </div>
        </div>
        <form
          className='relative z-20 flex flex-col items-center justify-center flex-1 w-full gap-4 p-4 bg-white shadow-2xl lg:-mt-32 border-tealGreen rounded-xl'
          style={{ boxShadow: '0 -8px 40px hsl(225, 6%, 13%, 0.15)' }}
          ref={form}
          onSubmit={sendEmail}
        >
          <div className='flex flex-col items-start justify-between w-full gap-2 rounded-lg text-tealGreen'>
            <div className='flex items-center gap-1 italic font-medium capitalize'>
              {' '}
              <FiChevronRight className='' /> Name
            </div>
            <input
              placeholder='Enter Your Name'
              className='w-full p-2 font-medium bg-transparent border-2 rounded-md outline-none border-tealGreen placeholder:text-tealGreen/50 focus:outline-none '
              type='text'
              name='user_name'
            />
          </div>
          <div className='flex flex-col items-start justify-between w-full gap-2 rounded-lg text-tealGreen'>
            <div className='flex items-center gap-1 italic font-medium capitalize'>
              {' '}
              <FiChevronRight className='' /> Email
            </div>
            <input
              placeholder='Enter Your Email'
              className='w-full p-2 font-medium bg-transparent border-2 rounded-md outline-none border-tealGreen placeholder:text-tealGreen/50 focus:outline-none '
              type='email'
              name='user_email'
            />
          </div>
          <div className='flex flex-col items-start justify-between w-full gap-2 rounded-lg text-tealGreen'>
            <div className='flex items-center gap-1 italic font-medium capitalize'>
              {' '}
              <FiChevronRight className='' /> Mobile
            </div>
            <input
              placeholder='Enter Your Mobile Number'
              className='w-full p-2 font-medium bg-transparent border-2 rounded-md outline-none border-tealGreen placeholder:text-tealGreen/50 focus:outline-none '
              type='tel'
              name='user_no'
            />
          </div>
          <div className='flex flex-col items-start justify-between w-full gap-2 rounded-lg text-tealGreen'>
            <div className='flex items-center gap-1 italic font-medium capitalize'>
              {' '}
              <FiChevronRight className='' /> Message
            </div>
            <textarea
              placeholder='Enter Your Message'
              className='w-full p-2 font-medium bg-transparent border-2 rounded-md outline-none border-tealGreen placeholder:text-tealGreen/50 focus:outline-none '
              name='message'
              rows={5}
            />
          </div>
          <input
            className='w-full px-6 py-4 mt-4 font-medium text-white transition-all rounded-md cursor-pointer bg-tealGreen hover:bg-tealGreen/90'
            type='submit'
            value='Send'
          />
        </form>
      </div>
    </section>
  )
}

export default QuoteForm
