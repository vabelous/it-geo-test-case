import { Action } from '@ngrx/store';

export enum DictionariesActionTypes {
	RequestDictionaries = '[Dictionaries] RequestDictionaries',
	SetDictionariesSuccess = '[Dictionaries] SetDictionariesSuccess',
	SetDictionariesError = '[Dictionaries] SetDictionariesError',
	SetDictionariesInitialState = '[Dictionaries] SetDictionariesInitialState',
}

export class RequestDictionaries implements Action {
	readonly type = DictionariesActionTypes.RequestDictionaries;
}

export class SetDictionariesSuccess implements Action {
	readonly type = DictionariesActionTypes.SetDictionariesSuccess;
	constructor(public payload: DictionariesStoreDTO) {}
}

export class SetDictionariesError implements Action {
	readonly type = DictionariesActionTypes.SetDictionariesError;
	constructor(public payload: any) {}
}

export class SetDictionariesInitialState implements Action {
	readonly type = DictionariesActionTypes.SetDictionariesInitialState;
}

export type DictionariesActions =
		RequestDictionaries
	|   SetDictionariesSuccess
	|	SetDictionariesError
	|   SetDictionariesInitialState;