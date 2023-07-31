import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
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
    <section className='flex flex-col items-center justify-center w-full py-20 bg-tealGreen'>
      <h2 className='px-5 py-10 text-4xl font-bold text-white'>
        Request a Quote
      </h2>
      <form
        className='flex flex-col items-center justify-center w-full gap-10 py-10 px-4 max-w-[1440px]  text-white '
        ref={form}
        onSubmit={sendEmail}
      >
        <div className='flex items-center justify-between w-full'>
          <input
            placeholder='Enter Your Name'
            className='w-full px-2 bg-transparent border-2 rounded-md h-14 '
            type='text'
            name='user_name'
          />
        </div>
        <div className='flex items-center justify-between w-full '>
          <input
            placeholder='Enter Your Email'
            className='w-full px-2 bg-transparent border-2 rounded-md h-14'
            type='email'
            name='user_email'
          />
        </div>
        <div className='flex items-center justify-between w-full '>
          <input
            placeholder='Enter Your Mobile Number'
            className='w-full px-2 bg-transparent border-2 rounded-md h-14'
            type='tel'
            name='user_no'
          />
        </div>
        <div className='flex items-center justify-between w-full '>
          <textarea
            placeholder='Enter Your Message'
            className='w-full h-24 p-2 bg-transparent border-2 rounded-md'
            name='message'
          />
        </div>
        <input
          className='px-6 py-2 font-medium text-center transition-all border-2 cursor-pointer bg-white/50 md:border-2 md:py-4 h-max md:px-12 hover:bg-white hover:text-tealGreen md:text-xl'
          type='submit'
          value='Send'
        />
      </form>
    </section>
  )
}

export default QuoteForm
