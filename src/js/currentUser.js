
function currentLoggedUser(currentUser) {
  let loggedUser = {
    currentName: '',
    currentUser: '',
    isLogged: false
  }

  if (Object.keys(currentUser).length > 0) {
    loggedUser = {
        currentName: currentUser.nome,
        currentUser: currentUser.user,
        isLogged: true
      }

    localStorage.setItem('loggedUser', JSON.stringify(loggedUser))

  }else {
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '[]')
    return loggedUser

  }
  setCurrentLoggedUser(loggedUser)
}

function setCurrentLoggedUser(user){
  if (user.isLogged){
    let lblUser= document.getElementById('current-logged-user')
    lblUser.innerText = `Seja bem vindo ${user.currentName}`
    lblUser.style.color = "#fff";

  }
}

function logOut(){
    let loggedUser = {
          currentName: '',
          currentUser: '',
          isLogged: false
        }

    localStorage.setItem('loggedUser', JSON.stringify(loggedUser))

     // chamar página inicial
  }

const usercontrol = {
  currentLoggedUser,
  logOut,
}

export default usercontrol