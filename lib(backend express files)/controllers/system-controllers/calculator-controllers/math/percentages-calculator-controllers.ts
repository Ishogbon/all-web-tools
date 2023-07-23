import type { Request, Response } from 'express';
import { CALCULATOR_PERCENTAGE_NAN_ERROR_RESPONSE } from '../../../../responses/error-responses/calculator-errors';
import { applyPercentageChange, calculateNumberAsPercentageOfNumber, calculateNumberOfPercent, calculatePercentOfNumber, calculatePercentageChange, percentageToDecimal, percentageToFraction } from '../../../../models/system/calculators/math/percent-calculators';
import { CALCULATOR_PERCENTAGE_SUCCESS } from '../../../../responses/success_responses/calculator-successes';
import { UNDEFINED_PARAMETERS } from '../../../../responses/error-responses/common-errors';
import { toMixedFraction } from '../../../../models/system/calculators/math/fraction-calculators';

interface FractionParts {
    wholeNumber: number
    numerator: number
    denominator: number
}

function separateFraction (fraction: string): FractionParts {
    const parts = fraction.split(' ');

    let wholeNumber = 0;
    let numerator = 0;
    let denominator = 1;

    if (parts.length === 2) {
        wholeNumber = parseInt(parts[0]);
        fraction = parts[1];
    }

    if (fraction.includes('/')) {
        const [num, den] = fraction.split('/');
        numerator = parseInt(num);
        denominator = parseInt(den);
    } else {
        wholeNumber += parseInt(fraction);
    }

    return {
        wholeNumber,
        numerator,
        denominator
    };
}

export function calculatePercentOfNumberController (request: Request, response: Response): boolean {
    console.log(request.query);
    if (request.query.PERCENTAGE !== undefined && request.query.NUMBER !== undefined) {
        const PERCENTAGE = parseFloat(String(request.query.PERCENTAGE));
        const NUMBER = parseFloat(String(request.query.NUMBER));
        if (Number.isNaN(PERCENTAGE) || Number.isNaN(NUMBER)) {
            response.json(CALCULATOR_PERCENTAGE_NAN_ERROR_RESPONSE);
            return false;
        }
        CALCULATOR_PERCENTAGE_SUCCESS.result = Math.round(calculatePercentOfNumber(PERCENTAGE, NUMBER) * 100) / 100;
        response.json(CALCULATOR_PERCENTAGE_SUCCESS);
        return true;
    }
    response.json(UNDEFINED_PARAMETERS);
    return false;
};

export function calculateNumberOnNumberAsPercentController (request: Request, response: Response): boolean {
    console.log(request.query);
    if (request.query.NUMBER !== undefined && request.query.MAIN_NUMBER !== undefined) {
        const NUMBER = parseFloat(String(request.query.NUMBER));
        const MAIN_NUMBER = parseFloat(String(request.query.MAIN_NUMBER));
        if (Number.isNaN(NUMBER) || Number.isNaN(MAIN_NUMBER)) {
            response.json(CALCULATOR_PERCENTAGE_NAN_ERROR_RESPONSE);
            return false;
        }
        CALCULATOR_PERCENTAGE_SUCCESS.result = Math.round(calculateNumberAsPercentageOfNumber(NUMBER, MAIN_NUMBER) * 100) / 100;
        response.json(CALCULATOR_PERCENTAGE_SUCCESS);
        return true;
    }
    response.json(UNDEFINED_PARAMETERS);
    return false;
};

