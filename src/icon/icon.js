import Tools from "../helper/tools.js";

const Icon = (label, className, color, fn) => {
  let icon = Tools.createElement('span')
  let functionDoc = Tools.createElement('a')

  if(fn) {
    functionDoc.href = getFunctionDoc(fn.name)
    functionDoc.target="_blank"
    functionDoc.title = "Documentation"
    functionDoc.rel="noopener noreferrer"
  }
  Tools.elementContent(functionDoc, label)
  icon.appendChild(functionDoc)

  icon.className = className
  Tools.insertStyle(icon, color, true)

  return icon
}

const getFunctionDoc = (fnName) => {
  let findLink  = fnName.toLowerCase()
  let foundlink = doc[findLink] ??`Documentation does not exist in database!`
  return foundlink
}

export default Icon;