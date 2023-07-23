import { decimalToFraction } from './fraction-calculators';

// Calculates the the result of percentage on a number
export function calculatePercentOfNumber (percent: number, number: number): number {
    return (percent / 100) * number;
}

// Calculates a number is the percentage of total number
export function calculateNumberAsPercentageOfNumber (part: number, total: number): number {
    return (part / total) * 100;
}

// Calcultes main number with percentage and part number
export function calculateNumberOfPercent (part: number, percentage: number): number {
    return (part / (percentage / 100));
}

// Converts percentage to fraction
export function percentageToFraction (percentage: number): string {
    const decimal = percentage / 100;
    const fraction = decimalToFraction(decimal);
    return fraction;
}

// Converts percentage to decimal
export function percentageToDecimal (percentage: number): number {
    return percentage / 100;
}

// Calculates Increase or Decrease by percent to number
export function applyPercentageChange (number: number, percent: number, increase: boolean): number {
    const decimal = percent / 100;
    const change = increase ? (1 + decimal) : (1 - decimal);
    return number * change;
}

// Calculates percentage difference in two values
export function calculatePercentageChange (oldValue: number, newValue: number): number {
    const difference = newValue - oldValue;
    const change = (difference / oldValue) * 100;
    return change;
}
