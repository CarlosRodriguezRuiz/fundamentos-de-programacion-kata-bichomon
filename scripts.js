console.log(document.title);

// Primer ejercicio
//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.getElementById("gen-1").innerText = "Generasión 1 Pokimon";
console.log("Primer ejercicio: " + document.getElementById("gen-1").innerHTML);

//Segundo ejercicio
const imagenesV3 = document.querySelectorAll("body > main > div:nth-child(6)");

//body > main > div:nth-child(6) > div:nth-child(45) > span.infocard-lg-img > a > img
const imagenes = document.querySelectorAll("main > div:nth-child(6) img ");

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].style.background = "aquamarine";
}

//Tercer ejercicio
//Imprime por consola la URL de la página.
console.log("Tercer ejercicio: " + document.URL);

//Cuarto ejercicio
//Imprime por consola el dominio de la página.

console.log("Tercer ejercicio: " + document.domain);

//Quinto ejercicio
//Imprime todos los nodos de imagen.
const todasImagenes = document.querySelectorAll("img");
console.log("Cuarto ejercicio: " + todasImagenes);

//Sexto ejercicio
//Sustituye el atributo "src" de todas las imágenes por este
// "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

let cambiarImagenes = document.querySelectorAll("img");
for (let i = 0; i < cambiarImagenes.length; i++) {
  cambiarImagenes[i].setAttribute(
    "src",
    "https://media.giphy.com/media/2v170e71aanfi/giphy.gif",
  );
}

//Séptimo ejercicio
//Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
//const infoCard1 = document.querySelectorAll(".infocard-lg-data.text-muted");
const infoCard2 = document.querySelectorAll(".itype.flying");

console.log("Ejercicio 5:");
let contador = 0;
for (let i = 0; i < infoCard2.length; i++) {
  const pokemon = infoCard2[i].closest(".infocard");
  const imagen = pokemon.querySelector("img");

  imagen.setAttribute("src", "foundIT.gif");
  contador++;
}
console.log(contador);
