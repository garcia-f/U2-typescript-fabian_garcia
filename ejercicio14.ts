
(()=>{
    // Type assertions
    let numero: any = "12345";
    
    let longitud: string | any = (numero as string).length;
    console.log(`La longitud de la variable numero es: ${longitud}`);
})()
