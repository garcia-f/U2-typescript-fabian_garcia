
// Genericos(basico)
const generico = <T>(data: T): T => {
    return data;
}


let numero = generico(2);
let texto = generico("Hola mundo");
let nulo = generico(null);
let objeto = generico({nombre: "Fabian", apodo:"mainor"});
let arreglo = generico([1,2,3,4,5])

console.log({numero, texto, nulo, objeto, arreglo});