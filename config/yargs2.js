const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe : 'Coge la base para crear la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe : 'Muestra por pantalla la tabla de multiplicar'
                })
                .option('h', {
                    alias: 'hasta',
                    tyype: 'number',                    
                    default: 10,
                    describe : 'Hasta que valor hemos de sacar la tabla'
                
                })
                .check( ( argv, options)  => {
                    if ( isNaN (argv.b) ) {
                        throw 'La base tiene que ser un número'
                    }
                    if ( isNaN (argv.h) ) {
                        throw 'Hasta tiene que ser un número'
                    }
                    if (argv.h > 100) {
                         throw 'El valor máximo ha de ser 100'
                    }
                    return true;
                })
                .argv;

module.exports = argv;