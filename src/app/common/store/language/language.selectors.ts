import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducers from '@it-geo-store/reducers';

type State = fromReducers.language.LanguageState;

export const selectLanguage = createFeatureSelector<State>('language');

export const selectLanguageData = createSelector(
	selectLanguage,
	(state: State) => state.data
);

export const selectLanguagePending = createSelector(
	selectLanguage,
	(state: State) => state.pending
);
