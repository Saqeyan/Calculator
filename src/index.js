function Calculator() {
    this.numbers = function () {
        this.a = prompt('a');
        this.b = prompt('b');
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
if (typeof calculator.a == "number" && typeof calculator.b == "number")  {
    alert(calculator.sum());
    alert(calculator.removed());
    alert(calculator.mul());
    alert(calculator.divide());
} else {
    alert('write number');
}