import { RouterStateUrl } from '@it-geo-store/router';
import { ActionReducerMap } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import * as fromReducers from './reducers';

import {
	RouterEffects,
} from '@it-geo-effects';

export interface State {
	language: fromReducers.language.LanguageState;
	router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
	language: fromReducers.language.reducer,
	router: routerReducer
};

export const effects = [
	RouterEffects
];


