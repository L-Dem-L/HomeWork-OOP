// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages"

// Import modules
import { Car } from "./scripts/modules/Car";
import { Fraction } from "./scripts/modules/Fraction";
import { Time } from "./scripts/modules/Time";
// Import utils

// Bisiness logic
// Task1
const car = new Car("Toyota", "Camry", 2021, 120);
car.displayInfo();
console.log(car.calculateTravelTime(1000));


//Task2
const fraction1 = new Fraction(1, 2); // 1/2
const fraction2 = new Fraction(3, 4); // 3/4
const fraction3 = new Fraction(4, 6); // 4/6

const add = fraction1.add(fraction2);
console.log(add); // Виведе {numerator: 5, denominator: 4}

const subtract = fraction1.subtract(fraction2);
console.log(subtract); // Виведе {numerator: 1, denominator: -4}

const multiply = fraction1.multiply(fraction2);
console.log(multiply); // Виведе {numerator: 3, denominator: 8}

const divide = fraction1.divide(fraction2);
console.log(divide); // Виведе {numerator: 2, denominator: 3}

const reduce = fraction3.reduce();
console.log(reduce); // Виведе {numerator: 2, denominator: 3}

//Task3
const time = new Time(10, 30, 45);
time.printTime(); // виведе "10:30:45"
time.addSeconds(30);
time.printTime(); // виведе "10:31:15"
time.addMinutes(45);
time.printTime(); // виведе "11:16:15"
time.addHours(4);
time.printTime(); // виведе "15:16:15"