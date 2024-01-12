import React from 'react'
import { useSelector } from 'react-redux';
import { Box } from '../../../../ui'

export default function SikllsA() {
  const { siklls} = useSelector((state) => state.obj)
  console.log(siklls)
  const data =  Object.assign({}, siklls);
  return (
   
         <div data-aos="fade-up" className='container_content mx-auto flex-1 flex items-start gap-[16px] flex-wrap '>
             { 
             data[0]?.data?.map((el, i) => (
              <Box key={i} title={el.title_Uz ?? el.title_Ru ?? el.title_En } text={el.lang} />
             ))
           }
        </div>
  
  )
}
