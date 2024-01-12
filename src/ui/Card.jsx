import React from 'react'
import Button from './Button'

export default function Card({img,  title, live, gitLink, text, cate}) {
    const arr = ['HTML', 'SCSS', 'Flask']
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1000"  data-aos-easing="linear" className='border-[1px] border-solid border-gray w-[330px] flex-1'>
        
       {img 
       ? 
       <div className='border-b-[1px] border-solid border-b-gray  h-[201px]'>
            <img src={img} className='w-full h-full object-cover' />
        </div>
       : ''}
       <ul className='px-[8px] py-[8px] flex items-center gap-[8px]  border-b-[1px] border-solid border-b-gray'>
       
            <li  className='text-t text-gray '>
                {cate}
            </li>
      
       </ul>
       <div className='mx-[10px] my-[16px] flex flex-col gap-[16px]'>
       <h3 className='text-title text-white '>
      {title}
       </h3>
       <p className='text-t text-gray text-start w-full'>
        {text}
       </p>
       <div className='flex items-center gap-[16px] '>
         <Button text={'Live'} icon={'uil uil-angle-double-right'}  live={live}  />
         <Button text={'Cached '} icon={'uil uil-angle-double-right'}  live={gitLink}  />
       </div>
       </div>
       
    </div>
  )
}
