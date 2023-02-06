import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const authSlice = createSlice({
    name: "auth",
    initialState: {
                   currentUser:null,
                   loginStatus : false,
                   wrongPassword :false
    },
    reducers: {

              loginUser(state,action ){
                        let data = action.payload
                        // console.log(data)
                        state.currentUser = data
                        state.loginStatus = true
                        state.wrongPassword = true
               },
              logoutUser(state ,action){
                         state.loginStatus = false
                         state.currentUser = null
              }
    }
  } 
)

export const actions = authSlice.actions

export default authSlice