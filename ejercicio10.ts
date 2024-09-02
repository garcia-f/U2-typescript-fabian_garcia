
// Herencia de clases
(()=>{
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

    class ElectricCar extends Car {
        public batteryLife: number;
        constructor(make: string, batteryLife: number) {
            super(make);
            this.batteryLife = batteryLife;
        }
        charge() {
            console.log(`El coche se esta cargando, ${this.batteryLife}%`);
        }
    }

    let auto = new ElectricCar("Ford", 20);
    auto.charge()
})()