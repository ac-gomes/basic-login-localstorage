import settingList from '../data/messageError.js'
import Tools from './helpers.js'
import Functions from '../utils/index.js'
import signIn from './register/Register.js'



const errorlist = document.getElementById('error-list')

Tools.getMsgList(settingList.messageList,errorlist)

signIn.Register()
signIn.validatePwdForm()
signIn.validateNameForm()
signIn.validateConfirmPwdForm()
signIn.showHidePassword()


function togglePasswordLogin(){
  let passwordInputLogin = document.getElementById('password-login')
  let toggleLogin = document.getElementById('toggle-password-login')

  if(toggleLogin.textContent =='visibility_off'){
    toggleLogin.innerText ='visibility'
    passwordInputLogin.setAttribute('type', 'text');
  }else{
    toggleLogin.innerText ='visibility_off'
    passwordInputLogin.setAttribute('type', 'password');
  }
  console.log(toggleLogin.textContent)
};

togglePasswordLogin()

// let listaDeIds = Functions.getErrorIdList()
// console.log(listaDeIds)