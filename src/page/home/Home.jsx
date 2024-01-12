import React from 'react'

import HeadB from './companent/headB/HeadB'
import { Card, HeadTitle } from '../../ui'
import In  from '../../asset/ii.jpg'
import HomeAbout from '../../companent/aboutCom/AboutCom'
import Sikllis from './companent/siklls/Sikllis'
import ContactCom from '../../companent/comContact/ContactCom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
export default function Home() {
  const {t} = useTranslation()
  const {  bigProject} = useSelector((state) => state.obj)

  const data =  Object.assign({},  bigProject);
  return (
    <div>
      <section>
        <HeadB />
        
      </section>
      <HeadTitle title={t('project')} link={'/project'} long={'w-[100px]'}  />
      <div  className='container_content mx-auto  '>
      
      <div className=' flex flex-wrap items-start  gap-[16px]'>
        {
          data[0]?.data?.map((el ) => (
            <Card  img={In}  title={el.title_Uz ?? el.title_Ru} cate={el.cate} live={'/project'} gitLink={'/project'} text={el.text_Uz ?? el.text_Ru ?? el.text_En} />
          ))
        }
     
      <Card img={In}  title={'ChertNodes'} live={'/project'} gitLink={'/project'} text={'Minecraft servers hosting '} />
      <Card img={In}  title={'ChertNodes'} live={'/project'} gitLink={'/project'} text={'Minecraft servers hosting '} />
      <Card img={In}  title={'ChertNodes'} live={'/project'} gitLink={'/project'} text={'Minecraft servers hosting '} />
      </div>
      </div>
      <section >
      <HeadTitle title={t('skill')} link={'/about'}  long={'w-[200px]'} />
        <Sikllis />
      </section>
      <section>
        
      <HeadTitle title={t('about')} link={'/about'} long={'w-[250px]'} />
        <HomeAbout tru={'t'} />
      </section>
      <section >
        <HeadTitle title={t('contact')} link={'/contact'} long={'w-[400px]'} />
        <ContactCom />
      </section>
      
    </div>
  )
}
