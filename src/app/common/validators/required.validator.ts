import { ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { ITGeoAbstractControl } from '@it-geo-models/form-control-dto';

export const requiredValidator: ValidatorFn = (formControl: ITGeoAbstractControl): ValidationErrors => {
	const errors: { [key: string]: string } = {};
	if (!formControl.value) {
		errors.requiredField = 'validators.required.'.concat(formControl.name);
	}
	return Object.keys(errors).length > 0 ? errors : null;
};
