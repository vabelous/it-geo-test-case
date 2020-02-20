import { LanguageActions } from '@it-geo-actions';
import { LanguageActionTypes } from '@it-geo-actions';

export interface LanguageState  {
	pending: boolean;
	data: LanguageDTO;
}

export const initialState: LanguageState = {
	pending: false,
	data: "ru"
};

export const reducer = (state = initialState, action: LanguageActions): LanguageState => {
	switch (action.type) {
		case LanguageActionTypes.SetLanguageSuccess:
			return {
				...state,
				pending: false,
				data: action.payload
			};
		case LanguageActionTypes.SetLanguageInitialState:
			return {
				...initialState,
			};
		default:
			return state;
	}
};
