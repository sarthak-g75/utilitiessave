import React from 'react'
import { MdFileDownloadDone, MdDangerous } from 'react-icons/md'

const Alert = (props) => {
  return (
    <div
      className={`sticky top-10 z-30  bg-${props.color}-100 border-t-4 $ border-${props.color}-500 rounded-b text-teal-900 px-4 py-3 shadow-md`}
      role='alert'
    >
      <div class='flex gap-5'>
        {props.color === 'red' ? (
          <MdDangerous
            size='50px'
            color='DarkRed'
          />
        ) : (
          <MdFileDownloadDone
            size='50px'
            color='green'
          />
        )}
        <div>
          <p class='font-bold'>{props.message}</p>
          <p class='text-sm'>{props.submessage}</p>
        </div>
      </div>
    </div>
  )
}

export default Alert
