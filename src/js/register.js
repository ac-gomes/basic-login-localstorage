const userNameRegister = document.getElementById('user-register')
const passwordRegister = document.getElementById('password-register')
const confirmPasswordRegister = document.getElementById('confirm-password-register')
const btnRegister = document.getElementById('btnRegister')

import Tools from './helpers.js'

function avaliateRegister() {
  validateRegister()

  // if(userNameRegister.value && passwordRegister.value !=""){
  //   validateRegister()
  //   let users = JSON.parse(localStorage.getItem('users') || '[]')

  //   users.push(
  //       {
  //           userName: userNameRegister.value,
  //           password: passwordRegister.value
  //       }
  //   )

  //     //localStorage.setItem('users', JSON.stringify(users))
  // }else{
  //   ///teste
  // }
};

function confirmPassword(){
  if(passwordRegister.value == confirmPasswordRegister.value){
    Tools.setMatchingStyle(passwordRegister)
    Tools.setMatchingStyle(confirmPasswordRegister)
  }else{
    Tools.setErrorStyle(passwordRegister)
    Tools.setErrorStyle(confirmPasswordRegister)
    Tools.setErrorMessage()
    return
  }
};

function validateRegister(){
  let TestTamanho = document.getElementById('passwordlen')
  if(passwordRegister.value.match(/[0-9]/)){
    Tools.setMatchingStyle(passwordRegister)
    Tools.setMachingMessageStyle(TestTamanho)
    console.log('foi ativado tam 8 ')
  }else{
    Tools.setErrorStyle(passwordRegister)
    Tools.setErrorMessageStyle(TestTamanho)
    console.log('foi ativado tam 8 ')
    return
  }

  if(passwordRegister.value.match(/[A-Z]/)){
    Tools.setMatchingStyle(passwordRegister)
  }else{
    Tools.setErrorStyle(passwordRegister)
    Tools.setErrorMessage()
    return
  }

  if(passwordRegister.value.match(/[a-z]/)){
    Tools.setMatchingStyle(passwordRegister)
  }else{
    Tools.setErrorStyle(passwordRegister)
    Tools.setErrorMessage()
    return
  }

  if(passwordRegister.value.match(/[!\@\#\$\%\_\^\*\>\<\,]/)){
    Tools.setMatchingStyle(passwordRegister)
  }else{
    Tools.setErrorStyle(passwordRegister)
    Tools.setErrorMessage()
    return
  }

  if(passwordRegister.value.length < 8){
    Tools.setErrorStyle(passwordRegister)
    Tools.setErrorMessage()
    return
  }else{
    Tools.setMatchingStyle(passwordRegister)
  }
}

function Register(){
  btnRegister.addEventListener('click',avaliateRegister,false)
};

const signIn = {
  Register,
  validateRegister,

};

export default signIn;