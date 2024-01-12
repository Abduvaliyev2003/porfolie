import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function ContactCom() {
  const {t} = useTranslation()
  const { media,   contact_t } = useSelector((state) => state.obj)
  const data =  Object.assign({},  media);
  const g =  data[0]?.data?.filter((el) => el.role_media == 'g')
  const dataT = Object.assign({},  contact_t);
  return (
    <div className=' container_content mx-auto flex items-start sm:flex-col md:flex-row gap-[30px]'>
        <div className='flex-1'>
             <p className='text-smt text-gray'> 
             {dataT[0]?.data[0].text_Uz ?? dataT[0]?.data[0].text_Ru ?? dataT[0]?.data[0].text_En }
             </p>
        </div>
        <div className='flex-1 flex justify-end'>
        <div className='p-[16px]  border-[1px] border-solid max-w-max border-gray flex flex-col gap-[10px] '>
            <h3 className='text-sml text-white  leading-[20px] font-semibold'>
              {t('message')}
            </h3>
            {
               g?.map((el, i) => (
                <a key={i} href={`${el.link}`} className='flex items-center gap-[10px] text-gray text-t' target="_blank">
                <img src={`http://localhost:8000/storage/${el.icon}`} alt="..." className='w-[30px]' />
                {el.nik}
                </a>
              ))
            }
            
        </div>
        </div>
      
    </div>
  )
}
