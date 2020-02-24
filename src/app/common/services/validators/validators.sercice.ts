import { Injectable } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { requiredValidator } from 'app/common/validators/required.validator';
import { emailValidator } from 'app/common/validators/email.validator';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {

    constructor() {}

    public getValidatorByName(name: string): ValidatorFn {
        switch (name) {
			case "requiredValidator":
                return requiredValidator;
            case "emailValidator":
                return emailValidator;
			default:
				throw new Error(('Unknown kind of validator!'));
		}

    }

}