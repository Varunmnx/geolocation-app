import React from 'react'
import "./styles/login.css"
import { useState } from 'react'
import { Input } from '../components'
import { useSelector,useDispatch } from 'react-redux'
import { actions } from '../store/auth'
import {validateEmailAndPassword} from "../helperfunctions/index.jsx"
// import { validatePassword,emailValidator } from '../helperfunctions'
const Login = () => {
  let [userdetails , setUserDetails] = useState({email:"",password:""})
  let [alert,setAlert] = useState('')
  let currentState = useSelector(state=>state.auth)
  let dispatch = useDispatch()
  console.log(currentState.currentUser)
  const loginFormSubmition = (e) =>{
                                  e.preventDefault()
                                  console.log(userdetails.email)
                                  console.log(userdetails.password)
                                  validateEmailAndPassword( userdetails.email, userdetails.password, dispatch, actions , setAlert ,userdetails)
                                
                           }

                         
//      const emailValidator =(email)=>{
//                               const mailformat =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//                               console.log("______________email___________")
//                               console.log(email)
//                               return mailformat.test(email)
   
//                         }
//      const validatePassword=(password)=> {
//                                 var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//                                 return passwordRegex.test(password);
//                         }
 
  return (
     <div className='form-container'>
            <h1>Login</h1>
            <div>
               <span style={{color:"red"}}>{ currentState.wrongPassword && " please check your credentials " }</span>
               <span style={{color:"red"}}>{ alert ? alert : "" }</span>
            </div>
            <form  onSubmit={loginFormSubmition}>
                     <Input Label="Email Id" placeholder="Enter your email id" onChange={e=>setUserDetails({...userdetails,email:e.target.value})} value={userdetails.email}/>
                     <Input Label="Password" placeholder="Enter your password" type='password' onChange={e=>setUserDetails({...userdetails,password:e.target.value})} value={userdetails.password}/>
                     <button type='submit'>Submit</button>
            </form>
     </div>
  )
}

export default Login