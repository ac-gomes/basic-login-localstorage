
function currentLoggedUser(currentUser) {
  let loggedUser = {
    currentUser: '',
    isLogged: false
  }

  if (Object.keys(currentUser).length > 0) {
    loggedUser = {
        currentUser: currentUser.userName,
        isLogged: true
      }
    localStorage.setItem('loggedUser', JSON.stringify(loggedUser))

  }else {
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '[]')
  }
};

const userAccessControl = {
  currentLoggedUser,

};

export default userAccessControl;