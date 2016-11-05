export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'This field is required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidUsername': 'Invalid username',
            'invalidPhone': 'Invalid phone number',
            'invalidEmail': 'Invalid email address',
            'invalidPassword': 'Password must be at least 6 characters long, and contain a number.',
            'minlength': `Must be at least ${validatorValue.requiredLength} characters`,
            'maxlength': `Must not be more than ${validatorValue.requiredLength} characters`
        };
        return config[validatorName];
    }

    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    static phoneNumberValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^[0-9]{8,11}$/)) {
            return null;
        } else {
            return { 'invalidPhone': true };
        }
    }

    static userNameValidator(control) {
        if (control.value.match(/^[a-zA-Z0-9._-]+$/)) {
            return null;
        } else {
            return { 'invalidUsername': true };
        }
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmail': true };
        }
    }

    static passwordValidator(control) {
        // {6,10}           - Assert password is between 6 and 10 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,10}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
}

