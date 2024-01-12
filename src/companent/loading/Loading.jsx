import React from 'react'

export default function Loading() {
  return (
  
        <div className="h-screen bg-[#282C33] flex items-center justify-center">
            <div className="relative">
    <div className="w-20 h-20 border-primary border-2 rounded-full"></div>
    <div className="w-20 h-20 border-white border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
</div>
             
</div>
   
  )
}
