import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  constructor() { }

  getHttpParametrsFromObject(parametrs: object): HttpParams {
		return Object
		.getOwnPropertyNames(parametrs)
		.reduce((p, key) => p.set(key, parametrs[key]), new HttpParams());
	}

	getHttpHeadersFromObject(parametrs: object): HttpHeaders {
		return Object
		.getOwnPropertyNames(parametrs)
		.reduce((p, key) => p.set(key, parametrs[key]), new HttpHeaders());
  }
  
}
