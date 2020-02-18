import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';

import { UserService } from '@sfo-services/index';

import { select, Store } from '@ngrx/store';
import * as fromReducers from '@sfo-store/reducers';
import * as fromSelectors from '@sfo-selectors';

import { Go } from '@sfo-actions';
import { map, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthGuardService implements CanActivateChild {

	constructor(
		private userService: UserService,
		private router: Router,
		private store: Store<fromReducers.auth.AuthState>
	) {
	}

	// private parseJWT(token: string) {
	// 	if (typeof token === 'string' && /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(token)) {
	// 		try {
	// 			return JSON.parse(window.atob(token.split('.')[1].replace('-', '+').replace('_', '/')));
	// 		} catch (e) {
	// 			return 'Invalid JWT Token';
	// 		}
	// 	} else {
	// 		return 'Invalid JWT Token';
	// 	}
	// }

	canActivateChild(): Observable<boolean> {
		return this.store.pipe(
			select(fromSelectors.auth.selectAccessToken),
			map((token: string) => !!token),
			tap((hasToken: boolean) => !hasToken && this.store.dispatch(new Go({ path: ['pages/login'] }))),
			take(1)
		);
	}
}
