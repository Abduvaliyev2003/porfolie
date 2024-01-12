import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import Union from '../../asset/Union.png'
export default function Header() {
    const location = useLocation()
   const {t, i18n} = useTranslation()
    const [url, setUrl] = useState();
    const [langs, setLangs] = useState('')
    const [toggleLang, setToggleLang] = useState(false)
    useEffect(() => {
       setUrl(location.pathname)
    }, [location])
    function toggleLan(lan){
        setLangs(lan)
        setTimeout(() => {
            i18n.changeLanguage(lan)
          }, 3000)
        localStorage.setItem('lang', lan)
        window.location.reload()
        setToggleLang(false)
    }

    window.onscroll = function () {
        setToggleLang(false)
    }

  return (
    <nav className='container_content  mx-auto sm:hidden md:flex justify-between items-center  h-[80px]'>
        <div className='flex justify-between items-center w-full'>
        <Link to='/' className='text-l text-white flex items-center gap-[8px]'>
            <img src={Union} alt="..." className='w-[24px]' />
            Asadbek
        </Link>
        <ul className='flex items-center gap-[32px] relative'>
            <li>
                <Link  to='/' className={` ${url == '/' ? 'text-white' : 'text-gray'} text-t  hover:text-white transition-colors`}>
                    <span className='text-primary'>
                        #
                    </span>
                    {t('home')}
                </Link>
            </li>
            <li>
                <Link  to='/about' className={` ${url == '/about' ? 'text-white' : 'text-gray'} text-t  hover:text-white transition-colors`}>
                    <span className='text-primary'>
                        #
                    </span>
                    {t('about')}
                </Link>
            </li>
            <li>
                <Link  to='/project' className={` ${url == '/project' ? 'text-white' : 'text-gray'} text-t  hover:text-white transition-colors`}>
                    <span className='text-primary'>
                        #
                    </span>
                    {t('project')}
                </Link>
            </li>
            <li>
                <Link  to='/contact' className={` ${url == '/contact' ? 'text-white' : 'text-gray'} text-t  hover:text-white transition-colors`}>
                    <span className='text-primary'>
                        #
                    </span>
                   
                    {t('contact')}
                </Link>
            </li>
            <li className='relative'>
                <button onClick={() => setToggleLang(toggle => !toggle)} className='text-sml font-semibold flex items-center text-gray hover:text-white transition-colors '>
                   {langs ? langs : localStorage.getItem('lang') ?? 'En'}
                   <i className="uil uil-angle-down text-[22px]"></i>
                </button>
                <div className={`absolute bg-[#282C33] border-[1px] border-solid z-10 border-gray ${toggleLang ? 'flex' : 'hidden'} transition-all  flex-col gap-[7px] w-[70px] py-[5px] right-0 top-[50px] `}>
                    <button onClick={(e) => toggleLan(e.target.innerText)} className='text-t text-gray hover:text-white transition-colors'>
                        En
                    </button>
                    <button onClick={(e) => toggleLan(e.target.innerText)} className='text-t text-gray hover:text-white transition-colors'>
                        Uz
                    </button>
                    <button onClick={(e) => toggleLan(e.target.innerText)} className='text-t text-gray hover:text-white transition-colors'>
                        Ru
                    </button>
            </div>

            </li>
           
        </ul>
        </div>
       
    </nav>
  )
}
