class Shape {
    constructor(color) {
        this.color = color;
    }

    paint() {
			console.log(`Painting with color ${this.color}`);
    }

    area() {
        throw new Error('The area method must be implemented in the subclass');
    }

    getDescription() {
        return `A shape with color ${this.color}`;
    }
}

class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color); 
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    getDescription() {
        return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
    }
}

class Circle extends Shape {
    constructor(radius, color) {
        super(color);  
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    getDescription() {
        return `A circle with radius ${this.radius} and color ${this.color}`;
    }
}


const circle = new Circle(20,'red');
console.log(circle.area());
console.log(circle.getDescription());
// const rectangle = new Rectangle(10,20,'green');
// console.log(rectangle.area());
// console.log(rectangle.getDescription());

// const shape =new Shape('red');
// console.log(shape.paint());
// console.log(shape.getDescription());

