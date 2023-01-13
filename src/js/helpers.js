
function getMsgList(list, element){
  Object.keys(list).forEach((key) => {
  let newItem = createElement('li')
  element.appendChild(newItem)
  newItem.setAttribute('id',key)
  newItem.innerHTML =  list[key]

  })
};

const createElement = (elementType) => {
  let newElement = document.createElement(elementType);
  return newElement
};

function loginErrorMesg(element){
  element.style.marginBottom='0'
  element.style.display='block'
  element.innerText ='Invalid email or password!'
}

const Tools = {
  getMsgList,
  loginErrorMesg
};

export default Tools;