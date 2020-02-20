import { Component } from '@angular/core';
import { I18nComponent } from 'app/common/i18n/i18n.component';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { State } from '@it-geo-store/index';

@Component({
	selector: 'error-403',
	templateUrl: './error-403.component.html',
	styleUrls: ['./error-403.component.scss']
})
export class Error403Component extends I18nComponent {

	constructor(
		readonly store: Store<State>,
		readonly translate: TranslateService
	  ) {
		super(store, translate);
	  }

}
