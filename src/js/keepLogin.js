const btnLogout = document.getElementById('btn-logout')

import moveToLogin from './routes/login.js'
import logOut from './logout/logout.js'

function setCurrentLoggedUser(){
  let loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '[]')

  if (loggedUser.isLogged){
    console.log(loggedUser.isLogged,loggedUser.currentUser)
    let lblUser= document.getElementById('current-logged-user')
    lblUser.innerText = `Seja bem vindo ${loggedUser.currentUser}`
    lblUser.style.color = "#fff";
  }else{
    moveToLogin()
  }
};

setCurrentLoggedUser();
btnLogout.addEventListener('click',logOut,false);
