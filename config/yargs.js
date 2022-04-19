const argv = require("yargs")
    .option("b", {
        alias: "base",
        type:"number",
        demandOption: true,
        describe: "Es la base de la tabla de multiplicar"

    })
    .option("c", {
        alias: "cantidad",
        type:"number",
        demandOption: true,
        describe: "Es el largo de la tabla de multiplicar"

    })
    .option("l", {
        alias: "listar",
        type:"boolean",
        default: false,
        describe: "Muestra la base en cosola"

    })
    .check((argv, option)=>{
        if (isNaN(argv.base) || isNaN(argv.cantidad)){
            
            throw 'La base y la cantidad deben ser un numero'
        }
        return true;
    })
    .argv;


module.exports = argv;