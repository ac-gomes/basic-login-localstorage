const errorlist = document.getElementById('error-list')

import settingList from '../data/messageError.js'
import Tools from './helpers.js'
import signIn from './register/Register.js'
import userAccessControl from './currentUser.js'

document.body.onload = (function(){
  Tools.getMsgList(settingList.messageList,errorlist)
  signIn.Register()
  signIn.validatePwdForm()
  signIn.validateNameForm()
  signIn.validateConfirmPwdForm()
  signIn.showHidePassword()
})();