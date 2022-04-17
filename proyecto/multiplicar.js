
// necesitamos definir esta libreria porque utilizamos la funcion writeFileSync.
const fs = require('fs');

// El módulo lo ponemos dentro de una función que se llamará desde el fichero principal.
const crearArchivo = (base = 5) => {

    console.log('=============================');
    console.log('       Tabla del ', base      );
    console.log('=============================');

    let salida = '';
    for (let i = 1; i < 11; i++)
    { 
        salida += ` ${base} * ${i} = ${base * i}\n`;
    }

    console.log(salida);
    
    fs.writeFileSync( `tabla-${base}.txt`, salida);

    console.log(`tabla - ${base}.txt creado`);
}

/* De esta forma estoy diciendo que este fichero será un modulo 
   La nomenclatura es la siguiente:
        module.exports = {
            <funcion> : <nombre de la funcion>
        }
*/

module.exports = { 
    crearArchivo
}