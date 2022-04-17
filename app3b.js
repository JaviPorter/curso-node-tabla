
const fs = require('fs');

console.clear();

// Nombre de la función que voy a llamar y donde se encuentra
const { crearArchivo } = require ('./proyecto/multiplicar2');

const base = 3;

// LLamada a la función
// El then se ejecutara si devuelve el return
// El catch se ejecutara si hay una excepcion "throw"
crearArchivo( base )
     .then (nombreArchivo => console.log(nombreArchivo, 'creado'))
     .catch ( err => console.log(err));
