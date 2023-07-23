import type { Request, Response } from 'express';
import { CALCULATOR_PRIME_NUMBER_NAN_ERROR_RESPONSE } from '../../../../responses/error-responses/calculator-errors';
import { CALCULATOR_PRIME_NUMBER_SUCCESS } from '../../../../responses/success_responses/calculator-successes';
import { UNDEFINED_PARAMETERS } from '../../../../responses/error-responses/common-errors';
import { findNextPrimeNumber, findPreviousPrimeNumber, generatePrimeNumbers, isPrime } from '../../../../models/data-models/system/calculators/math/prime-numbers-calculators';

export function primeNumberVerificationController (request: Request, response: Response): boolean {
    if (request.query.PRIME_NUMBER !== undefined) {
        const PRIME_NUMBER = parseFloat(String(request.query.PRIME_NUMBER));
        if (Number.isNaN(PRIME_NUMBER)) {
            response.json(CALCULATOR_PRIME_NUMBER_NAN_ERROR_RESPONSE);
            return false;
        }
        const RESULT = isPrime(PRIME_NUMBER);
        CALCULATOR_PRIME_NUMBER_SUCCESS.result = RESULT;
        // Since the object is going to be reused, need to store and reset the description after tampering
        const PREVIOUS_DESCRIPTION = CALCULATOR_PRIME_NUMBER_SUCCESS.description;
        if (RESULT) {
            CALCULATOR_PRIME_NUMBER_SUCCESS.description = 'Prime Number';
        } else {
            CALCULATOR_PRIME_NUMBER_SUCCESS.description = 'Not Prime Number';
        }
        CALCULATOR_PRIME_NUMBER_SUCCESS.description = PREVIOUS_DESCRIPTION;
        response.json(CALCULATOR_PRIME_NUMBER_SUCCESS);
        return true;
    }
    response.json(UNDEFINED_PARAMETERS);
    return false;
};

export function generatePrimeNumbersController (request: Request, response: Response): boolean {
    if (request.query.START !== undefined && request.query.END !== undefined) {
        const START = parseFloat(String(request.query.START));
        const END = parseFloat(String(request.query.END));
        if (Number.isNaN(START) || Number.isNaN(END)) {
            response.json(CALCULATOR_PRIME_NUMBER_NAN_ERROR_RESPONSE);
            return false;
        }
        CALCULATOR_PRIME_NUMBER_SUCCESS.result = generatePrimeNumbers(START, END);
        response.json(CALCULATOR_PRIME_NUMBER_SUCCESS);
        return true;
    }
    response.json(UNDEFINED_PARAMETERS);
    return false;
};

export function findPreviousPrimeNumberController (request: Request, response: Response): boolean {
    if (request.query.NUMBER !== undefined) {
        const NUMBER = parseFloat(String(request.query.NUMBER));
        if (Number.isNaN(NUMBER)) {
            response.json(CALCULATOR_PRIME_NUMBER_NAN_ERROR_RESPONSE);
            return false;
        }
        CALCULATOR_PRIME_NUMBER_SUCCESS.result = findPreviousPrimeNumber(NUMBER);
        response.json(CALCULATOR_PRIME_NUMBER_SUCCESS);
        return true;
    }
    response.json(UNDEFINED_PARAMETERS);
    return false;
};

export function findNextPrimeNumberController (request: Request, response: Response): boolean {
    if (request.query.NUMBER !== undefined) {
        const NUMBER = parseFloat(String(request.query.NUMBER));
        if (Number.isNaN(NUMBER)) {
            response.json(CALCULATOR_PRIME_NUMBER_NAN_ERROR_RESPONSE);
            return false;
        }
        CALCULATOR_PRIME_NUMBER_SUCCESS.result = findNextPrimeNumber(NUMBER);
        response.json(CALCULATOR_PRIME_NUMBER_SUCCESS);
        return true;
    }
    response.json(UNDEFINED_PARAMETERS);
    return false;
};
