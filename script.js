const personajes = ["naruto", "sasuke", "shikamaru", "kakashi"]
const personaje = personajes[Math.floor(Math.random()*personajes.length)];
const errores = []
let respuesta
let vidas = 5

alert("Bienvenido a Narutole. Para salir en cualquier momento ingrese ESC")

for(vidas = 4; vidas >= 0;vidas--){
  
  console.log(personaje)
  respuesta = prompt("Ingrese el nombre de un personaje").toLowerCase()
  errores.push(respuesta)
  console.log(respuesta)

  
  if(respuesta == "esc"){
    alert("gracias por participar.")
    break;
  }
 
  if(respuesta == personaje){
    alert(`Felicitaciones, la respuesta era ${personaje}`)
    break;
  } else {
    alert(`Te quedan ${vidas} vidas`)
    console.log(errores)
  }
}
