import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const Complaints = () => {
  useEffect(() => {}, [])

  return (
    <div className='flex flex-col items-center gap-10 max-w-[100%] pb-10'>
      <section className='relative flex items-center justify-center gap-6 px-4 py-16 w-full aspect-[16/2] overflow-hidden h-full'>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className='text-2xl font-bold tracking-wide text-center text-white uppercase md:text-5xl'
        >
          Complaint Procedure
        </motion.h1>
        <motion.img
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          src={'./complaint.jpg'}
          className='absolute top-0 left-0 object-cover w-full h-full -z-10 brightness-50'
        />
      </section>
      <section className='flex flex-col gap-10 max-w-[1080px] lg:py-20'>
        <div className='flex lg:max-w-[1080px] flex-col-reverse lg:flex-row justify-between gap-10 px-4 max-w-[500px'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className='text-base font-medium lg:text-lg'
          >
            <h1 className='text-xl font-extrabold'>Complaints Procedure :</h1>
            <br />
            <br />
            <p className='text-base'>
              Here at Utilities save we provide the best possible customers
              service and make sure the customers are always satisfied with our
              business service, still after delivering our best service if the
              customer feels there a complaint that needs to be initiated this
              should beemail or call on :
              <br /> <br />
              Please contact us via any of the following Utilities Save
              complaints services :
              <br /> <br />
              <span className='font-bold'>Call : </span> 0207 112 9116 will call
              you back to rectify your complaint and try to resolve it.
              <br /> <br />
              <span className='font-bold'>Email:</span>{' '}
              <a
                className='cursor-pointer text-primaryGreen'
                href='mailto:complaints@utilitiessave.co.uk'
              >
                complaints@utilitiessave.co.uk
              </a>
              <br /> <br />
              <p>
                When we receive a complaint from you, we initiate the following
                in order to resolve your complaint: We will consider your
                complaint by the close of business on the third working day
                after receiving your complaint and, if possible, provide a
                suitable verbal explanation within the time frame. lf we cannot
                resolve your complaint by the third business day we will, within
                five working days, provide you with a written acknowledgement of
                receipt of your complaint and will also endeavour to provide a
                resolution by then. lf we have been unable to resolve your
                complaint by this time, we will advise you when <br /> <br />
                We expect to be able to reach a conclusion, with the aim of
                providing a final resolution as soon as possible. lf a final
                response cannot be completed within eight weeks, we will mail
                you explaining why we are not in a position to provide a final
                response – and we will advise when we would be able to provide
                one. <br />
                <br /> We will still inform you that you have a choice to refer
                the complaint to the Ombudsman service if you are dissatisfied
                with the explanation for our delay.
              </p>
            </p>
            <br />
            <h2 className='text-lg font-bold underline text-tealGreen'>
              You may contact ombudsman any of the following ways :
            </h2>
            <br />
            <p className='text-base w-max'>
              <span className='font-bold '>Tel :</span>{' '}
              <span className='font-bold text-primaryGreen'>0207 112 9116</span>{' '}
            </p>
            <br />
            <p className=' w-max'>
              <span className='font-bold '>Post: </span>
              <span>
                Ombudsman Services: Energy, P.O. Box 966, Warrington, WA4 9DF
              </span>
            </p>
            <br />
            <p className=' w-max'>
              <span className='font-bold '>Email: </span>
              <span className='font-normal text-primaryGreen'>
                <a href='mailto:enquiry@ombudsman-services.org'>
                  enquiry@ombudsman-services.org
                </a>
              </span>
            </p>
            <br />
            <p className=' w-max'>
              <span className='font-bold '>Website: </span>
              <span className='font-normal text-primaryGreen'>
                <a
                  target='-blank'
                  href='https://www.ombudsman-services.org/'
                >
                  www.ombusdman-services.org
                </a>
              </span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Complaints
