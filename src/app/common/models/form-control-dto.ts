import { AbstractControl, ValidatorFn, AbstractControlOptions, AsyncValidatorFn, FormArray, FormControl, FormGroup } from '@angular/forms';

export type FormControlAutocompleteDTO = 'off' | 'on';

export type FormControlFieldTypeDTO = 'input' | 'checkbox' | 'radio' | 'select';

export type FormControInputTypeDTO = 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url' | 'week';

export type FormControlDisabledPropertyDTO = 'disable' | 'enable';

export interface FormControlSelectOptionDTO {
    key : string;
    value : string;
} 

export abstract class ITGeoAbstractControl extends AbstractControl {
	name? : string;
    fieldType? : FormControlFieldTypeDTO;
    inputType? : FormControInputTypeDTO;
    label? : string;
    disabledProperty? : FormControlDisabledPropertyDTO;
    autocomplete? : FormControlAutocompleteDTO;
    defaultValue? : string | number | boolean;
    options? : FormControlSelectOptionDTO;
    placeholder? : string;
    tooltip? : string;
    required? : boolean;
    mask? : InputMask;
    validators? : Array<string>;
    style?: string;
}

export class ITGeoFormControl extends FormControl {
	name? : string;
    fieldType? : FormControlFieldTypeDTO;
    inputType? : FormControInputTypeDTO;
    label? : string;
    disabledProperty? : FormControlDisabledPropertyDTO;
    autocomplete? : FormControlAutocompleteDTO;
    defaultValue? : string | number | boolean;
    options? : FormControlSelectOptionDTO;
    placeholder? : string;
    tooltip? : string;
    required? : boolean;
    mask? : InputMask;
    validators? : Array<string>;
    style?: string;
}

export class ITGeoFormArray extends FormArray {

	constructor(public controls: ITGeoAbstractControl[],
		validatorOrOpts?: ValidatorFn|ValidatorFn[]|AbstractControlOptions|null,
		asyncValidator?: AsyncValidatorFn|AsyncValidatorFn[]|null) {
		super(controls, validatorOrOpts, asyncValidator);
	}

	at(index: number): ITGeoAbstractControl { return this.controls[index]; }
	insert(index: number, control: ITGeoAbstractControl): void {
		super.insert(index, control);
	}
	setControl(index: number, control: ITGeoAbstractControl): void {
		super.setControl(index, control);
	}
}

export class ITGeoFormGroup extends FormGroup {
	constructor(public controls: {[key: string]: ITGeoAbstractControl},
		validatorOrOpts?: ValidatorFn|ValidatorFn[]|AbstractControlOptions|null,
		asyncValidator?: AsyncValidatorFn|AsyncValidatorFn[]|null) {
			super(controls, validatorOrOpts, asyncValidator);
		}
	registerControl(name: string, control: ITGeoAbstractControl): ITGeoAbstractControl {
		return super.registerControl(name, control);
	}
	addControl(name: string, control: ITGeoAbstractControl): void {
		super.addControl(name, control);
  }
	setControl(name: string, control: ITGeoAbstractControl): void {
		super.setControl(name, control);
  }
}
