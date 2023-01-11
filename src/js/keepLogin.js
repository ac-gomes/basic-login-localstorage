const btnLogout = document.getElementById('btn-logout');

import moveToLogin from './routes/login.js';
import logOut from './logout/logout.js';
import preLoad from '../utils/preload.js';

function setCurrentLoggedUser(){
  let loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '[]')

  if (loggedUser.isLogged){
    let lblUser = document.getElementById('current-logged-user')
    lblUser.innerText = `Seja bem vindo ${loggedUser.currentUser}`
  }else{
    moveToLogin()
  }
};

function toggleLogOut(){
  btnLogout.addEventListener('click',logOut,false);
};

window.onpaint = preLoad(
  setCurrentLoggedUser,
  toggleLogOut,
);