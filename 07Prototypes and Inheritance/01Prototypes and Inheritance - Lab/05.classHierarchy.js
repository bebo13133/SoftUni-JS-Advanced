function classHierarchy() {
    class Figure {
        constructor() {
            this.units = 'cm';
        }

        changeUnits(unit) {
            this.units = unit;
        }

        conversion(value) {
            if (this.units == 'm') value /= 10;
            if (this.units == 'mm') value *= 10;
            return value;
        }
        
        toString() {
            return `Figure units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }
        get area() {
            this.radius = super.conversion(this._radius);
            return Math.PI * this.radius * this.radius;
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
            this.units = units;
        }
        get area() {
            this.width = super.conversion(this._width);
            this.height = super.conversion(this._height);
            return this.width * this.height;
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }
    return { Figure, Circle, Rectangle };
}

let test = classHierarchy();

let c = new test.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new test.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50