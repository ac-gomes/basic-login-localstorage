import settingList from '../data/messageError.js'

function setErrorStyle(element){
  element.style.borderBottomStyle= 'inset'
  element.style.borderBottomColor =  '#f93706'
};

function setMatchingStyle(element){
  element.style.borderBottomStyle= 'inset'
  element.style.borderBottomColor =  '#009900'
};

function setErrorMessageStyle(element){
  element.style.color =  '#f93706'
};

function setMachingMessageStyle(element){
  element.style.color =  '#009900'
};

const createElement = (elementType) => {
  let newElement = document.createElement(elementType);
  return newElement
};

function getMsgList(list, element){
  Object.keys(list).forEach((key) => {
  let newItem = createElement('li')
  element.appendChild(newItem)
  newItem.setAttribute('id',key)
  newItem.innerHTML =  list[key]
  // console.log(list[key])

  })
}

const Tools = {
  setErrorStyle,
  setMatchingStyle,
  setMachingMessageStyle,
  setErrorMessageStyle,
  getMsgList,
};

export default Tools;