const btnLogout = document.getElementById('btn-logout');
const lblUser = document.getElementById('current-logged-user')

import moveToLogin from '../routes/login.js';
import logOut from '../logout/logout.js';

function setCurrentLoggedUser(){
  let loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '[]')
  if (loggedUser.isLogged){
    lblUser.innerText = `Seja bem vindo ${loggedUser.currentUser}`
    return loggedUser
  }else{
    moveToLogin()
  }
};

function toggleLogOut(){
  btnLogout.addEventListener('click',logOut,false);
};

const logged = {
  setCurrentLoggedUser,
  toggleLogOut,
}

export default logged;