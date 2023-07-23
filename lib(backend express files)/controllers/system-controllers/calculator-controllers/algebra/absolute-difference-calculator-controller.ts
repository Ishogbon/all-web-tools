import type { Request, Response } from 'express';
import { CALCULATOR_ABSOLUTE_DIFFERENCE_NAN_ERROR_RESPONSE } from '../../../../responses/error-responses/calculator-errors';
import { CALCULATOR_ABSOLUTE_DIFFERENCE_SUCCESS } from '../../../../responses/success_responses/calculator-successes';
import { absoluteDifferenceCalculator } from '../../../../models/data-models/system/calculators/algebra/absolute-difference-calculator';
import { UNDEFINED_PARAMETERS } from '../../../../responses/error-responses/common-errors';

export function calculateAbsoluteDifferenceController (request: Request, response: Response): boolean {
    if (request.query.X_VALUE !== undefined && request.query.Y_VALUE !== undefined) {
        const X_VALUE = parseFloat(String(request.query.X_VALUE));
        const Y_VALUE = parseFloat(String(request.query.Y_VALUE));
        if (Number.isNaN(X_VALUE) || Number.isNaN(Y_VALUE)) {
            response.json(CALCULATOR_ABSOLUTE_DIFFERENCE_NAN_ERROR_RESPONSE);
            return false;
        }
        CALCULATOR_ABSOLUTE_DIFFERENCE_SUCCESS.result = absoluteDifferenceCalculator(X_VALUE, Y_VALUE);
        response.json(CALCULATOR_ABSOLUTE_DIFFERENCE_SUCCESS);
        return true;
    }
    response.json(UNDEFINED_PARAMETERS);
    return false;
};
