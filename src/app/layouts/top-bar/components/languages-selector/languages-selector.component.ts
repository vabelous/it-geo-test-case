import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '@it-geo-store/index';
import * as fromSelectors from '@it-geo-selectors';
import { SetLanguageSuccess } from '@it-geo-store/actions';

@Component({
  selector: 'it-geo-languages-selector',
  templateUrl: './languages-selector.component.html',
  styleUrls: ['./languages-selector.component.scss']
})
export class LanguagesSelectorComponent implements OnInit {

  public languages$: Observable<LanguagesDTO>;
  public selectedLanguage$: Observable<LanguageDTO>;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit(): void {
    this.languages$ = this.store.pipe(select(fromSelectors.dictionaries.selectDictionariesLanguages));
    this.selectedLanguage$ = this.store.pipe(select(fromSelectors.dictionaries.selectDictionariesLanguagesByValue));
  }

  selectLanguage(value: LanguageValueDTO) {
    this.store.dispatch(new SetLanguageSuccess(value));
  }

}
