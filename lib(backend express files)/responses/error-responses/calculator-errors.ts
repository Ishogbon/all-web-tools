
export const CALCULATOR_ERROR_RESPONSE = {
    status: 'ERROR',
    description: 'A calculation error has occurred'
};

export const CALCULATOR_PERCENTAGE_NAN_ERROR_RESPONSE = Object.assign({}, CALCULATOR_ERROR_RESPONSE, {
    code: 'CALC_PERC_NAN_ERR',
    description: 'One or all of the values passed is not a number'
});

export const CALCULATOR_PRIME_NUMBER_NAN_ERROR_RESPONSE = Object.assign({}, CALCULATOR_ERROR_RESPONSE, {
    code: 'CALC_PRI_NUM_NAN_ERR',
    description: 'One or all of the values passed is not a number'
});

export const CALCULATOR_ADDING_MACHINE_NOT_AN_ENTRY_OBJECT_ERROR_RESPONSE = Object.assign({}, CALCULATOR_ERROR_RESPONSE, {
    code: 'CALC_ADD_MAC_NOT_ETY_ERR',
    description: 'Value passed is not an entry object'
});

export const CALCULATOR_ABSOLUTE_DIFFERENCE_NAN_ERROR_RESPONSE = Object.assign({}, CALCULATOR_ERROR_RESPONSE, {
    code: 'CALC_ABS_DIF_NAN_ERR',
    description: 'One or all of the value passed is not a number'
});
