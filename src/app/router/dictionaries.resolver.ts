import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map, take } from 'rxjs/operators';

import { select, Store } from '@ngrx/store';
import { State } from '@sfo-store/index';
import { RequestReasons, RequestDictionaries } from '@sfo-actions';
import * as fromReducers from '@sfo-store/reducers';
import * as fromSelectors from '@sfo-selectors';

@Injectable()
export class DictionariesResolver implements Resolve<Observable<fromReducers.reasons.ReasonsState>> {
	constructor(
		private store: Store<State>
	) { }

	resolve() {
		this.store.dispatch(new RequestDictionaries());
		this.store.dispatch(new RequestReasons());
		return this.store.pipe(
			select(fromSelectors.reasons.selectReasons),
			map(reasons => reasons),
			take(1)
		);
	}
}
