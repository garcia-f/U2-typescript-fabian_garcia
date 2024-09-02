(()=>{
    // Clase con constructor
    class Car {
        public make: string;
        constructor( make: string) {
            this.make = make;
        }
        drive() {
            console.log(`Driving a ${this.make}`);
        }
    }

    let vehiculo = new Car("Ford");
    vehiculo.drive();
})()