export function calculateNumberOfPercentController (request: Request, response: Response): boolean {
    console.log(request.query);
    if (request.query.NUMBER !== undefined && request.query.PERCENTAGE !== undefined) {
        const NUMBER = parseFloat(String(request.query.NUMBER));
        const PERCENTAGE = parseFloat(String(request.query.PERCENTAGE));
        if (Number.isNaN(NUMBER) || Number.isNaN(PERCENTAGE)) {
            response.json(CALCULATOR_PERCENTAGE_NAN_ERROR_RESPONSE);
            return false;
        }
        let result = Math.round(calculateNumberOfPercent(NUMBER, PERCENTAGE) * 100) / 100;
        result = isFinite(result) ? result : 0;
        CALCULATOR_PERCENTAGE_SUCCESS.result = result;
        response.json(CALCULATOR_PERCENTAGE_SUCCESS);
        return true;
    }
    response.json(UNDEFINED_PARAMETERS);
    return false;
};
export function calculatePercentageChangeController (request: Request, response: Response): boolean {
    console.log(request.query);
    if (request.query.OLD_NUMBER !== undefined && request.query.NEW_NUMBER !== undefined) {
        const OLD_NUMBER = parseFloat(String(request.query.OLD_NUMBER));
        const NEW_NUMBER = parseFloat(String(request.query.NEW_NUMBER));
        if (Number.isNaN(OLD_NUMBER) || Number.isNaN(NEW_NUMBER)) {
            response.json(CALCULATOR_PERCENTAGE_NAN_ERROR_RESPONSE);
            return false;
        }
        let result = Math.round(calculatePercentageChange(OLD_NUMBER, NEW_NUMBER) * 100) / 100;
        result = isFinite(result) ? result : 0;
        CALCULATOR_PERCENTAGE_SUCCESS.result = result;
        response.json(CALCULATOR_PERCENTAGE_SUCCESS);
        return true;
    }
    response.json(UNDEFINED_PARAMETERS);
    return false;
};

export function percentageApplicationToNumberController (request: Request, response: Response): boolean {
    console.log(request.query);
    if (request.query.NUMBER !== undefined && request.query.PERCENTAGE !== undefined) {
        const NUMBER = parseFloat(String(request.query.NUMBER));
        const PERCENTAGE = parseFloat(String(request.query.PERCENTAGE));
        // Sets increase to automatically be true, if the TO_INCREASE_DECREASE parameter wasn't set
        const INCREASE = typeof request.query.TO_INCREASE_DECREASE !== 'string' ? true : request.query.TO_INCREASE_DECREASE !== 'decrease';
        if (Number.isNaN(NUMBER) || Number.isNaN(PERCENTAGE)) {
            response.json(CALCULATOR_PERCENTAGE_NAN_ERROR_RESPONSE);
            return false;
        }
        let result = Math.round(applyPercentageChange(NUMBER, PERCENTAGE, INCREASE) * 100) / 100;
        result = isFinite(result) ? result : 0;
        CALCULATOR_PERCENTAGE_SUCCESS.result = result;
        response.json(CALCULATOR_PERCENTAGE_SUCCESS);
        return true;
    }
    response.json(UNDEFINED_PARAMETERS);
    return false;
};

export function percentageToFractionController (request: Request, response: Response): boolean {
    console.log(request.query);
    if (request.query.PERCENTAGE !== undefined) {
        const PERCENTAGE = parseFloat(String(request.query.PERCENTAGE));
        if (Number.isNaN(PERCENTAGE)) {
            response.json(CALCULATOR_PERCENTAGE_NAN_ERROR_RESPONSE);
            return false;
        }
        // Sets increase to automatically be true, if the FRACTION_TYPE parameter wasn't set
        const FRACTION_TYPE = request.query.FRACTION_TYPE;
        let result = percentageToFraction(PERCENTAGE);
        if (FRACTION_TYPE !== undefined && FRACTION_TYPE === 'mixed') {
            result = toMixedFraction(result);
        }
        CALCULATOR_PERCENTAGE_SUCCESS.result = separateFraction(result);
        response.json(CALCULATOR_PERCENTAGE_SUCCESS);
        return true;
    }
    response.json(UNDEFINED_PARAMETERS);
    return false;
};

export function percentageToDecimalController (request: Request, response: Response): boolean {
    if (request.query.PERCENTAGE !== undefined) {
        const PERCENTAGE = parseFloat(String(request.query.PERCENTAGE));
        if (Number.isNaN(PERCENTAGE)) {
            response.json(CALCULATOR_PERCENTAGE_NAN_ERROR_RESPONSE);
            return false;
        }
        CALCULATOR_PERCENTAGE_SUCCESS.result = percentageToDecimal(PERCENTAGE);
        response.json(CALCULATOR_PERCENTAGE_SUCCESS);
        return true;
    }
    response.json(UNDEFINED_PARAMETERS);
    return false;
};
