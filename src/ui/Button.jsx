import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({text, icon ,link}) {
  return (
    <Link to={link} className='text-sml inline-block  text-gray border-[1px] border-solid border-gray hover:text-white px-[16px] py-[8px]  hover:bg-[#C778DD33]'>
      <span className='flex items-center gap-[10px]'>
      {text}
         <i className={icon}></i>
      </span>
        
    </Link>
  )
}
