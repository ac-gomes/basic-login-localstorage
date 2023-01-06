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

function setErrorStyle(element){
  element.style.borderLeftStyle= 'inset'
  element.style.borderLeftColor =  '#ff531a'
};

function setMatchingStyle(element){
  element.style.borderLeftStyle= 'inset'
  element.style.borderLeftColor =  '#009900'
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
}

export default Functions;