import React from 'react'
import { Link } from 'react-router-dom'

export default function HeadTitle({title, link , long}) {
  return (
    <div data-aos="fade-right" className='container_content mx-auto  flex items-center gap-[16px] text-white mt-[40px]  mb-[30px]'>
        <Link to={link} className=' sm:text-[21px] font-medium md:text-li'>
            <span className='text-primary '>#</span>
            {title}
        </Link>
        <div className={`h-[1px] bg-primary ${long} sm:hidden md:flex  `}>

        </div>
    </div>
  )
}
