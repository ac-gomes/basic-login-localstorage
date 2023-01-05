const userNameRegister = document.getElementById('user-register')
const passwordRegister = document.getElementById('password-register')
const confirmPasswordRegister = document.getElementById('confirm-password-register')
const errorlist = document.getElementById('error-list')

import signIn from './register.js'
import settingList from '../data/messageError.js'
import Tools from './helpers.js'

Tools.getMsgList(settingList.messageList,errorlist)



//  Tools.createElement()
