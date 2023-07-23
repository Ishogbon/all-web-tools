import type { Request, Response } from 'express';
import { addingMachine } from '../../../../models/data-models/system/calculators/finance/adding-machine-calculator';
import { CALCULATOR_ADDING_MACHINE_NOT_AN_ENTRY_OBJECT_ERROR_RESPONSE } from '../../../../responses/error-responses/calculator-errors';
import { UNDEFINED_PARAMETERS } from '../../../../responses/error-responses/common-errors';
import { CALCULATOR_ADDING_MACHINE_SUCCESS } from '../../../../responses/success_responses/calculator-successes';

export function addingMachineController (request: Request, response: Response): boolean {
    if (request.body.ADDING_MACHINE_ENTRIES !== undefined) {
        const ENTRY = request.body.ADDING_MACHINE_ENTRIES;
        if (!Array.isArray(ENTRY)) {
            response.json(CALCULATOR_ADDING_MACHINE_NOT_AN_ENTRY_OBJECT_ERROR_RESPONSE);
            return false;
        }
        const RESULT_TOTAL = addingMachine(ENTRY);
        CALCULATOR_ADDING_MACHINE_SUCCESS.result = [ENTRY, RESULT_TOTAL];
        response.json(CALCULATOR_ADDING_MACHINE_SUCCESS);
        return true;
    }
    response.json(UNDEFINED_PARAMETERS);
    return false;
};
