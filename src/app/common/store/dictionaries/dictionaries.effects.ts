import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { DictionariesService } from '@it-geo-services/index';
import { DictionariesActionTypes } from '@it-geo-actions';
import { SetDictionariesSuccess } from '@it-geo-actions';
import { forkJoin } from 'rxjs';

@Injectable()
export class DictionariesEffects {

  constructor(
		private actions$: Actions,
		private dictionariesService: DictionariesService,
	) {}

	@Effect()
	getDictionaries$ = this.actions$
	.pipe(
		ofType(DictionariesActionTypes.RequestDictionaries),
		switchMap(() => {
			return forkJoin([
				this.dictionariesService.getDictionaries({code: 'languages'} as DictionariesGetDTO),
			]).pipe(
				map(([ 
						languages,
					]) => ({ 
						languages
					}))
			);
		}),
		map(response => new SetDictionariesSuccess(response))
	);
}