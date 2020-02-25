import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '@it-geo-store/index';
import { Go } from '@it-geo-store/actions';

@Component({
  selector: 'it-geo-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.scss']
})
export class LeftSideNavComponent implements OnInit {

  public hideTitles$: BehaviorSubject<boolean>;
  
  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.hideTitles$ = new BehaviorSubject(true);
  }

  public setHideTitles(event) {
    event.stopPropagation();
    this.hideTitles$.next(!this.hideTitles$.value)
  }

  public goToInteraction(selectedPath: string): void {
		this.store.dispatch(new Go({
			path: [selectedPath]
		}));
	}

}
