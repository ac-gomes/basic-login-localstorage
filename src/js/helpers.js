import settingList from '../data/messageError.js'

function setErrorStyle(element){
  element.style.borderBottomStyle= 'inset'
  element.style.borderBottomColor =  '#f93706'
};

function setMatchingStyle(element){
  element.style.borderBottomStyle= 'inset'
  element.style.borderBottomColor =  '#009900'
};

function setErrorMessage(element, errorType){
  settingList.messageList[errorType]

};

const createElement = (elementType) => {
  let newElement = document.createElement(elementType);
  return newElement
};

const insertStyle = (element, color, hasBgColor = false) => {
  if (hasBgColor != false){
    element.style.backgroundColor = color
  }
  if (color != false){
    element.style.borderColor = color
  }
};

const elementContent = (element, content) => {
  if (content){
    element.innerHTML= content
  }
};

const Tools = {
  setErrorStyle,
  setMatchingStyle,
  setErrorMessage,
  createElement,
  insertStyle,
  elementContent,
};

export default Tools;