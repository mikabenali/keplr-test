import {ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

const REGEX = /^(?=.)([+-]?([0-9]*)(\.([0-9]+))?)$/;
const MESSAGE = 'Value $(value) must be a float number';

@ValidatorConstraint({name: 'isFloat', async: false})
export default class IsFloatValidator implements ValidatorConstraintInterface {
    public validate(value: string) {
       return REGEX.test(value);
    }

    public defaultMessage(validationArguments?: ValidationArguments): string {
        return MESSAGE;
    }
}

