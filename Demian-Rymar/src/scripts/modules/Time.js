export class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    addSeconds(secondsToAdd) {
        const totalSeconds = this.seconds + secondsToAdd;
        const newSeconds = totalSeconds % 60;
        const minutesToAdd = Math.floor(totalSeconds / 60);
        this.seconds = newSeconds;
        this.addMinutes(minutesToAdd);
    }

    addMinutes(minutesToAdd) {
        const totalMinutes = this.minutes + minutesToAdd;
        const newMinutes = totalMinutes % 60;
        const hoursToAdd = Math.floor(totalMinutes / 60);
        this.minutes = newMinutes;
        this.addHours(hoursToAdd);
    }

    addHours(hoursToAdd) {
        const newHours = (this.hours + hoursToAdd) % 24;
        this.hours = newHours;
    }
}
