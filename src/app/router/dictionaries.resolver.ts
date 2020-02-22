import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '@it-geo-store/index';
import { RequestDictionaries } from '@it-geo-actions';


@Injectable()
export class DictionariesResolver implements Resolve<any> {
	constructor(
        private store: Store<State>,
	) { }

	resolve() {
		console.log('resolve');
        this.store.dispatch(new RequestDictionaries());
	}
}