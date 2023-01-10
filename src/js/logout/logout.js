import moveToLogin from '../routes/login.js'

function logOut(){
  let loggedUser = {
        currentName: '',
        currentUser: '',
        isLogged: false
      }

  localStorage.setItem('loggedUser', JSON.stringify(loggedUser))
  moveToLogin()
};

export default logOut;