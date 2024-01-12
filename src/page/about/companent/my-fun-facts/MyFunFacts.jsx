import React from 'react'

import { useSelector } from 'react-redux'
import Siklls2 from '../../../../asset/aboutSk.png'
export default function MyFunFacts() {

  const {my_fun } = useSelector((state) => state.obj)
  const data =  Object.assign({}, my_fun);

  return (
    <div  className='container_content mx-auto flex sm:items-center md:items-start sm:flex-col md:flex-row gap-[30px]'>
        <ul data-aos="fade-right" className='flex-1 flex flex-wrap gap-[16px]'>
          {
            data[0]?.data?.map((el, i) => (
              <li key={i} className=' border-[1px] border-solid max-w-max border-gray p-[8px] text-t text-gray'>
              {el.text_Uz ??  el.text_Ru ?? el.text_En}
            </li>
            ))
          }
            
          
        </ul>
        <div data-aos="fade-up" className='flex-1 flex items-center justify-center'>
            <img src={Siklls2} alt="..." className='h-[169px]' />
        </div>
    </div>
  )
}
