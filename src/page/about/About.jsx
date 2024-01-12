import React from 'react'
import { useTranslation } from 'react-i18next'
import AboutCom from '../../companent/aboutCom/AboutCom'
import { HeadTitle, PageHeadT } from '../../ui'
import MyFunFacts from './companent/my-fun-facts/MyFunFacts'
import SikllsA from './companent/skillsA/SikllsA'

export default function About() {
  const {t} = useTranslation()
  return (
    <div>
      
      <section>
        <PageHeadT title={t('about')} text={t('who_am_i')} />
        <AboutCom />
      </section>
      <section>
       <HeadTitle title={t('skill')} link={'#'} long={'w-[250px]'} />
        <SikllsA />
      </section>
      <section>
        <HeadTitle title={t('my_fun')} link={'#'} long={'w-[150px]'} />
        <MyFunFacts />
      </section>
    </div>
  )
}
