import { createSlice } from "@reduxjs/toolkit";


export  const GetApiRes = createSlice({
    name: "obj",
    initialState: {
        homeHead: [],
        about: [],
        bigProject: [],
        smallp:[],
        media: [],
        contact_t: [],
        my_fun: [],
        siklls: []
    },
    reducers: {
        getHomeHeadData:(state, action) => {
              state.homeHead = action.payload
        },
        getAboutData:(state, action) => {
            state.about = action.payload
        },
        getMyFunData:(state, action) => {
           state.my_fun = action.payload
        },
        getBigProData:(state, action) => {
          state.bigProject = action.payload
        },
        getSmallProData:(state, action) => {
            state.smallp = action.payload
        },
        getContactTData:(state, action) => {
            state.contact_t = action.payload
        },
        getContactMedData:(state, action) => {
            state.media = action.payload
        },
        getSkllisData:(state, action) => {
            state.siklls = action.payload
        }
    }
})

export const { getHomeHeadData,getAboutData,getBigProData, getContactMedData, getContactTData, getMyFunData,getSkllisData,getSmallProData } = GetApiRes.actions

export default GetApiRes.reducer