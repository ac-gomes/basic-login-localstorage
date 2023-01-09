const userNameRegister = document.getElementById('user-register')
const passwordRegister = document.getElementById('password-register')
const confirmPasswordRegister = document.getElementById('confirm-password-register')
const btnRegister = document.getElementById('btnRegister')
const showHidePwd = document.getElementById('toggle-password')

import Functions from '../../utils/index.js'

function avaliateRegister() {
  if(userNameRegister.value && passwordRegister.value !=""){

    let users = JSON.parse(localStorage.getItem('users') || '[]')

    users.push(
        {
            userName: userNameRegister.value,
            password: passwordRegister.value
        }
    )

      localStorage.setItem('users', JSON.stringify(users))

      userNameRegister.value = ''
      passwordRegister.value = ''
      confirmPasswordRegister.value = ''


  }else{
    //impedir registro
  }
};

function confirmPassword(){
  let errorsList = document.getElementById('error-list')
  if(passwordRegister.value == confirmPasswordRegister.value){
    Functions.setMatchingStyle(passwordRegister)
    Functions.setMatchingStyle(confirmPasswordRegister)

    errorsList.style.display = 'none'
  }else{
    Functions.setErrorStyle(confirmPasswordRegister)
    Functions.setErrorStyle(passwordRegister)

    return
  }
};

function validateName(){
  let userNamelength = document.getElementById('userNameLen')
  if(userNameRegister.value.length < 3 ){
    Functions.setErrorStyle(userNameRegister)
    Functions.setErrorMessageStyle(userNamelength)
    return
  }else{
    Functions.setMatchingStyle(userNameRegister)
    Functions.setMachingMessageStyle(userNamelength)
  }
};

function validateRegister(){
  let passwordlength = document.getElementById('passwordlen')
  let passwordUppers = document.getElementById('passwordUpper')
  let passwordlowers = document.getElementById('passwordlower')
  let passwordSpecialSybol = document.getElementById('passwordSpecialSybols')
  let passwordNumbers = document.getElementById('passwordNumber')

  if(passwordRegister.value.match(/[0-9]/)){
    Functions.setMatchingStyle(passwordRegister)
    Functions.setMachingMessageStyle(passwordNumbers)
  }else{
    Functions.setErrorStyle(passwordRegister)
    Functions.setErrorMessageStyle(passwordNumbers)
    return
  }

  if(passwordRegister.value.match(/[A-Z]/)){
    Functions.setMatchingStyle(passwordRegister)
    Functions.setMachingMessageStyle(passwordUppers)
  }else{
    Functions.setErrorStyle(passwordRegister)
     Functions.setErrorMessageStyle(passwordUppers)
    return
  }

  if(passwordRegister.value.match(/[a-z]/)){
    Functions.setMatchingStyle(passwordRegister)
    Functions.setMachingMessageStyle(passwordlowers)
  }else{
    Functions.setErrorStyle(passwordRegister)
    Functions.setErrorMessageStyle(passwordlowers)
    return
  }

  if(passwordRegister.value.match(/[!\@\#\$\%\_\^\*\>\<\,]/)){
    Functions.setMatchingStyle(passwordRegister)
    Functions.setMachingMessageStyle(passwordSpecialSybol)
  }else{
    Functions.setErrorStyle(passwordRegister)
    Functions.setErrorMessageStyle(passwordSpecialSybol)
    return
  }

  if(passwordRegister.value.length < 8){
    Functions.setErrorStyle(passwordRegister)
    Functions.setErrorMessageStyle(passwordlength)
    return
  }else{
    Functions.setMatchingStyle(passwordRegister)
    Functions.setMachingMessageStyle(passwordlength)
  }
}

function validateNameForm(){
  userNameRegister.addEventListener('keyup',validateName,false)
}

function validatePwdForm(){
  passwordRegister.addEventListener('keyup',validateRegister,false)
}

function validateConfirmPwdForm(){
  confirmPasswordRegister.addEventListener('keyup',confirmPassword,false)
}

function Register(){
  btnRegister.addEventListener('click',avaliateRegister,false)
};

function showHidePassword(){
  showHidePwd.addEventListener('click',Functions.togglePassword,false)
}

const signIn = {
  Register,
  validateRegister,
  validatePwdForm,
  validateNameForm,
  validateConfirmPwdForm,
  showHidePassword,
};

export default signIn;