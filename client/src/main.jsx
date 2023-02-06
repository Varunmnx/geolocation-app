import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Login ,SignUp, Admin } from "./pages"
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import { configureStore } from '@reduxjs/toolkit'
import  authSlice  from './store/auth'
import { Provider } from 'react-redux'


export let store = configureStore({
       reducer:{
           auth: authSlice.reducer
       }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
        <Provider store={store}>
                <Routes>
                      <Route element ={<App />} path ="/"/>
                      <Route element ={<Login />} path ="/Login"/>
                      <Route element ={<SignUp />} path ="/Register"/>
                      <Route element ={<Admin />} path ="/Admin"/>
                </Routes>
        </Provider>
  </Router>,
)
