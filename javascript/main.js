
//BOTÃO LOGIN INTERAÇÃO
var login = window.document.getElementById('login')
login.addEventListener('mouseenter', entrar)
login.addEventListener('mouseout', sair)

function entrar() {
  login.style.background = '#f1c40f'
}
function sair() {
  login.style.background = '#e74c3c'
}

//USERNAME
var btn = window.document.getElementById('btn')
btn.addEventListener('mouseenter', enterUsername)
btn.addEventListener('mouseout', outUsername)

function enterUsername() {
  btn.style.width = '280px'
}
function outUsername() {
  btn.style.width = '200px'
}

//PASSWORD
var btn1 = window.document.getElementById('btn1')
btn1.addEventListener('mouseenter', enterPassword)
btn1.addEventListener('mouseout', outPassword)

function enterPassword() {
  btn1.style.width = '280px'
}
function outPassword() {
  btn1.style.width = '200px'
}