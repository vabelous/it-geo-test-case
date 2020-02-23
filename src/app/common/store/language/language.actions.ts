import { Action } from '@ngrx/store';

export enum LanguageActionTypes {
	SetLanguageSuccess = '[Language] SetLanguageSuccess',
	SetLanguageInitialState = '[Language] SetLanguageInitialState',
}

export class SetLanguageSuccess implements Action {
	readonly type = LanguageActionTypes.SetLanguageSuccess;
	constructor(public payload: LanguageValueDTO) {}
}

export class SetLanguageInitialState implements Action {
	readonly type = LanguageActionTypes.SetLanguageInitialState;
}

export type LanguageActions =
        SetLanguageSuccess
	|   SetLanguageInitialState;