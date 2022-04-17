
    // Nombre de la función que voy a llamar y donde se encuentra
    const { crearArchivo } = require ('./proyecto/multiplicar5');
    const argv = require ('./config/yargs');
    
    console.clear();

    crearArchivo( argv.b, argv.l )
     .then (nombreArchivo => console.log(nombreArchivo, 'creado'))
     .catch ( err => console.log(err));

    
