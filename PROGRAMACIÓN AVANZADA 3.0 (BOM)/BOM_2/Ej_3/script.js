let nombreNavegador = navigator.userAgent;
let sistemaOperativo = navigator.platform;
let idiomaNavegador = navigator.language;
let usuarioOnline = navigator.onLine;

document.getElementById("browser-name").innerText =  nombreNavegador
document.getElementById("system").innerText = sistemaOperativo
document.getElementById("lenguage").innerText = idiomaNavegador

usuarioOnline ?  document.getElementById("user-state").setAttribute("class", "on") : document.getElementById("user-state").setAttribute("class", "off")


