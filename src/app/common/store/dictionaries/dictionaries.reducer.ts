import { DictionariesActionTypes } from '@it-geo-actions';
import { DictionariesActions } from '@it-geo-actions';


export interface DictionariesState {
	pending: boolean;
	data: DictionariesStoreDTO;
}

export const initialState: DictionariesState = {
	pending: false,
	data: {
		languages: []
	}
};

export const reducer = (state = initialState, action: DictionariesActions): DictionariesState => {
	switch (action.type) {
		case DictionariesActionTypes.RequestDictionaries:
			return {
				...state,
				pending: true
			};
		case DictionariesActionTypes.SetDictionariesSuccess:
			return {
				...state,
				pending: false,
				data: action.payload
			};
		case DictionariesActionTypes.SetDictionariesError:
			return {
				...state,
				pending: false
			};
		case DictionariesActionTypes.SetDictionariesInitialState:
			return {
				...initialState
			};
		default:
			return state;
	}
};
