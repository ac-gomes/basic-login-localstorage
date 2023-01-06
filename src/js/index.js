import settingList from '../data/messageError.js'
import Tools from './helpers.js'
import Functions from '../utils/index.js'
import signIn from './register.js'

// const userNameRegister = document.getElementById('user-register')
// const passwordRegister = document.getElementById('password-register')
// const confirmPasswordRegister = document.getElementById('confirm-password-register')
const errorlist = document.getElementById('error-list')

Tools.getMsgList(settingList.messageList,errorlist)


signIn.Register()
signIn.validatePwdForm()
signIn.validateNameForm()
signIn.validateConfirmPwdForm()
signIn.showHidePassword()

const toggle = document.getElementById('toggle-password')
console.log(toggle.textContent)

// let listaDeIds = Functions.getErrorIdList()
// console.log(listaDeIds)