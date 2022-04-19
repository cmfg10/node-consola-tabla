const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base=5, listar=false, cantidad=10) => {

    try {

    
        let salida ="";
        let consola ="";
    
        for (let i = 1; i <= cantidad; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${"x".green} ${i} ${'='.green} ${base * i}\n`;
        }
    
        if (listar){
            console.log("==================".rainbow);
            console.log('TABLA DEL:', base);
            console.log("==================".rainbow);

            console.log(consola)
        }
    
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida)
        return `tabla-${base}.txt`;    
        
    } catch (error) {
        throw error;
        
    }
    
   
}

module.exports = {
    crearArchivo
}

