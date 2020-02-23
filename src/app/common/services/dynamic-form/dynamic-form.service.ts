import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { RestAPIService } from '@it-geo-services/rest-api.service';

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
		}).pipe(
			tap(resp => console.log(resp))
		);
	}
}
