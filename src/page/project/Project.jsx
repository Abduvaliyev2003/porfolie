import React from 'react'
import { Card, HeadTitle, PageHeadT } from '../../ui'
import In  from '../../asset/ii.jpg'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
export default function Project() {
  const {  bigProject,  smallp} = useSelector((state) => state.obj)
  const {t} = useTranslation()
  const data =  Object.assign({},  bigProject);
  const smallPro =  Object.assign({},   smallp);
  return (
    <div>
     
       <section>
       <PageHeadT title={t('project')} text={t('list')} />
       <HeadTitle title={t('complete-apps')} link={'#'} long={'w-[250px]'} />
       <div className='container_content mx-auto mt-[40px] flex flex-wrap items-start  gap-[16px]'>
       {
          data[0]?.data?.map((el ) => (
            <Card  img={In}   title={el.title_Uz ?? el.title_Ru ?? el.title_En} cate={el.cate} live={'/project'} gitLink={'/project'} text={el.text_Uz ?? el.text_Ru ?? el.text_En} />
          ))
        }
        <Card img={In}  title={'ChertNodes'} live={'/project'} gitLink={'/project'} text={'Minecraft servers hosting '} />
        <Card img={In}  title={'ChertNodes'} live={'/project'} gitLink={'/project'} text={'Minecraft servers hosting '} />
        <Card img={In}  title={'ChertNodes'} live={'/project'} gitLink={'/project'} text={'Minecraft servers hosting '} />
        </div>
       </section>
       <section className='mb-[60px]'> 
       <HeadTitle title={t('small-projects')} link={'#'} long={'w-[250px]'} />
       <div className='container_content mx-auto flex flex-wrap  items-start  gap-[16px]'>
        {
          smallPro[0]?.data?.map((el , i) => (
            <Card   title={el.title_Uz ?? el.title_Ru ?? el.title_En} cate={el.cate} live={'/project'} gitLink={'/project'} text={el.text_Uz ?? el.text_Ru ?? el.text_En} />
          ))
        }
        <Card   title={'ChertNodes'} live={'/project'} gitLink={'/project'} text={'Minecraft servers hosting '} />
        <Card   title={'ChertNodes'} live={'/project'} gitLink={'/project'} text={'Minecraft servers hosting '} />
        <Card  title={'ChertNodes'} live={'/project'} gitLink={'/project'} text={'Minecraft servers hosting '} />
        </div>
       </section>
    </div>
  )
}
