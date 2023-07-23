import { gcf } from './gcf(greatest-common-factor)-calculator';

// Converts decimalToFraction
export function decimalToFraction (decimal: number): string {
    const tolerance = 1.0E-6;
    let numerator = 1;
    let denominator = 1;
    let error = decimal - numerator / denominator;
    while (Math.abs(error) > tolerance && denominator < 1000) {
        if (error > 0) {
            numerator++;
        } else {
            denominator++;
        }
        error = decimal - numerator / denominator;
    }
    return `${numerator}/${denominator}`;
}

// Converts fraction to decimal
export function convertFractionToDecimal (fraction: string): number {
    const [numerator, denominator] = fraction.split('/');
    return parseFloat(numerator) / parseFloat(denominator);
}

// Converts fraction to percentage
export function fractionToPercentage (numerator: number, denominator: number): number {
    return (numerator / denominator) * 100;
}

// Perform operations on two fractions
export function performFractionOperation (fraction1: string, fraction2: string, operand: string): string {
    const [numerator1, denominator1] = fraction1.split('/').map(Number);
    const [numerator2, denominator2] = fraction2.split('/').map(Number);
    let resultNumerator: number, resultDenominator: number;
    switch (operand) {
        case '+':
            resultNumerator = numerator1 * denominator2 + numerator2 * denominator1;
            resultDenominator = denominator1 * denominator2;
            break;
        case '-':
            resultNumerator = numerator1 * denominator2 - numerator2 * denominator1;
            resultDenominator = denominator1 * denominator2;
            break;
        case '*':
            resultNumerator = numerator1 * numerator2;
            resultDenominator = denominator1 * denominator2;
            break;
        case '/':
            resultNumerator = numerator1 * denominator2;
            resultDenominator = denominator1 * numerator2;
            break;
        default:
            throw new Error(`Invalid operand: ${operand}`);
    }
    return `${resultNumerator}/${resultDenominator}`;
}

// performMixedNumberOperation('2 1/4', '2 5/6', '+')
export function performMixedNumberOperation (mixedNumber1: string, mixedNumber2: string, operand: string): string {
    const [whole1, fraction1] = mixedNumber1.split(' ');
    const [whole2, fraction2] = mixedNumber2.split(' ');
    const [numerator1, denominator1] = fraction1.split('/').map(Number);
    const [numerator2, denominator2] = fraction2.split('/').map(Number);
    let resultWhole: number, resultNumerator: number, resultDenominator: number;
    switch (operand) {
        case '+': {
            resultWhole = Number(whole1) + Number(whole2);
            resultNumerator = numerator1 * denominator2 + numerator2 * denominator1;
            resultDenominator = denominator1 * denominator2;
            break;
        }
        case '-': {
            resultWhole = Number(whole1) - Number(whole2);
            resultNumerator = numerator1 * denominator2 - numerator2 * denominator1;
            resultDenominator = denominator1 * denominator2;
            break;
        }
        case '*': {
            const mixedNumber1Value = Number(whole1) + numerator1 / denominator1;
            const mixedNumber2Value = Number(whole2) + numerator2 / denominator2;
            const resultValue = mixedNumber1Value * mixedNumber2Value;
            resultWhole = Math.floor(resultValue);
            const resultFractionValue = resultValue - resultWhole;
            const resultFraction = simplifyFraction(resultFractionValue);
            resultNumerator = resultFraction.numerator;
            resultDenominator = resultFraction.denominator;
            break;
        }
        case '/': {
            const mixedNumber1Value = Number(whole1) + numerator1 / denominator1;
            const mixedNumber2Value = Number(whole2) + numerator2 / denominator2;
            const resultValue = mixedNumber1Value / mixedNumber2Value;
            resultWhole = Math.floor(resultValue);
            const resultFractionValue = resultValue - resultWhole;
            const resultFraction = simplifyFraction(resultFractionValue);
            resultNumerator = resultFraction.numerator;
            resultDenominator = resultFraction.denominator;
            break;
        }
        default:
            throw new Error(`Invalid operand: ${operand}`);
    }
    if (resultNumerator === 0) {
        return `${resultWhole}`;
    } else if (resultWhole === 0) {
        return `${resultNumerator}/${resultDenominator}`;
    } else {
        return `${resultWhole} ${resultNumerator}/${resultDenominator}`;
    }
}

function simplifyFraction (value: number): { numerator: number, denominator: number } {
    let numerator = Math.round(value * 100000);
    let denominator = 100000;
    while (numerator % 2 === 0 && denominator % 2 === 0) {
        numerator /= 2;
        denominator /= 2;
    }
    while (numerator % 5 === 0 && denominator % 5 === 0) {
        numerator /= 5;
        denominator /= 5;
    }
    return { numerator, denominator };
}

// Simplify fraction for both mixed and simple simplifyFractionMixedSimple('2 2/5')
export function simplifyStringFraction (fraction: string): string {
    let [wholeStr, fractionStr] = fraction.split(' ');
    if (fraction.indexOf(' ') <= 0) {
        fractionStr = wholeStr;
        wholeStr = '';
    }
    const [numeratorStr, denominatorStr] = fractionStr.split('/');

    const numerator = parseInt(numeratorStr.length > 0 ? numeratorStr : '0');
    const denominator = parseInt(denominatorStr.length > 0 ? denominatorStr : '1');

    if (denominator === 0) {
        return 'NaN';
    }

    const isMixedFraction = wholeStr !== undefined && wholeStr !== '';

    if (isMixedFraction) {
        const whole = parseInt(wholeStr.length > 0 ? wholeStr : '0');
        const simplifiedNumerator = whole * denominator + numerator;

        const gcd = gcf([simplifiedNumerator, denominator]);
        const simplifiedNumeratorFinal = simplifiedNumerator / gcd;
        const simplifiedDenominator = denominator / gcd;

        return `${simplifiedNumeratorFinal}/${simplifiedDenominator}`;
    } else {
        const gcd = gcf([numerator, denominator]);
        const simplifiedNumerator = numerator / gcd;
        const simplifiedDenominator = denominator / gcd;

        return `${simplifiedNumerator}/${simplifiedDenominator}`;
    }
}

export function toMixedFraction (fraction: string): string {
    const [numeratorStr, denominatorStr] = fraction.split('/');
    const numerator = parseInt(numeratorStr);
    const denominator = parseInt(denominatorStr);

    const whole = Math.floor(numerator / denominator);
    const remainder = numerator % denominator;

    if (remainder === 0) {
        return `${whole}`;
    } else {
        return `${whole} ${remainder}/${denominator}`;
    }
}
