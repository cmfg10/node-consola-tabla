const { crearArchivo } = require('./helpers/multiplicar') 

const argv = require("./config/yargs")


console.clear()

crearArchivo( argv.base, argv.listar, argv.cantidad)
    .then (nombreArchivo => console.log(nombreArchivo, "creado con exito"))
    .catch(err => console.log(err) );



