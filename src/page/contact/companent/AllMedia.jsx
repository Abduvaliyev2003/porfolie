import React from 'react'
import { useSelector } from 'react-redux';

export default function AllMedia() {
    const { media } = useSelector((state) => state.obj)
    const data =  Object.assign({},  media);
    const me =  data[0]?.data?.filter((el) => el.role_media == 'Me')

  return (
    <div className='container_content mx-auto'>
          <div className='w-[400px] flex flex-wrap  items-center  gap-[30px]'>
         {
               me?.map((el,i) => (
                <a key={i} href={`${el.media_link}`} className='flex items-center gap-[10px] text-gray text-t' target="_blank">
                <i className={`${el.media_icon} text-gray text-[22px]`}></i>
                {el.media_nik}
                </a>
              ))
         }
          
    </div>
    </div>
  
  )
}
