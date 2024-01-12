import React from 'react'

import { Box , HeadTitle} from '../../../../ui'
import SikllsI from '../../../../asset/skillis.png'
import { useSelector } from 'react-redux'
export default function Sikllis() {
  const { siklls} = useSelector((state) => state.obj)
  console.log(siklls)
  const data =  Object.assign({}, siklls);
  return (
    <div className='container_content mx-auto    '>
       
       <div className=' flex items-center sm:flex-col md:flex-row   gap-[30px]'>
        <div data-aos="fade-right" className='flex-1'>
           <img src={SikllsI} alt="..." />
        </div>
        <div data-aos="fade-left" className='flex-1 flex items-start gap-[16px] flex-wrap '>
          { 
             data[0]?.data?.map((el, i) => (
              <Box key={i} title={el.title_Uz ?? el.title_Ru ?? el.title_En } text={el.lang} />
             ))
           }
            
            
        </div>
       </div>
    </div>
  )
}
