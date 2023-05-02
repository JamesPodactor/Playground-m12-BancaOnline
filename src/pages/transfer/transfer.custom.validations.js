export const dayValidator = fieldValidatorArgs => {
    const { value } = fieldValidatorArgs;
    const validatorType = 'wrong day';
    const validationResult = {
        succeeded: false,
        type: validatorType,
        message: 'El día introducido no es correcto',
    };

    if (parseInt(value) > 0 && parseInt(value) <= 31) {
        validationResult.succeeded = true;
        validationResult.message = '';
    }

    return validationResult;
};

export const monthValidator = fieldValidatorArgs => {
    const { value } = fieldValidatorArgs;
    const validatorType = 'wrong month';
    const validationResult = {
        succeeded: false,
        type: validatorType,
        message: 'El mes introducido no es correcto',
    };

    if (parseInt(value) >= 1 && parseInt(value) <= 12) {
        validationResult.succeeded = true;
        validationResult.message = '';
    }

    return validationResult;
};

export const yearValidator = fieldValidatorArgs => {
    const { value } = fieldValidatorArgs;
    const validatorType = 'wrong year';
    const validationResult = {
        succeeded: false,
        type: validatorType,
        message: 'El año introducido no es correcto',
    };

    if (parseInt(value) >= 2023 && parseInt(value) <= 2025) {
        validationResult.succeeded = true;
        validationResult.message = '';
    }

    return validationResult;
};