import React from 'react'

export default function PageHeadT({title, text}) {
  return (
    <div className='container_content mx-auto mt-[30px]'>
        <h1 className='text-2li text-white'>
     <span className='text-primary'>/</span>{title}
    </h1>
    <p className='text-t text-white mt-[14px]'>
        {text}
    </p>
    </div>
    
  )
}
