
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import axios from '../../../servise/axios'
export default function Form() {
  const {t} = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [loading , setLoading] = useState(false)
  const [postResult, setPostResult] = useState(null);
  const { isLoading: isPostingTutorial, mutate: postTutorial,   isError , error} = useMutation(
  
    async () => {
      return await axios.post(`/contact_post`, {
         name: name,
         email: email,
         title: title,
         message: message
      }, {
        headers: {
          'Accept-Language': localStorage.getItem('lang') || 'uz'
        }
      });
    },
    {
      onSuccess: (res) => {
      console.log(res)
       toast.success(t('succes'))
       setEmail('')
       setMessage('')
       setName('')
       setTitle('')
       setLoading(false)
      },
      onError: (err) => {
        
        toast.error(err.data.message)
        setLoading(false)
      },
    }
  

);

useEffect(() => {
  if (isPostingTutorial) setPostResult("posting...");
}, [isPostingTutorial]);

function postData() {
  try {
   
      postTutorial( );
      setLoading(true)
    
  } catch (err) {
    // setPostResult(fortmatResponse(err));
    setLoading(false)
    
  }
}
if(error) { 
  toast.error(error.message)
  setLoading(false)
}
  return (
    <form className='container_content mx-auto mt-[40px]'>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="floating_email" value={name} onChange={(e) => setName(e.target.value)} id="floating_email" className="block py-2.5 px-[8px] w-full   text-t text-white bg-transparent border-[1px] border-solid border-gray appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-t text-gray bg-[#282C33]  dark:bg-[#282C33] max-w-max max-h-max   peer-focus:bg-[#282C33] peer-focus:dark:bg-[#282C33]  ml-[10px] dark:text-gray duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
      {t('name')}
     </label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="email" name="floating_email" value={email} onChange={(e) => setEmail(e.target.value)} id="floating_email" className="block py-2.5 px-[8px] w-full   text-t text-white bg-transparent border-[1px] border-solid border-gray appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-t text-gray bg-[#282C33]  dark:bg-[#282C33] max-w-max max-h-max   peer-focus:bg-[#282C33] peer-focus:dark:bg-[#282C33]   ml-[10px] dark:text-gray duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
      {t('email')}
     </label>
  </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
      <input type="text" name="floating_email" value={title} onChange={(e) => setTitle(e.target.value)}  id="floating_email" className="block py-2.5 px-[8px]  w-full   text-t text-white bg-transparent border-[1px] border-solid border-gray appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" className="peer-focus:font-medium absolute text-t text-gray bg-[#282C33]  dark:bg-[#282C33] max-w-max max-h-max   peer-focus:bg-[#282C33] peer-focus:dark:bg-[#282C33]   ml-[10px] dark:text-gray duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        {t('title')}
      </label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <textarea rows='6' name="floating_email" value={message} onChange={(e) => setMessage(e.target.value)} id="floating_email" className="block py-2.5 px-[8px]  resize-none w-full   text-t text-white bg-transparent border-[1px] border-solid border-gray appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required > </textarea>
      <label for="floating_email" className="peer-focus:font-medium absolute text-t text-gray bg-[#282C33]  dark:bg-[#282C33] max-w-max max-h-max   peer-focus:bg-[#282C33] peer-focus:dark:bg-[#282C33]   ml-[10px] dark:text-gray duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        {t('messageC')}
      </label>
  </div>
  
  {
     loading ? 
     <button type="button"  className="text-white text-smt py-[10px] px-[30px] border-[1px] border-solid border-primary">
     {t('Loading')}
     </button>
     :  <button type="button" onClick={() => postData()} className="text-white text-smt py-[10px] px-[30px] border-[1px] border-solid border-primary">
     {t('send')}
   </button>
  }
 
</form>
  )
}
