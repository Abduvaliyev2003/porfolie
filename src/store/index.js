import { configureStore } from '@reduxjs/toolkit'
import objectApi from '../slice/GetApiRes'

export const store = configureStore({
    reducer: {
      obj: objectApi,
    },
    devTools : process.env.NODE_ENV !== 'production'
  })


 