import React from 'react'

export default function Box({title, text}) {
  return (
    <div className='border-[1px] border-solid border-gray w-[235px] flex-1'>
      
        <h3 className='text-sml text-white leading-[20px] font-semibold p-[10px] border-b-[1px] border-solid border-gray'>
             {title}
        </h3>
        <p className='text-t text-gray p-[10px] text-ellipsis'>
          {text}
        </p>
    </div>
  )
}
