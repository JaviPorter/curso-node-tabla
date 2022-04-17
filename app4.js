
	console.clear();

    // Nombre de la función que voy a llamar y donde se encuentra
    const { crearArchivo } = require ('./proyecto/multiplicar');
    
    console.log(process.argv);
    
    const [ , , arg3 = 'base=5'] = process.argv;
    
    const [ , base ] = arg3.split('=');
    
    // LLamada a la función
    crearArchivo( base );
    
