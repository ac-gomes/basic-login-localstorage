
function currentLoggedUser(currentUser) {
  console.log(currentUser);
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
    return loggedUser

  }else {
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '[]')
    return loggedUser
  }
};

const userAccessControl = {
  currentLoggedUser,

};

export default userAccessControl;