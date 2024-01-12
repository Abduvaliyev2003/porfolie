import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import Union from '../../asset/Union.png'
export default function MediaHeader({useOutsideClick}) {
    const location = useLocation()
    const {t, i18n} = useTranslation()
     const [url, setUrl] = useState();
     const [langs, setLangs] = useState('')
     const [toggleLang, setToggleLang] = useState(false)
     const [nav, setNav] = useState(false);
     const handleClickOutside = () => {
        setNav(false)
      };
     const ref = useOutsideClick(handleClickOutside);
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
    
     
  return (
    <div className='md:hidden sm:flex  flex-col w-full px-[15px] '>
       <div className='flex  z-10  border-b-[1px] border-solid border-b-gray  items-center justify-between h-[70px] '>
       <Link to='/' className='text-l text-white flex items-center gap-[8px]'>
            <img src={Union} alt="..." className='w-[24px]' />
            Asadbek
        </Link>
        <div>
            <div className='flex items-center gap-[10px]'>
                <div>
                <button  onClick={() => setToggleLang(toggle => !toggle)} className='text-sml font-semibold flex items-center text-gray hover:text-white transition-colors '>
                     <i className="uil uil-globe text-[23px] text-gray"></i>
                </button>
                <div className={` absolute bg-[#282C33] border-[1px] border-solid border-gray ${toggleLang ? 'flex' : 'hidden'} transition-all  flex-col gap-[5px] w-[70px] py-[5px] right-0 top-[50px]`}>
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
                </div>
                <button ref={ref} onClick={() => setNav(nav => !nav)}>
            <i className="uil uil-bars text-[27px] text-gray"></i>
            </button>
            </div>
            
        </div>
       </div>
       <nav className={`w-[400px]  fixed top-[70px] ${nav ? 'left-0' : '-left-[100%]'} py-[30px] transition-multiple duration-300 ease-linear z-10 bg-[#282C33] bottom-0 h-screen`}>
       <ul className='flex  flex-col px-[15px] gap-[32px] relative'>
            <li>
                <Link  to='/' className={` ${url == '/' ? 'text-white' : 'text-gray'} text-medi  hover:text-white transition-colors`}>
                    <span className='text-primary'>
                        #
                    </span>
                    {t('home')}
                </Link>
            </li>
            <li>
                <Link  to='/about' className={` ${url == '/about' ? 'text-white' : 'text-gray'}  text-medi  hover:text-white transition-colors`}>
                    <span className='text-primary'>
                        #
                    </span>
                    {t('about')}
                </Link>
            </li>
            <li>
                <Link  to='/project' className={` ${url == '/project' ? 'text-white' : 'text-gray'}  text-medi  hover:text-white transition-colors`}>
                    <span className='text-primary'>
                        #
                    </span>
                    {t('project')}
                </Link>
            </li>
            <li>
                <Link  to='/contact' className={` ${url == '/contact' ? 'text-white' : 'text-gray'}  text-medi  hover:text-white transition-colors`}>
                    <span className='text-primary'>
                        #
                    </span>
                   
                    {t('contact')}
                </Link>
            </li>
           
        </ul>
       </nav>
    </div>
  )
}
