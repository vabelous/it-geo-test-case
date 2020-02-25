import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { RestAPIService } from '@it-geo-services/rest-api.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DynamicFormService {

	private baseUrl: string;

	constructor(
		private http: HttpClient,
		private restAPIService: RestAPIService
	) { this.baseUrl = '/it-geo/api'; }

	getDynamicForm(): Observable<DynamicFormDTO> {
		return this.http.get<DynamicFormDTO>(`${this.baseUrl}/interaction/dynamic-form`, {
			headers: this.restAPIService.getHttpHeadersFromObject({'HideSpinner': 'true'})
		})
		.pipe(
			map(response => this.concatBlockData(response)),
			map(response => this.concatFieldData(response))
		);
	}

	private concatBlockData (dynamicForm: DynamicFormDTO): DynamicFormDTO {
		
		function concatData(blocks: DynamicFormModelBlocksDTO) {
			blocks.forEach(block => {
				block.style = dynamicForm.blocks.find( dfblock => dfblock.id === block.block_id).style;
				if (block.children && block.children.length) {
					concatData(block.children);
				}
			})
		}
		concatData(dynamicForm.model);
		return dynamicForm;
		
	}
	
	private concatFieldData (dynamicForm: DynamicFormDTO): DynamicFormDTO {

		function concatData(blocks: DynamicFormModelBlocksDTO) {
			blocks.forEach(block => {
				block.fields.forEach(field => {
					let findField = dynamicForm.fields.find( dffield => dffield.id === field.field_id);
					if (findField) {
						field.fieldType = findField.fieldType;
						field.inputType = findField.inputType;
						field.label = findField.label;
						field.disabled = findField.disabled;
						field.autocomplete = findField.autocomplete;
						field.defaultValue = findField.defaultValue;
						field.options = findField.options;
						field.placeholder = findField.placeholder;
						field.tooltip = findField.tooltip;
						field.required = findField.required;
						field.mask = findField.mask;
						field.validators = findField.validators;
						field.style = findField.style;
					}

				})
				if (block.children && block.children.length) {
					concatData(block.children);
				}
			})
		}
		concatData(dynamicForm.model);
		return dynamicForm;

	}
}
