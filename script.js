// objetos

const objPersonajes = [
  {nombre: "naruto", aldea: "konoha", jutsu: "aire"},
  {nombre: "sakura", aldea: "konoha", jutsu: "tierra"},
  {nombre: "sasuke", aldea: "konoha", jutsu: "rayo"},
]

// funciones 

function random_item(objPersonajes) {
  return objPersonajes[Math.floor(Math.random()*objPersonajes.length)].nombre;
}
// dom

const intentosRes = document.getElementById('intentosRes');
const inputUs = document.getElementById('inputUs');
const erroresUs = document.getElementById('erroresUs');
const mensajeFinal = document.getElementById('mensajeFinal');

// variables

const personaje = random_item(objPersonajes)
console.log(personaje)
const intentos = 8
console.log(intentos)
const erroresUsuario = []
console.log(erroresUsuario)

inputUs.addEventListener('change', (e) => {
  const respuesta = document.getElementById('inputUs').value
  console.log(respuesta)
  erroresUsuario.push(respuesta)
  console.log(erroresUsuario)

  if (respuesta === personaje){
    mensajeFinal.innerHTML = `<h1>!! Felicitaciones, la respuesta era ${personaje} !!</h1>`
  } else {
    intentosRes.innerHTML = `<h2>Te quedan ${intentos} vidas</h2>`
    erroresUs.innerHTML = `<h3><del>${erroresUsuario}</h3>`
  }
})

