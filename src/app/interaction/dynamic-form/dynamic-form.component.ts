import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { DynamicFormService } from '@it-geo-services/dynamic-form';
import { tap } from 'rxjs/operators';
import { ITGeoFormControl, ITGeoFormGroup } from '@it-geo-models/form-control-dto';

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
	) {
		this.dynamicForm = new ITGeoFormGroup({});
		this.dynamicForm$ = new Subject<DynamicFormDTO>();
	}

	ngOnInit(): void {
		this.dynamicFormSub$ = this.dynamicFormService.getDynamicForm()
			.pipe(
				tap(response => this.dynamicForm$.next(response)),
				tap(response => {
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
					response.model.forEach(block => {
						buildGroup(this.dynamicForm, block)
					})
					console.log(this.dynamicForm);

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
