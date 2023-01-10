const errorIdList = document.getElementById('error-list');

function getErrorIdList(){
  const errorList = errorIdList.childNodes
  const Idlist = [...errorList].map((item,index) => {
    return errorList[index].id
  })
  return Idlist;
};

function togglePassword(){
  let toggle = document.getElementById('toggle-password')
  let passwordInput = document.getElementById('password-register')

  if(toggle.textContent =='visibility_off'){
    toggle.innerText ='visibility'
    passwordInput.setAttribute('type', 'text');
  }else{
    toggle.innerText ='visibility_off'
    passwordInput.setAttribute('type', 'password');
  }
};

function togglePasswordLogin(){
  let toggleLogin = document.getElementById('toggle-password-login')
  let passwordInputLogin = document.getElementById('password-login')

  if(toggleLogin.textContent =='visibility_off'){
    toggleLogin.innerText ='visibility'
    passwordInputLogin.setAttribute('type', 'text');
  }else{
    toggleLogin.innerText ='visibility_off'
    passwordInputLogin.setAttribute('type', 'password');
  }
};

function moveToNewUser(){
  window.location.href = "http://127.0.0.1:5500/register.html"
};

function setErrorStyle(element){
  element.style.borderLeftStyle= 'inset'
  element.style.borderLeftColor =  '#FF260D'
};

function setMatchingStyle(element){
  element.style.borderLeftStyle= 'inset'
  element.style.borderLeftColor =  '#1aff53'
};

function setErrorMessageStyle(element){
  element.style.color =  '#f93706'
};

function setMachingMessageStyle(element){
  element.style.color = '#009900'
};


const Functions = {
  getErrorIdList,
  setErrorStyle,
  setMatchingStyle,
  setMachingMessageStyle,
  setErrorMessageStyle,
  togglePassword,
  togglePasswordLogin,
  moveToNewUser,
}

export default Functions;