import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { DynamicFormService } from '@it-geo-services/dynamic-form';
import { tap } from 'rxjs/operators';
import { ITGeoFormControl, ITGeoFormGroup } from '@it-geo-models/form-control-dto';
import { ValidatorFn } from '@angular/forms';
import { ValidatorsService } from '@it-geo-services/validators/validators.sercice';
import { MasksService } from '@it-geo-services/masks/masks.service';

@Component({
	selector: 'app-dynamic-form',
	templateUrl: './dynamic-form.component.html',
	styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnDestroy {

	public dynamicFormSub$: Subscription;
	public dynamicForm$: Subject<DynamicFormDTO>;
	public dynamicForm: ITGeoFormGroup;
	constructor(
		private dynamicFormService: DynamicFormService,
		private validatorsService: ValidatorsService,
		private masksService: MasksService
	) {
		this.dynamicForm = new ITGeoFormGroup({});
		this.dynamicForm$ = new Subject<DynamicFormDTO>();
	}

	ngOnInit(): void {
		this.dynamicFormSub$ = this.dynamicFormService.getDynamicForm()
			.pipe(
				tap(response => this.dynamicForm$.next(response)),
				tap(response => {
					const getFiedlState = (field: DynamicFormModelFieldDTO): ITGeoFormControl => {
						const fc = new ITGeoFormControl();
						fc.setValidators(getValidatorsByName(field.validators));
						fc.setValue(field.defaultValue);
						fc[field.disabled]();
						fc.placeholder = field.placeholder;
						fc.mask = field.mask ? this.masksService.getMaskByName(field.mask) : null;
						fc.label = field.label;
						fc.fieldType = field.fieldType;
						fc.inputType = field.inputType;
						fc.autocomplete = field.autocomplete;
						fc.required = field.required;
						fc.key = field.key;
						fc.updateValueAndValidity();
						return fc;
					}

					const getValidatorsByName = (validators: Array<string>): Array<ValidatorFn> => {
						if (!validators || !validators.length) { return null}
						const validatorsArray: Array<ValidatorFn> = [];
						validators.forEach(validator => validatorsArray.push(this.validatorsService.getValidatorByName(validator)));
						console.log(validatorsArray);
						return validatorsArray;
					}

					function buildControls(fields: DynamicFormModelFieldsDTO): any  {
						let groupOfFields: { [key: string]: ITGeoFormControl } = {};
						fields.forEach(field => {
							groupOfFields[field.key] = getFiedlState(field)
						})
						return groupOfFields;
					}
					function buildGroup(group: ITGeoFormGroup, block: DynamicFormModelBlockDTO) {
						if (block.children.length) {
							group.addControl(block.key, new ITGeoFormGroup({}))
							block.children.forEach((item) => buildGroup(group.get(block.key) as ITGeoFormGroup, item));
						}
						if (block.fields.length) {
							group.addControl(block.key, new ITGeoFormGroup(buildControls(block.fields)))
						}	
					}
					const form = new ITGeoFormGroup({});
					response.model.forEach(block => {
						buildGroup(form, block)
					})
					this.dynamicForm = form;

					console.log(this.dynamicForm);

				})

			)
			.subscribe(() => console.log(this.dynamicForm));


	}




	








	ngOnDestroy() {
		if (this.dynamicFormSub$) {
			this.dynamicFormSub$.unsubscribe();
		}
	}

	onSubmit() {
		console.log('submit');
	}
}
