import { Injectable } from '@angular/core';
import { ITGeoFormControl } from '@it-geo-models/form-control-dto';
import { ValidatorFn } from '@angular/forms';
import { ValidatorsService } from '@it-geo-services/validators/validators.sercice';
import { MasksService } from '@it-geo-services/masks/masks.service';

@Injectable({ providedIn: 'root' })
export class FormControlService {

    constructor(
        private validatorsService: ValidatorsService,
        private masksService: MasksService,
    ) {}
    
    public getFormControlsList(includeFields : Array<number>, templateFields : DynamicFormFieldsDTO) {

    } 
   
    private getFiedlState(field: DynamicFormFieldDTO): ITGeoFormControl {
		const fc = new ITGeoFormControl();
		fc.setValidators(this.getValidatorsByName(field.validators));
		fc.setValue(field.defaultValue);
		fc[field.disabled]();
		fc.placeholder = field.placeholder;
		fc.mask = field.mask ? this.masksService.getMaskByName(field.mask) : null;
		fc.label = field.label;
        fc.fieldType = field.fieldType;
        fc.inputType = field.inputType;
		fc.autocomplete = field.autocomplete;
		fc.required = field.required;
		fc.name = field.toString();
		fc.updateValueAndValidity();
		return fc;
    }
    
    private getValidatorsByName(validators: Array<string>): Array<ValidatorFn> {
        if (!validators || !validators.length) { return null}
        const validatorsArray: Array<ValidatorFn> = [];
        validators.forEach(validator => validatorsArray.push(this.validatorsService.getValidatorByName(validator)));
        console.log(validatorsArray);
        return validatorsArray;
    }
}