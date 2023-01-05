const userNameRegister = document.getElementById('user-register')
const passwordRegister = document.getElementById('password-register')
const confirmPasswordRegister = document.getElementById('confirm-password-register')
const btnRegister = document.getElementById('btnRegister')

import Tools from './helpers.js'

function avaliateRegister() {

console.log('user: ',userNameRegister.value, 'pass:',passwordRegister.value )

  if(userNameRegister.value && passwordRegister.value !=""){
      let users = JSON.parse(localStorage.getItem('users') || '[]')

      users.push(
          {
              userName: userNameRegister.value,
              password: passwordRegister.value
          }
      )

      //localStorage.setItem('users', JSON.stringify(users))
  }else{
    ///teste
  }
};

function confirmPassword(){
  if(passwordRegister.value == confirmPasswordRegister.value){
    Tools.setMatchingStyle(passwordRegister)
    Tools.setMatchingStyle(confirmPasswordRegister)
  }else{
    Tools.setErrorStyle(passwordRegister)
    Tools.setErrorStyle(confirmPasswordRegister)
    Tools.setErrorMessage()
  }

};

function validateRegister(){
  if(passwordRegister.value.match(/[0-9]/)){
    Tools.setMatchingStyle(passwordRegister)
  }else{
    Tools.setErrorStyle(passwordRegister)
    Tools.setErrorMessage()
  }

  if(passwordRegister.value.match(/[A-Z]/)){
    Tools.setMatchingStyle(passwordRegister)
  }else{
    Tools.setErrorStyle(passwordRegister)
    Tools.setErrorMessage()
  }

  if(passwordRegister.value.match(/[a-z]/)){
    Tools.setMatchingStyle(passwordRegister)
  }else{
    Tools.setErrorStyle(passwordRegister)
    Tools.setErrorMessage()
  }

  if(passwordRegister.value.match(/[!\@\#\$\%\_\^\*\>\<\,]/)){
    Tools.setMatchingStyle(passwordRegister)
  }else{
    Tools.setErrorStyle(passwordRegister)
    Tools.setErrorMessage()
  }

  if(passwordRegister.value.length < 8){
    Tools.setErrorStyle(passwordRegister)
    Tools.setErrorMessage()
  }else{
    Tools.setMatchingStyle(passwordRegister)

  }

}

function Register(){
  btnRegister.addEventListener('click',avaliateRegister,false)
};

const signIn = {
  Register,

};

export default signIn;