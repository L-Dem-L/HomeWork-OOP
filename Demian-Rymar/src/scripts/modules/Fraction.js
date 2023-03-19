export class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    add(otherFraction) {
        const commonDenominator = this.denominator * otherFraction.denominator;
        const numeratorSum = (this.numerator * otherFraction.denominator) + (otherFraction.numerator * this.denominator);

        return new Fraction(numeratorSum, commonDenominator).reduce();
    }

    subtract(otherFraction) {
        const commonDenominator = this.denominator * otherFraction.denominator;
        const numeratorDifference = (this.numerator * otherFraction.denominator) - (otherFraction.numerator * this.denominator);

        return new Fraction(numeratorDifference, commonDenominator).reduce();
    }

    multiply(otherFraction) {
        const numeratorProduct = this.numerator * otherFraction.numerator;
        const denominatorProduct = this.denominator * otherFraction.denominator;

        return new Fraction(numeratorProduct, denominatorProduct).reduce();
    }

    divide(otherFraction) {
        const numeratorQuotient = this.numerator * otherFraction.denominator;
        const denominatorQuotient = this.denominator * otherFraction.numerator;

        return new Fraction(numeratorQuotient, denominatorQuotient).reduce();
    }

    reduce() {
        const gcd = this.getGcd(this.numerator, this.denominator);

        return new Fraction(this.numerator / gcd, this.denominator / gcd);
    }

    getGcd(a, b) {
        if (b === 0) {
            return a;
        } else {
            return this.getGcd(b, a % b);
        }
    }
}