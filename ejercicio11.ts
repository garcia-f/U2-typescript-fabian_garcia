

interface Shape {
    area(): number
}

class Circle implements Shape {
    public radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}


let circulo = new Circle(3);
console.log(`El area del circulo es: ${circulo.area()}`)