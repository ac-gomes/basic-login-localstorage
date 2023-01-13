import moveToMainPage from './routes/main-page.js';
import moveToLogin from './routes/login.js';
import moveToNewUser from './routes/register.js';

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

  }
};

function manageAccess(){
  let loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '[]')
  if (loggedUser.isLogged) {
    moveToMainPage()
  }
};


const userAccessControl = {
  currentLoggedUser,
  manageAccess,
};

export default userAccessControl;