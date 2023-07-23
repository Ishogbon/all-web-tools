export const COMMON_ERROR_RESPONSE = {
    status: 'ERROR',
    description: 'A common error has occured'
};

export const UNDEFINED_PARAMETERS = Object.assign({}, COMMON_ERROR_RESPONSE, {
    code: 'UDF_PARAMS',
    description: 'One or more parameters was not defined'
});
