import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map, take } from 'rxjs/operators';

import { select, Store } from '@ngrx/store';

import { AppCacheService } from '@sfo-services/app-cache.service';
import { ContentService } from '@sfo-services/index';

// import { ScenarioDefDTO } from '@sfo-models/scenario-def-dto';

import { State } from '@sfo-store/index';
import { RequestScenarioDefs } from '@sfo-actions';
import * as fromSelectors from '@sfo-selectors';


@Injectable()
export class ScenarioDefsResolver implements Resolve<Array<ScenarioDefDTO>> {
	constructor(
		private contentService: ContentService,
		private appCache: AppCacheService,
		private store: Store<State>
	) { }

	// resolve(): Observable<Array<ScenarioDefDTO>> {

	// 	return this.contentService.getScenarioDefs().pipe(map(
	// 		(scenarioDefs: Array<ScenarioDefDTO>) => {
	// 			this.appCache.scenarioDefs = scenarioDefs;
	// 			return scenarioDefs;
	// 		}
	// 	));

	// }

	resolve(): Observable<Array<ScenarioDefDTO>> {
		this.store.dispatch(new RequestScenarioDefs());
		return this.store.pipe(
			select(fromSelectors.scenarioDefs.selectScenarioDefsData),
			map(scenarioDefs => scenarioDefs),
			take(1)
		);
	}
}
