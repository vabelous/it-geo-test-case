import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { DynamicFormService } from '@it-geo-services/dynamic-form';
import { tap } from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FormControlService } from '@it-geo-services/form-control';
import { ITGeoFormControl, ITGeoFormGroup } from '@it-geo-models/form-control-dto';

@Component({
	selector: 'app-dynamic-form',
	templateUrl: './dynamic-form.component.html',
	styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnDestroy {

	public dynamicFormSub$: Subscription;
	public dynamicForm$: Subject<DynamicFormDTO>;
	public dynamicForm: FormGroup;
	constructor(
		private fb: FormBuilder,
		private dynamicFormService: DynamicFormService,
		private formControlService: FormControlService,
	) {
		this.dynamicForm$ = new Subject<DynamicFormDTO>();
	}

	ngOnInit(): void {
		this.dynamicFormSub$ = this.dynamicFormService.getDynamicForm()
			.pipe(
				tap(response => this.dynamicForm$.next(response)),
				tap(response => {
					const dynamicForm = this.fb.group({});
					function getFiedlState(field: DynamicFormModelFieldDTO): ITGeoFormControl {
						const fc = new ITGeoFormControl();
						// fc.setValidators(this.getValidatorsByName(field.validators));
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
					const buildControls = (fields: DynamicFormModelFieldsDTO): any => {
						let groupOfFields: { [key: string]: ITGeoFormControl } = {};
						fields.forEach(field => {
							groupOfFields[field.key] = getFiedlState(field)
						})
						return groupOfFields;
					}
					const buildGroup = (group: FormGroup, block: DynamicFormModelBlockDTO) => {
						if (block.children.length) {
							group.addControl(block.key, this.fb.group({}))
							block.children.forEach((item) => buildGroup(group.get(block.key) as FormGroup, item));
						}
						if (block.fields.length) {
							group.addControl(block.key, this.fb.group((buildControls(block.fields))))
						}	
					}
					response.model.forEach(item => {
						buildGroup(dynamicForm, item)
					})
					console.log(dynamicForm);
				})

			)
			.subscribe();


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
