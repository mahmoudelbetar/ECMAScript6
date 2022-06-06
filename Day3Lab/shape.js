class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(value) {
        this.width = value;
    }
    getHeight() {
        return this.height;
    }
    setHeight(value) {
        this.height = value;
    }
    toString() {
        return `Area = ${this.area()}, Preimeter = ${this.preimeter()}`;
    }
}

class Square extends Shape {
    constructor(width) {
        super(width);
    }
    area() {
        return this.width * this.width;
    }
    preimeter() {
        return this.width * 4;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    area() {
        return this.width * this.height;
    }
    preimeter() {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return 3.14 * this.radius * this.radius;
    }
    preimeter() {
        return 2 * 3.14 * this.radius;
    }
}

export { Circle, Rectangle, Shape, Square };