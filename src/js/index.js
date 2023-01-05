const userNameRegister = document.getElementById('user-register')
const passwordRegister = document.getElementById('password-register')
const confirmPasswordRegister = document.getElementById('confirm-password-register')

import signIn from './register.js'
import messageList from '../data/messageError.js'

// signIn.Register()
function getmsg(messageList,type){
  console.log(messageList[type])
}
getmsg(messageList,'userNameLen')
