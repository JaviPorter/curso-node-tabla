
    // Nombre de la función que voy a llamar y donde se encuentra
    const { crearArchivo } = require ('./proyecto/multiplicar6');
    const argv = require ('./config/yargs2');
    
    console.clear();

    crearArchivo( argv.b, argv.l, argv.h )
     .then (nombreArchivo => console.log(nombreArchivo, 'creado'))
     .catch ( err => console.log(err));

    
