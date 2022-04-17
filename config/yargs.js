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
                .check( ( argv, options)  => {
                    if ( isNaN (argv.b) ) {
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv;

module.exports = argv;