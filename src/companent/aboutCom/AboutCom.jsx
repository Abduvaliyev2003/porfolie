import React from 'react'
import { Button , HeadTitle } from '../../ui'
import About1 from '../../asset/about1.png'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function AboutCom({tru}) {
  const {t} = useTranslation()
  const { about} = useSelector((state) => state.obj)
  const data =  Object.assign({},  about);
  return (
    <div data-aos="fade-right" className='container_content mx-auto  '>
        
        <div className='flex sm:items-start md:items-center sm:flex-col md:flex-row gap-[30px]'>
        <div  className='flex-1 flex flex-col items-start'>
            <p className='text-t text-gray mb-[30px]'>
             
             <UnsafeComponent html={data[0]?.data[0]?.text_Ru ?? data[0]?.data[0]?.text_Uz ?? data[0]?.data[0].text_En} /> 

            </p>
            {tru == 't' 
              ?   <Button text={t('read_more')} icon={'uil uil-angle-double-right'} link={'/about'} />
              : ''
            }
           
        </div>
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className='flex-1 flex justify-center sm:w-full md:w-0'>
            <img src={About1} alt="..." className=' object-cover' />
        </div>
        </div>
      
    </div>
  )
}
function UnsafeComponent({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
