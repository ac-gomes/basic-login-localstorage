
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



const Tools = {
  getMsgList,
};

export default Tools;