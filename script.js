// objetos

class Personaje{
  constructor(id,nombre, aldea, jutsu, nivel){
    this.id = id;
    this.nombre = nombre;
    this.aldea = aldea;
    this.jutsu = jutsu;
    this.nivel = nivel;
  }
}

const personaje1 = new Personaje (1,"naruto","konoha","aire","genin" )
const personaje2 = new Personaje (2,"sakura","konoha","curar","genin" )
const personaje3 = new Personaje (3,"sasuke","konoha","rayo","genin" )
const personaje4 = new Personaje (4,"kakashi","konoha","rayo","jounin" )
const personaje5 = new Personaje (5,"gaara","suna","arena","genin" )
const personaje6 = new Personaje (6,"kankurou","suna","marioneta","genin" )
const personaje7 = new Personaje (7,"temari","suna","aire","genin" )
const personaje8 = new Personaje (8,"baki","suna","aire","jounin" )
const personaje9 = new Personaje (9,"rock lee","konoha","taijutsu","genin" )
const personaje10 = new Personaje (10,"guy","konoha","taijutsu","jounin" )


const objPersonajes = [personaje1, personaje2, personaje3, personaje4, personaje5, personaje6, personaje7,
personaje8, personaje9, personaje10 ]

// variables

const personaje = random_item(objPersonajes)
console.log(personaje)
const erroresUsuario = []
console.log(erroresUsuario)
const listaPersonajes = objPersonajes.map(function(element){
  return element.nombre;
})
console.log(listaPersonajes)


// storage

// dom

const inputUs = document.getElementById('inputUs');
const clickUs = document.getElementById('clickUs');
const erroresUs = document.getElementById('erroresUs');
const mensajeFinal = document.getElementById('mensajeFinal');
const tablaRespuesta = document.getElementById('tablaRespuesta');
const resetear = document.getElementById('resetear');


// funciones 

function random_item(objPersonajes) {
  return objPersonajes[Math.floor(Math.random()*objPersonajes.length)]//.nombre;
}

function intentosClick(click){
  const totalIntentos = document.getElementById('totalIntentos');
  const restar = parseInt(totalIntentos.innerText) + click;
  totalIntentos.innerText = restar
}

/*listaPersonajes.forEach(function(item) {
  let li = document.createElement("li");
  let text = document.createTextNode(item);
  li.appendChild(text);
  document.getElementById("listaFiltro").appendChild(li);
});*/



const rows = document.querySelectorAll("tbody tr");

      console.log(rows);

inputUs.addEventListener("keyup", function (e) {
        const q = e.target.value.toLowerCase();
        rows.forEach((row) => {
          if (row.querySelector("td").textContent.toLowerCase().startsWith(q)){
              row.style.display = ""               
            } else {
              row.style.display = "none";              
            }
        });
      });


// evento keyup para filtrar respuestas
// bloquear input si no coincide con un personaje



// cada vez que hace click mandar respuesta a la tabla

clickUs.addEventListener('click', (e) => {
  const respuesta = document.getElementById('inputUs').value.toLowerCase()
  console.log(respuesta)
  const objetoUsuario = objPersonajes.find((el) => el.nombre === respuesta)
  console.log(objetoUsuario)
  erroresUsuario.push(respuesta)
    console.log(erroresUsuario)
  
  
  
  // agregar fila con resultados

  if (respuesta === personaje.nombre){
    mensajeFinal.innerHTML = `<h1>!! Felicitaciones, la respuesta era ${personaje.nombre} !!</h1>`
    localStorage.setItem('ultimoAdivinado', personaje.nombre);
    clickUs.setAttribute('disabled', 'disabled');
    inputUs.setAttribute('disabled', 'disabled');
    setTimeout(function(){
      location.reload();
    }, 5000);
    // poner settimeout para resetear
  } else {
    erroresUs.innerHTML = `<h3><del>${erroresUsuario}</h3>`
    tablaRespuesta.innerHTML += 
    `<tr>
        <td id="aldea${objetoUsuario.id}">${objetoUsuario.aldea}</td>
        <td id="jutsu${objetoUsuario.id}">${objetoUsuario.jutsu}</td>
        <td id="nivel${objetoUsuario.id}">${objetoUsuario.nivel}</td>
    </tr>`

  // dom tabla

    const aldea = document.getElementById(`aldea${objetoUsuario.id}`);
    const jutsu = document.getElementById(`jutsu${objetoUsuario.id}`);
    const nivel = document.getElementById(`nivel${objetoUsuario.id}`);
    
  // matchear aldea

   (personaje.aldea == objetoUsuario.aldea) ? aldea.style.color = "green" :  aldea.style.color = "red"
    
  // matchear jutsu

  (personaje.jutsu == objetoUsuario.jutsu) ? jutsu.style.color = "green" : jutsu.style.color = "red"
   
  // matchear nivel

  (personaje.nivel == objetoUsuario.nivel) ? nivel.style.color = "green" : nivel.style.color = "red"
  
  

  // cortar juego

  if(totalIntentos.innerHTML < 1){
    clickUs.setAttribute('disabled', 'disabled')
    inputUs.setAttribute('disabled', 'disabled')
    mensajeFinal.innerHTML = `<h1>Mejor suerte la proxima, la respuesta era ${personaje.nombre}</h1>`
    localStorage.setItem('ultimoEquivocado', personaje.nombre)
    setTimeout(function(){
      location.reload();
    }, 5000);
    // poner settimeout para resetear
  } 
  }
})
  

 
 