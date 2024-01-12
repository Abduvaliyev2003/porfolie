import React from 'react'
import { useTranslation } from 'react-i18next'
import ContactCom from '../../companent/comContact/ContactCom'
import { HeadTitle, PageHeadT } from '../../ui'
import AllMedia from './companent/AllMedia'
import Form from './companent/Form'

export default function Contact() {
  const {t} = useTranslation()
  return (
    <div>
      <div className='mb-[40px]'>
      <PageHeadT title={t('contact')} text={t('list')} />
      </div>
         
      <div>
      <ContactCom />
      </div> 
      <div>
        <Form />
      </div>
      <div>
      <HeadTitle title={t('all-media')} link={'#'} long={'w-[250px]'} />
      <AllMedia />
      </div>

    </div>
  )
}
