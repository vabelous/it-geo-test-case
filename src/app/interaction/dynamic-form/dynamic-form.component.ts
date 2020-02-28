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
				// tap(response => this.getFormControlsList(response.model))
				tap(response => {
					const form = this.fb.group({});
					
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
						// fc.updateValueAndValidity();
						return fc;
					}

					const buildControls = (fields: DynamicFormModelFieldsDTO) => {
						let groupOfFields: { [key: string]: ITGeoFormControl } = {};
						fields.forEach(field => {
							groupOfFields[field.key] = getFiedlState(field)
						})
						console.log("buildControls: ", groupOfFields)
						return groupOfFields;
					}
					
					const fill = (group: FormGroup, filled: DynamicFormModelBlockDTO) => {
						if (filled.children.length) {
							group.addControl(filled.key, this.fb.group({}))
							filled.children.forEach((item) => fill(group.get(filled.key) as FormGroup, item));
						}

						if (filled.fields.length) {
							group.addControl(filled.key, this.fb.array((filled.fields)))
						}
							
					}
					
					response.model.forEach(item => {
						fill(form, item)
					})
					console.log(form);
				})

			)
			.subscribe();
		// this.dynamicForm = this.fb.group({});
		// this.formControlService.getFormControlsList()

	}

	// const form = this.fb.group({});
    //       const fill = (group: FormGroup, filled: DynamicFormModelBlockDTO) => {
    //         if (filled.children.length) {
    //           group.addControl(filled.key, this.fb.group({}))
    //           filled.children.forEach((item) => fill(group.get(filled.key) as FormGroup, item));
    //         }

    //         if (filled.fields.length) {
    //           group.addControl(filled.key, this.fb.array(filled.fields))
    //         }
    //       }
    //       response.model.forEach(item => {
    //         fill(form, item)
    //       })
    //       console.log(form);


	public getFormControlsList(data: DynamicFormModelBlocksDTO): ITGeoFormGroup {

		// function getFiedlState(field: DynamicFormModelFieldDTO): ITGeoFormControl {
		// 	const fc = new ITGeoFormControl();
		// 	// fc.setValidators(this.getValidatorsByName(field.validators));
		// 	fc.setValue(field.defaultValue);
		// 	fc[field.disabled]();
		// 	fc.placeholder = field.placeholder;
		// 	fc.mask = field.mask ? this.masksService.getMaskByName(field.mask) : null;
		// 	fc.label = field.label;
		// 	fc.fieldType = field.fieldType;
		// 	fc.inputType = field.inputType;
		// 	fc.autocomplete = field.autocomplete;
		// 	fc.required = field.required;
		// 	fc.key = field.key;
		// 	// fc.updateValueAndValidity();
		// 	return fc;
		// }

		const dynamicForm = new FormGroup({});

		// function buildControls(fields: DynamicFormModelFieldsDTO) {
		// 	let groupOfFields: { [key: string]: ITGeoFormControl } = {};
		// 	fields.forEach(field => {
		// 		groupOfFields[field.key] = getFiedlState(field)
		// 	})
		// 	console.log("buildControls: ", groupOfFields)
		// 	return groupOfFields;
		// }


		function buildGroup(group: FormGroup, block: DynamicFormModelBlockDTO) {
			console.log("group: ", group);
			console.log("block: ", block);
			if (block.children.length) {
				group.addControl(block.key, new FormGroup({}));
				block.children.forEach((childBlock) => buildGroup(group.get(block.key) as FormGroup, childBlock));
			}
			// if (block.fields.length) {
			// 	group.addControl(block.key, this.fb.array(buildControls(block.fields)))
			// }

		}

		data.forEach(block => {
			buildGroup(dynamicForm, block);
		})

		console.log(dynamicForm);
		return null;



		// function buildControls(fields: DynamicFormModelFieldsDTO) {
		// 	let groupOfFields: { [key: string]: ITGeoFormControl } = {};
		// 	fields.forEach(field => {
		// 		groupOfFields[field.key] = getFiedlState(field)
		// 	})
		// 	console.log("buildControls: ", groupOfFields)
		// 	return new FormGroup(groupOfFields);
		// }

		// // let group = this.fb.group({})
		// let group: object = {}

		// function buildGroup(blocks: DynamicFormModelBlocksDTO, groupOfBlock: object) {
			
		// 	blocks.forEach(block => {
				
		// 		console.log("block.key: ", block);
				
		// 		if (block.children && block.children.length) {
		// 			buildGroup(block.children, groupOfBlock);
		// 		}
				
		// 		if (block.fields && block.fields.length) {
		// 			groupOfBlock[block.key] =  buildControls(block.fields);
		// 		} else {
		// 			groupOfBlock[block.key] =  new FormGroup({});
		// 		}
		// 		console.log("group ("+block.key+"): ", groupOfBlock[block.key])
		// 	})
		// 	return groupOfBlock;
		// }
		// console.log("data: ", buildGroup(data, group));
		// // return this.fb.group(buildGroup(data));
		// return null;








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
