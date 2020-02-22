import { OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '@it-geo-store/index';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import * as fromSelectors from '@it-geo-selectors';

export class I18nComponent implements OnInit {
  currentLanguage$: Observable<LanguageDTO>;
  translate: TranslateService;

  constructor(store: Store<State>, translate: TranslateService) {
    this.translate = translate;
    this.currentLanguage$ = store.pipe(select(fromSelectors.language.selectLanguageData));

    translate.setDefaultLang('ru');
  }

  ngOnInit(): void {
    this.currentLanguage$.subscribe(language => this.translate.use(language.value));
  }
}