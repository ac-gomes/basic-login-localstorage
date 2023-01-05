const userLogin = document.getElementById('user-login')
const passwordLogin = document.getElementById('password-login')

function Login() {
  let users = []

  let validUser = {
       user: '',
      password: '',
  }
  users = JSON.parse(localStorage.getItem('users'))

  users.forEach((item) => {
      if(userLogin.value == item.userCad && passwordLogin.value == item.senhaCad){

        validUser = {
              user: item.userCad,
              password: item.senhaCad
          }
      }
  })
}