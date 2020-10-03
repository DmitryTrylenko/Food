class Rectangle {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }

    double() {
        return this.width * this.height;
    }

}

const squer = new Rectangle(10, 10);
console.log(squer.double());