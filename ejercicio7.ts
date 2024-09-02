// Funcion anonima auto invocada
(()=> {
    // Clase basica
    class Car {
        public make: string = "Ford";
        drive() {
            console.log(`Driving a ${this.make}`);
        }
    }
    let auto = new Car();
    auto.drive()
})()
