import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { RestAPIService } from '@it-geo-services/rest-api.service';

@Injectable({ providedIn: 'root' })
export class DictionariesService {

	private baseUrl: string;

	constructor(
		private http: HttpClient,
		private restAPIService: RestAPIService,
	) { this.baseUrl = '/it-geo/api'; }

	public getDictionaries(params: DictionariesGetDTO): Observable<LanguagesDTO> {
		return this.http.get<LanguagesDTO>(`${this.baseUrl}/dictionaries/${params.code}`, {
			headers: this.restAPIService.getHttpHeadersFromObject({'HideSpinner': 'true'})
		});
	}

}
