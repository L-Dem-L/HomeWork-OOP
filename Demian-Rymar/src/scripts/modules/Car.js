export class Car {
    constructor(manufacturer, model, year, avgSpeed) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.avgSpeed = avgSpeed;
    }

    // Функція для виведення інформації про автомобіль на екран.
    displayInfo() {
        console.log(`Manufacturer: ${ this.manufacturer }\nModel: ${ this.model }\nYear: ${ this.year }\nAverage speed: ${ this.avgSpeed } km/h`);
    }

    // Функція для підрахунку необхідного часу для подолання переданої відстані із середньою швидкістю.
    calculateTravelTime(distance) {
        let travelTime = distance / this.avgSpeed;
        const restTime = Math.floor(travelTime / 4);
        travelTime += restTime;
        return travelTime;
    }
}