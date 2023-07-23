
export interface CalculatorSuccess {
    status: string
    code?: string
    description: string
    result: number | string | boolean | object
}
export const CALCULATOR_SUCCESS: CalculatorSuccess = {
    status: 'SUCCESS',
    description: 'The calculation computation has successfully been performed',
    result: 0
};

export const CALCULATOR_PERCENTAGE_SUCCESS: CalculatorSuccess = Object.assign({}, CALCULATOR_SUCCESS, {
    code: 'CALC_PERC_SUCC',
    description: 'Percentage successfully calculated',
    result: 0
});

export const CALCULATOR_PRIME_NUMBER_SUCCESS: CalculatorSuccess = Object.assign({}, CALCULATOR_SUCCESS, {
    code: 'CALC_PRI_NUM_SUCC',
    description: 'Prime Number successfully calculated',
    result: 0
});

export const CALCULATOR_ADDING_MACHINE_SUCCESS: CalculatorSuccess = Object.assign({}, CALCULATOR_SUCCESS, {
    code: 'CALC_ADD_MAC_SUCC',
    description: 'Adding Machine Entries successfully calculated',
    result: 0
});

export const CALCULATOR_ABSOLUTE_DIFFERENCE_SUCCESS: CalculatorSuccess = Object.assign({}, CALCULATOR_SUCCESS, {
    code: 'CALC_ABS_DIF_SUCC',
    description: 'Absolute Difference successfully calculated',
    result: 0
});
