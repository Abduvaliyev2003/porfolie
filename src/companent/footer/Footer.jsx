import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Union from '../../asset/Union.png'
export default function Footer() {
  const {t} = useTranslation()
  return (
    <div className='container_content mx-auto py-[30px] flex justify-between items-start'>
           <div>
           <Link to='/' className='text-l text-white flex items-center gap-[8px]'>
            <img src={Union} alt="..." className='w-[24px]' />
            Asadbek
           </Link>  
           
           </div>
           <div>
              <h3 className='text-title text-white'>
              {t('media')}
              </h3>
              <div className='flex items-center gap-[10px]'>
                <a href="https://github.com/Abduvaliyev2003" target="_blank">
                <i className="uil uil-github text-[24px] text-gray"></i>
                </a>
                <a href="https://www.linkedin.com/in/asadbek-abduvaliyev-25077324a/" target="_blank">
                <i className="uil uil-linkedin text-[24px] text-gray"></i>
                </a>
                <a href="https://www.facebook.com/ASAD03072003" target="_blank">
                <i className="uil uil-facebook-messenger text-[24px] text-gray"></i>
                </a>
              </div>
           </div>
    </div>
  )
}
