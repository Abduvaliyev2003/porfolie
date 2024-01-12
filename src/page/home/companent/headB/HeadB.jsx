import React from 'react'
import { Button } from '../../../../ui'
import Img1 from '../../../../asset/img1.png'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
export default function HeadB() {
  const {homeHead} = useSelector((state) => state.obj)
  const data =  Object.assign({}, homeHead);
  const {t} = useTranslation()

  return (
    <div className='container_content mx-auto  md:h-screen sm:h-full  flex items-center sm:flex-col md:flex-row gap-[30px] mb-[30px]'>
      <div  className='flex-1 flex flex-col gap-[24px]'>
          <h1 className=' sm:text-2liMe  md:text-2li text-white'>
             {
              data[0]?.data[0]?.title_Uz ??  data[0]?.data[0]?.title_Ru ??  data[0]?.data[0]?.title_En
             }
          </h1>
          <p className='text-sm text-gray'> 
            {
              data[0]?.data[0]?.text_Uz ??  data[0]?.data[0]?.text_Ru ??  data[0]?.data[0]?.text_En
            }
          </p>
          <div className='flex   gap-[10px]'>
                <a href="https://github.com/Abduvaliyev2003" target="_blank">
                <i className="uil uil-github text-[34px] text-gray"></i>
                </a>
                <a href="https://www.linkedin.com/in/asadbek-abduvaliyev-25077324a/" target="_blank">
                <i className="uil uil-linkedin text-[34px] text-gray"></i>
                </a>
                <a href="https://www.facebook.com/ASAD03072003" target="_blank">
                <i className="uil uil-facebook-messenger text-[34px] text-gray"></i>
                </a>
              </div>
          <div>
            
          <Button text={t('contact_me')} icon={'uil uil-arrow-to-right'} />
          </div>
 
      </div>
        <div className='flex-1 '>
           <img src={`http://localhost:8000/storage/${data[0]?.data[0]?.image}` } alt='...' className='  h-full' />
        </div>
    </div>
  )
}
