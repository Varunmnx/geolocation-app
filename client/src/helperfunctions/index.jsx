export const emailValidator =(email)=>{
    const mailformat =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return mailformat.test(email)

}
export const validatePassword=(password)=> {
      var passwordRegex = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/;
      return passwordRegex.test(password);
}


export const validateEmailAndPassword =( email, password , dispatch , actions, setAlert, userdetails) =>{
                                 console.log("____email______")
                                 console.log(email)
                                 console.log("______password______")
                                 console.log(password)
                                 if (emailValidator(email)&&validatePassword(password)){
                                        console.log("both correct")
                                        setAlert("You are successfully authenticated")
                                        dispatch(actions.loginUser({...userdetails}))
                                } else if(!emailValidator(email)&& !validatePassword(password)){
                                        console.log(" wrong email and wrong pass")
                                        setAlert("please use a different email")
                                }else if( emailValidator(email) && !validatePassword(password)){
                                        console.log("choose a different pass")  
                                        setAlert("please use a different email")
                                } else if( !emailValidator(email) && validatePassword(password)){
                                        setAlert("please use a different a email ")
                                        console.log("email and password are wrong")
                                }
}
