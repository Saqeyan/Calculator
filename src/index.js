function Calculator() {
    this.numbers = function () {
        this.a = +prompt('a');
        this.b = +prompt('b');
        if (isNaN(this.a) || isNaN(this.b)) {
            alert('write number');
        } else {
            alert(calculator.sum());
            alert(calculator.removed());
            alert(calculator.mul());
            alert(calculator.divide());
        }

    }
    this.sum = function () {
        return this.a + this.b;
    }
    this.removed = function () {
        return this.a - this.b;
    }
    this.mul = function () {
        return this.a * this.b;
    }
    this.divide = function () {
        return this.a / this.b;
    }
}
let calculator = new Calculator();
calculator.numbers();
