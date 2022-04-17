
/* Necesario añadir esta libreria */
const fs = require('fs');

const base = 5;



let salida = '';
for (let i = 1; i < 11; i++)
{
    salida += ` ${base} * ${i} = ${base * i}\n`;
}

console.log(salida);

/* Usamos la función donde pasaremos por parametro:
    - Nombre de fichero.
    - Datosa a grabar
    - Funcion de lo que ha de hacer en el caso de que se produzca un error */

fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
      if(err) throw err;
      console.log(`tabla del ${base} creada`);
})