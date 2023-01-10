const userLogin = document.getElementById('user-login')
const passwordLogin = document.getElementById('password-login')
const buttonLogin = document.getElementById('btn-login-access')
const buttonnewUser= document.getElementById('create-account')
const showHidePwdLogin = document.getElementById('toggle-password-login')

import Functions from '../../utils/index.js'
import userAccessControl from '../currentUser.js'
import moveToMainPage from '../routes/main-page.js'

function evaluateLogin() {
  let users = []

  let validUser = {
       userName: '',
      password: '',
  }
  users = JSON.parse(localStorage.getItem('users'))
  users.forEach((item) => {
    if(userLogin.value.toUpperCase() == item.userName.toUpperCase() && passwordLogin.value == item.password){

      validUser = {
        user: item.userName,
        password: item.password
      }
      userLogin.value = ''
      passwordLogin.value = ''

    }
  })

  return validUser
};

function userControl(){
  let currentLogged = evaluateLogin()
  const loggedUser = userAccessControl.currentLoggedUser(currentLogged)
  console.log(loggedUser)
  if(loggedUser.isLogged){
    moveToMainPage()
  }
};

function Login(){
  buttonLogin.addEventListener('click',userControl,false)
};

function showHidePasswordLogin(){
  showHidePwdLogin.addEventListener('click',Functions.togglePasswordLogin,false)
};

function newUser(){
  buttonnewUser.addEventListener('click',Functions.moveToNewUser,false)
};

Login();
showHidePasswordLogin();
newUser();