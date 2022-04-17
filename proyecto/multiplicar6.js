
// necesitamos definir esta libreria porque utilizamos la funcion writeFileSync.
const fs = require('fs');
const colors = require('colors/safe');


// El módulo lo ponemos dentro de una función que se llamará desde el fichero principal.
// Al tener la palabra async lo estamos conviertiendo en una promesa.

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        
        let salida = '';
        let consola = '';
        for (let i = 1; i < hasta; i++)
        { 
            salida += `${base} * ${i} = ${base * i}\n`;
            consola += `${base} ${colors.cyan('*')} ${colors.blue.italic(i)} ${colors.red('=')} ${colors.yellow.bold(base * i)}\n`;
        }
    
        if ( listar) {
            console.log('=============================');
            console.log(`       Tabla del : ${colors.bold.yellow(base)}`);
            console.log('=============================');
            console.log(consola);
        }
         
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        
        return (`tabla-${base}.txt`);
    }
    catch (err) {
        throw (err);
    }
    
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