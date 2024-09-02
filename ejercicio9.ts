(()=>{
    // Clase con propiedades privadas
    class Car {
        private make: string;
        constructor( make: string) {
            this.make = make;
        }
        drive() {
            console.log(`Driving a ${this.make}`);
        }
        getMake() {
            console.log(`${this.make}`)
        }
    }

    let carro = new Car("Ford");
    carro.getMake();

})()