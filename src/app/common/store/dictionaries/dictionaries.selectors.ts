import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducers from '@it-geo-reducers';
import { selectLanguageData } from '@it-geo-store/language/language.selectors';

type State = fromReducers.dictionaries.DictionariesState;

export const selectDictionaries = createFeatureSelector<State>('dictionaries');

export const selectDictionariesData = createSelector(
	selectDictionaries,
	(state: State) => state.data
);

export const selectDictionariesPending = createSelector(
	selectDictionaries,
	(state: State) => state.pending
);

export const selectDictionariesLanguages = createSelector(
	selectDictionariesData,
	(state: DictionariesStoreDTO) => state.languages
);

export const selectDictionariesLanguagesByValue = createSelector(
	selectLanguageData,
	selectDictionariesLanguages,
	(selectLanguage: LanguageValueDTO, languages: LanguagesDTO ) => {
		return languages.length && languages.find(language => language.value === selectLanguage);
	}
);
