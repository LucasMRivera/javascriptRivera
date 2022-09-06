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

/*const ul = document.createElement('ul')
const listaFiltro = document.getElementById('listaFiltro')
fetch('./shinobis.json')
.then(function(response){
  return response.json()
}).then(function(data){
  console.log(data)
  data.forEach(function (shinobi){
    const li = document.createElement('li')
    li.innerText = shinobi.nombre
    ul.append(li)
    })
    listaFiltro.append(ul)
  })
*/

const personaje = random_item(objPersonajes)
const erroresUsuario = []
const listaPersonajes = objPersonajes.map(function(element){
  return element.nombre;
})

const inputUs = document.getElementById('inputUs');
const clickUs = document.getElementById('clickUs');
const erroresUs = document.getElementById('erroresUs');
const mensajeFinal = document.getElementById('mensajeFinal');
const tablaRespuesta = document.getElementById('tablaRespuesta');
const resetear = document.getElementById('resetear');

function random_item(objPersonajes) {
  return objPersonajes[Math.floor(Math.random()*objPersonajes.length)]//.nombre;
}
// funcion para descontar intentos
function intentosClick(click){
  const totalIntentos = document.getElementById('totalIntentos');
  const restar = parseInt(totalIntentos.innerText) + click;
  totalIntentos.innerText = restar
}


const rows = document.querySelectorAll("tbody tr");

      console.log(rows);
// evento filtro
inputUs.addEventListener("keyup", function (e) {
        const q = e.target.value.toLowerCase();
        rows.forEach((row) => {
          if (row.querySelector("td").textContent.toLowerCase().startsWith(q)){
              row.classList.remove("display");             
            } else {
              row.classList.add("display");             
            }
        });
      });

// evento para sumar errores
clickUs.addEventListener('click', (e) => {
  const respuesta = document.getElementById('inputUs').value.toLowerCase()
  console.log(respuesta)
  const objetoUsuario = objPersonajes.find((el) => el.nombre === respuesta)
  console.log(objetoUsuario)
  erroresUsuario.push(respuesta)
    console.log(erroresUsuario)
  
  
// sweetalert respuesta final
  if (respuesta === personaje.nombre){
    Swal.fire({
      icon: 'success',
      title: 'Felicitaciones',
      text: `la respuesta era ${personaje.nombre}!`,
      
    })
    localStorage.setItem('ultimoAdivinado', personaje.nombre);
    clickUs.setAttribute('disabled', 'disabled');
    inputUs.setAttribute('disabled', 'disabled');
    setTimeout(function(){
      location.reload();
    }, 5000);
  } else {
    erroresUs.innerHTML = `<h3><del>${erroresUsuario}</h3>`
    tablaRespuesta.innerHTML += 
    `<tr>
        <td id="aldea${objetoUsuario.id}">${objetoUsuario.aldea}</td>
        <td id="jutsu${objetoUsuario.id}">${objetoUsuario.jutsu}</td>
        <td id="nivel${objetoUsuario.id}">${objetoUsuario.nivel}</td>
    </tr>`

    const aldea = document.getElementById(`aldea${objetoUsuario.id}`);
    const jutsu = document.getElementById(`jutsu${objetoUsuario.id}`);
    const nivel = document.getElementById(`nivel${objetoUsuario.id}`);

    // matchear aldea jutsu y nivel
   if(personaje.aldea == objetoUsuario.aldea){ 
    aldea.style.color = "green" 
   } else {
    aldea.style.color = "red"
  }

  if(personaje.jutsu == objetoUsuario.jutsu){
     jutsu.style.color = "green" 
   } else { 
     jutsu.style.color = "red"
   }
   
  if(personaje.nivel == objetoUsuario.nivel) {
    nivel.style.color = "green" 
  } else {
    nivel.style.color = "red"
  }
  

  if(totalIntentos.innerHTML < 1){
    clickUs.setAttribute('disabled', 'disabled')
    inputUs.setAttribute('disabled', 'disabled')
    Swal.fire({
      icon: 'error',
      title: 'Mejor suerte la proxima',
      text: `la respuesta era ${personaje.nombre}!`,
      
    })
    localStorage.setItem('ultimoEquivocado', personaje.nombre)
    setTimeout(function(){
      location.reload();
    }, 5000);
  } 
  }
})
  

 
 