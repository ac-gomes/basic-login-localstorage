const userLogin = document.getElementById('user-login')
const passwordLogin = document.getElementById('password-login')
const buttonLogin = document.getElementById('btn-login-access')
const showHidePwdLogin = document.getElementById('toggle-password-login')
const errorMsg =document.getElementById('msg-error-id')

import Functions from '../../utils/index.js'
import userAccessControl from '../currentUser.js'
import moveToMainPage from '../routes/main-page.js'
import encryptSha256 from '../encrypt/index.js'
import Tools from '../helpers.js'

 function evaluateLogin() {
  let users = []

  let validUser = {
       userName: '',
      password: '',
  }
  users = JSON.parse(localStorage.getItem('users'))
  users.forEach(async (item) => {
    const encryptedPassword = await encryptSha256(passwordLogin.value)
    if(userLogin.value.toUpperCase() == item.userName.toUpperCase() && encryptedPassword == item.password){

      validUser ={
        password:  await encryptSha256(passwordLogin.value),
        userName: item.userName,
      }
      userAccessControl.currentLoggedUser(validUser)
      moveToMainPage()
      return

    }else{
      Tools.loginErrorMesg(errorMsg)
    }
  })
};

function Login(){
  buttonLogin.addEventListener('click',evaluateLogin,false)
};

function showHidePasswordLogin(){
  showHidePwdLogin.addEventListener('click',Functions.togglePasswordLogin,false)
};

document.body.onload = (function(){
  userAccessControl.manageAccess();
  Login();
  showHidePasswordLogin();
})();