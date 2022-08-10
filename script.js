function random_item(personajes) {
    return personajes[Math.floor(Math.random()*personajes.length)];
     }
const personajes = ["naruto", "sasuke", "shikamaru", "kakashi", "sakura", "chouji", "ino", "hinata", "shino", "kiba"]
const personaje = random_item(personajes);
console.log(personaje)
const errores = []
let respuesta
let vidas 
const container = document.getElementById("container")
const vidasRestantes = document.getElementById("vidasRestantes")
const ganaste = document.getElementById("ganaste")
alert("Bienvenido a Narutole. Para salir en cualquier momento ingrese ESC")

for(vidas = 4; vidas >= 0;vidas--){
  respuesta = prompt("Ingrese el nombre de un personaje").toLowerCase()
  errores.push(respuesta)
  container.innerHTML = `<h2><del>${errores}</h2>`
  console.log(respuesta)

  if(respuesta == "esc"){
    alert("gracias por participar.")
    break;
  }
 
  if(respuesta == personaje){
    ganaste.innerHTML = `<h1>!! Felicitaciones, la respuesta era ${personaje} !!</h1>`
    
    break;
  } else {
    vidasRestantes.innerHTML = `<h2>Te quedan ${vidas} vidas</h2>`
    
    console.log(errores)
  }
} 


