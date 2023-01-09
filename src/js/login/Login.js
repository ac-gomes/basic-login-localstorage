const userLogin = document.getElementById('user-login')
const passwordLogin = document.getElementById('password-login')
const buttonLogin = document.getElementById('btn-login-access')
const buttonnewUser= document.getElementById('create-account')
const showHidePwdLogin = document.getElementById('toggle-password-login')

import Functions from '../../utils/index.js'

function AvaliateLogin() {
  let users = []

  let validUser = {
       userName: '',
      password: '',
  }
  users = JSON.parse(localStorage.getItem('users'))
  users.forEach((item) => {
      if(userLogin.value == item.userName && passwordLogin.value == item.password){

        validUser = {
              user: item.userCad,
              password: item.senhaCad
          }

          console.log(validUser)
          window.location.href = "http://127.0.0.1:5500/index.html"
          // return validUser
      }else{

      }
  })
};

function Login(){
  buttonLogin.addEventListener('click',AvaliateLogin,false)
};

function showHidePasswordLogin(){
  showHidePwdLogin.addEventListener('click',Functions.togglePasswordLogin,false)
};

function newUser(){
  buttonnewUser.addEventListener('click',Functions.moveToNewUser,false)
}

Login()
showHidePasswordLogin()
newUser()

const accessControl = {
  Login,
  showHidePasswordLogin,
}

export default accessControl;