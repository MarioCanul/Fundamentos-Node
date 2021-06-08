const fs= require('fs');

const tablas = async(numero,hasta,listar)=>{
    try {
        let salida='';
        for (let index = 1; index <= hasta; index++) {
       salida += `${numero} * ${index}= ${numero*index}\n`
    }
    if (listar) {
        console.log(salida)
    }
    fs.writeFileSync(`./tablas/tabla-${numero}.txt`,salida);
    return `tabla del ${numero} creada`;  
    } catch (error) {
        throw error;
    }
        
}
module.exports={
    tablas
}