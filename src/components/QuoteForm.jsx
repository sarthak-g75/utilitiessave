import React from 'react'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { FiChevronRight } from 'react-icons/fi'
import Alert from './Alert'

const QuoteForm = () => {
  const form = useRef()
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [disable, setdisable] = useState(false)
  const [mobile, setmobile] = useState()
  const [message, setmessage] = useState()
  const [noti, setnoti] = useState(false)
  const [subject, setsubject] = useState()
  const [status, setstatus] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault()
    setdisable(true)
    emailjs
      .sendForm(
        'service_b0kwv6d',
        'template_ekiwfja',
        form.current,
        'YoGsS23d0t7-aL5CW'
      )
      .then(
        (result) => {
          console.log(result.text)
          setname('')
          setmobile('')
          setemail('')
          setmessage('')
          setsubject('')
          setnoti(true)
          setstatus(true)
          setdisable(false)
          setTimeout(() => {
            setnoti(false)
            setstatus(false)
          }, 3000)
        },
        (error) => {
          console.log(error.text)
          setTimeout(() => {
            setnoti(false)
            setstatus(false)
          }, 3000)
        }
      )
  }
  //  {`${noti ? 'sticky top-0' : 'hidden'} `}
  return (
    <section>
      <div className={`${noti ? 'sticky top-0 z-30' : 'hidden'} `}>
        {status ? (
          <Alert
            color='green'
            message='The Message has been sent successfully'
          />
        ) : (
          <Alert
            color='red'
            message='Failed to send the message'
            submessage='Please try to contact us through other emails'
          />
        )}
      </div>
      <section className='flex flex-col items-center justify-center w-full py-10 pb-16 mt-0 border-b lg:mt-32 border-tealGreen/10 bg-tealGreen'>
        <div className='flex flex-col items-center text-center lg:text-left lg:items-start px-5  lg:gap-10 lg:flex-row justify-center lg:max-w-[1240px] w-full max-w-[700px]'>
          <div className='flex-[0.5] min-w-[350px] flex flex-col gap-4 text-lightGreen'>
            <h2 className='text-4xl font-bold text-white'>Request a Quote</h2>
            <div className=''>
              Discover unbeatable savings for your business utilities at
              Utilities Save. Our experts find the best deals from a wide range
              of suppliers. Get a personalized quote now and reduce your
              electric and gas bills. Save big with us!
            </div>
          </div>
          <form
            id='quote'
            className='relative z-20 flex flex-col items-center justify-center flex-1 w-full gap-4 p-4 bg-white shadow-2xl lg:-mt-32 border-tealGreen rounded-xl max-w-[700px]'
            style={{ boxShadow: '0 -8px 40px hsl(225, 6%, 13%, 0.15)' }}
            ref={form}
            onSubmit={sendEmail}
          >
            <div className='flex flex-col-reverse items-start justify-between w-full gap-2 rounded-lg text-tealGreen'>
              <input
                placeholder='Enter Your Name'
                className='w-full p-2 font-medium bg-transparent border-2 rounded-md outline-none border-tealGreen placeholder:text-tealGreen/50 focus:outline-none peer/input'
                type='text'
                value={name}
                onChange={(e) => {
                  setname(e.target.value)
                }}
                name='user_name'
              />
              <div className='flex items-center gap-1 italic font-medium capitalize transition-all peer-focus/input:translate-x-2 peer-focus/input:text-primaryGreen'>
                <FiChevronRight className='' /> Name
              </div>
            </div>
            <div className='flex flex-col-reverse items-start justify-between w-full gap-2 rounded-lg text-tealGreen'>
              <input
                placeholder='Enter Your Email'
                className='w-full p-2 font-medium bg-transparent border-2 rounded-md outline-none border-tealGreen placeholder:text-tealGreen/50 focus:outline-none peer/input '
                type='email'
                value={email}
                onChange={(e) => {
                  setemail(e.target.value)
                }}
                name='user_email'
              />
              <div className='flex items-center gap-1 italic font-medium capitalize transition-all peer-focus/input:translate-x-2 peer-focus/input:text-primaryGreen'>
                <FiChevronRight className='' /> Email
              </div>
            </div>
            <div className='flex flex-col-reverse items-start justify-between w-full gap-2 rounded-lg text-tealGreen'>
              <input
                placeholder='Enter Your Mobile Number'
                className='w-full p-2 font-medium bg-transparent border-2 rounded-md outline-none border-tealGreen placeholder:text-tealGreen/50 focus:outline-none peer/input '
                type='tel'
                value={mobile}
                onChange={(e) => {
                  setmobile(e.target.value)
                }}
                name='user_no'
              />
              <div className='flex items-center gap-1 italic font-medium capitalize transition-all peer-focus/input:translate-x-2 peer-focus/input:text-primaryGreen'>
                <FiChevronRight className='' /> Mobile
              </div>
            </div>
            <div className='flex flex-col-reverse items-start justify-between w-full gap-2 rounded-lg text-tealGreen'>
              <input
                placeholder='Enter the Subject of your Mail'
                className='w-full p-2 font-medium bg-transparent border-2 rounded-md outline-none border-tealGreen placeholder:text-tealGreen/50 focus:outline-none peer/input '
                type='text'
                value={subject}
                onChange={(e) => {
                  setsubject(e.target.value)
                }}
                name='subject'
              />
              <div className='flex items-center gap-1 italic font-medium capitalize transition-all peer-focus/input:translate-x-2 peer-focus/input:text-primaryGreen'>
                <FiChevronRight className='' /> Subject
              </div>
            </div>
            <div className='flex flex-col-reverse items-start justify-between w-full gap-2 rounded-lg text-tealGreen'>
              <textarea
                placeholder='Enter Your Message'
                className='w-full p-2 font-medium bg-transparent border-2 rounded-md outline-none border-tealGreen placeholder:text-tealGreen/50 focus:outline-none peer/input '
                name='message'
                value={message}
                onChange={(e) => {
                  setmessage(e.target.value)
                }}
                rows={5}
              />
              <div className='flex items-center gap-1 italic font-medium capitalize transition-all peer-focus/input:translate-x-2 peer-focus/input:text-primaryGreen'>
                <FiChevronRight className='' /> Message
              </div>
            </div>
            <input
              className={` w-full px-6 py-4 mt-4 font-medium  transition-all rounded-md text-white  ${
                disable
                  ? ' bg-gray-500 cursor-not-allowed'
                  : ' cursor-pointer bg-tealGreen hover:bg-tealGreen/90'
              } `}
              type='submit'
              value={disable ? 'Sending...' : 'Send'}
              disabled={disable}
            />
          </form>
        </div>
      </section>
    </section>
  )
}

export default QuoteForm
